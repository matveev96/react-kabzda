import React from "react";

type UncontrolledRatingProps = {

}


export function UncontrolledRating() {
    const [value, setValue] = React.useState(0);
    return (
        <div>
            <Star selected={value > 0} setValue={setValue} value={1}/>
            <Star selected={value > 1} setValue={setValue} value={2}/>
            <Star selected={value > 2} setValue={setValue} value={3}/>
            <Star selected={value > 3} setValue={setValue} value={4}/>
            <Star selected={value > 4} setValue={setValue} value={5}/>

        </div>
    )
}

type StarTypeProps = {
    selected: boolean
    value: 1 | 2 | 3 | 4 | 5
    setValue: (value: 1 | 2 | 3 | 4 | 5) => void
}

function Star(props: StarTypeProps) {

    const starStyle = {
        cursor: 'pointer',
        fontWeight: props.selected ? 'bold' : 'normal',
    }

    return <>
        <span onClick={() => props.setValue(props.value)} style={starStyle}>Star </span>
    </>


}