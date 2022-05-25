import { createContext, useReducer } from "react";
import counterRedux, {initialState} from "./CounterRedux";
import { Increment } from "./Increment";

export const RootContext = createContext();

const AppCoba = () => {
    const [data, dispatch] = useReducer(counterRedux, initialState);

    const handleIncrement = (val) => {
        dispatch(val)
    }
    return(
        <RootContext.Provider
        value = {{value : data, dispatch : handleIncrement}}
        >
            <Increment/>
        </RootContext.Provider>
    )
}

export default AppCoba;