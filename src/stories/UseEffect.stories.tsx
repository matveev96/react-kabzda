import {useEffect, useState} from "react";

export default {
    title: 'UseEffect demo',
}

export const SimpleExample = () => {
    const [fake, setFake] = useState(1);
    const [counter, setCounter] = useState(1);

    console.log('SimpleExample')

// UseEffect делает сайд эффеты типо:
    //api.getUsers().then('')
    //setInterval
    //indexDB
    //document.getElementById

    useEffect(() => {
        console.log('useEffect run every render')
        document.title = counter.toString()
    });

    useEffect(() => {
        console.log('useEffect run only first render')
        document.title = counter.toString()
    }, []);

    useEffect(() => {
        console.log('useEffect run every time when counter change')
        document.title = counter.toString()
    }, [counter]);

    return <>
        Hello, {counter} {fake}
        <button onClick={() => setCounter(counter+1)}>count+</button>
        <button onClick={() => setFake(fake+1)}>fake+</button>
    </>
}