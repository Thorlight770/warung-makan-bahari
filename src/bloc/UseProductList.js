import { useState } from "react"

const useProductList = () => {
    const [screenState, setScreenState] = useState({
        list: [],
        pages: {},
        isLoading: false
    })

    return{
        screenState,
        setScreenState
    }
}

export default useProductList;