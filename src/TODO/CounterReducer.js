import ActionType from "./ActionType";

const initialState = {
    todos : [{
        todo : "Makan",
        desc : "Soto enak nih"
    },{
        todo : "Minum",
        desc : "Bajigur boleh juga"
    }
    ],
    addedForm : false
}

const counterReducer = (state = initialState, action) => {
    switch(action.type){
        case ActionType.ADD : {
            return {...state,
                todos : [...state.todos, action.payload],
                addedForm : action.data
            }
        }
        case ActionType.SET_COMPONENT : {
            return {...state,
                addedForm : action.data
            }
        }
        default : return state
    }
}

export default counterReducer;