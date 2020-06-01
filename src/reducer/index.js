export const initialState = {
    toCalc: [],
    screen: '0',
    isCalculated: false,
}

export const operators = ['+', '-', 'X', '/'];

export default function reducer(state, {action, payload}) {

  switch(action) {
    case 'reset':
      return {
        ...initialState,
        toCalc: [],
      };
    case 'enter':
      const {screen, toCalc, isCalculated} = state;

      if ([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, '.'].indexOf(payload) > -1) {
        let newScreen;
        const toCalcCopy = toCalc.slice();

        if  ( // Cases to ignore
            (screen === '0' && payload === 0) ||
            (screen.includes('.') && payload === '.')
        ) {
          newScreen = state.screen;
        } else if (isCalculated) {
          return {
            ...initialState,
            screen: payload.toString(),
          }
        } else if (screen === '0' && payload > 0) {
          newScreen = payload.toString();
        } else if (operators.indexOf(screen) > -1) {
          newScreen = payload.toString();
          toCalcCopy.push(screen);
        } else {
          newScreen = screen + payload;
        }
        return {
          toCalc: toCalcCopy,
          screen: newScreen,
          isCalculated: false,
        }
      } else if (operators.indexOf(payload) > -1) {
        if(isCalculated) {
          return {
            toCalc: [screen],
            screen: payload,
            isCalculated: false
          }
        }

        if(!isNaN(screen)) {
          return {
            toCalc: [...toCalc, screen],
            screen: payload
          }
        } else {
          if (payload !== '-') {
            if (screen !== '-') {
              return {
                ...state,
                screen: payload
              }
            } else {
              return {
                toCalc: [...toCalc.slice(0, -1)],
                screen: payload,
              }
            }

          } else {
            return {
              toCalc: [...toCalc, screen],
              screen: payload
            }
          }
        }
      }
      break;
    case 'calc':
      if (state.isCalculated) {
        return state;
      }
      const x = [...state.toCalc, state.screen];
      if (operators.indexOf(x[x.length - 1]) > -1) {
        x.pop();
      }
      return {
        toCalc: x,
        isCalculated: true,
        screen: eval(x.map(e => e === 'X' ? '*' : e).join(' ')).toString()
      }
    default:
      return state;
  }
}
