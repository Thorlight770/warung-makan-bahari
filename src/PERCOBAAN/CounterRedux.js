import ActionType from "./ActionType";

export const initialState = {
    number : 5
}

const counterReducer = (state = initialState, action) => {
    switch(action.type){
        case ActionType.PLUS : {
            return {
                ...state, number : state.number + 1
            }
        }
        case ActionType.MINUS : {
            return {
                ...state, number : state.number - 1
            }
        }
        default : return state
    }
}

export default counterReducer;