export const initialState = {
    toCalc: [],
    screen: '0'
}

export const operators = ['+', '-', '*', '/'];

export default function reducer(state, {action, payload}) {
  console.log(state, action, payload)
  switch(action) {
    case 'reset':
      return {
        ...initialState,
        toCalc: [],
      };
    case 'enter':
      if (state.screen === 'ERROR') {
        return state;
      }

      const {screen, toCalc} = state;

      if ([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, '.'].indexOf(payload) > -1) {
        let newScreen;
        const toCalcCopy = toCalc.slice();

        if  ( // Cases to ignore
            (screen === '0' && payload === 0) ||
            (screen.includes('.') && payload === '.')
        ) {
          newScreen = state.screen;
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
          screen: newScreen
        }
      } else if (operators.indexOf(payload) > -1) {
        if(!isNaN(screen)) {
          return {
            toCalc: [...toCalc, screen],
            screen: payload
          }
        }
      }
      break;
    case 'calc':
      const x = [...state.toCalc, state.screen];
      if (operators.indexOf(x[x.length - 1]) > -1) {
        x.pop();
      }
      return {
        toCalc: x,
        screen: eval(x.join(' ')).toString()
      }
    default:
      return state;
  }
}
