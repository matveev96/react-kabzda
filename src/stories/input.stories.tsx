import React, {ChangeEvent, useRef, useState} from 'react';

export default {
    title: "input"
}

export const UncontrolledInput = () => <input type="text"/>;

export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState("")

    const onChange = (event:ChangeEvent<HTMLInputElement> ) => {
        let currentVal = event.currentTarget.value
        setValue(currentVal)
    }
    return <>
        <input value={value} onChange={onChange}/> - {value}
    </>
};
export const GetValueOfUncontrolledInputBybuttonPress = () => {
    const [value, setValue] = useState("")
    const inputRef = useRef<HTMLInputElement>(null)

    const save = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }
    return <>
        <input ref={inputRef}/>
        <button onClick={save}>Set me</button>
         - actual value: {value}

    </>
};

export const ControlledInputWithFixedValue = () => <input value={"qwerty"}/>;


