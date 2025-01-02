import React, {useState} from "react";


export default {
    title: 'UseState demo'
}

function generateData() {
    //difficult counting
    console.log('GenerateData')
    return 32323232323;
}

export const Example1 = () => {
    console.log("Example1")

    // const initialValue = useMemo(generateData, [])

    const [counter, setCounter] = useState<number>(generateData)
    return <>
        <button onClick={() => setCounter(state => counter+1)}>+</button>
        {counter}
    </>
}

