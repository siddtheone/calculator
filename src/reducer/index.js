export const initialState = {
    to: [],
    result: '',
    op1: '',
}

export default function reducer(st = initialState, {action, payload}) {
    switch(action) {
        case 'reset':
            return {
                to: [],
                ...initialState,
            };
        default:
            return st;
    }
}