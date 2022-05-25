import { useSelector } from "react-redux";
import { Increment } from "./Increment";

const AppCoba = (props) => {
    const number = useSelector((state) => state.number)
    return(
        <>
        <h1>{number}</h1>
        <Increment/>
        {/* <button onClick={decrement}>-</button> */}
        </>
    )
}

export default AppCoba;