import React from "react";

type UncontrolledRatingProps = {

}


export function UncontrolledRating() {
    const [value, setValue] = React.useState(0);
    return (
        <div>
            <Star selected={value > 0} onClick={() => setValue(1)}/>
            <Star selected={value > 1} onClick={() => setValue(2)}/>
            <Star selected={value > 2} onClick={() => setValue(3)}/>
            <Star selected={value > 3} onClick={() => setValue(4)}/>
            <Star selected={value > 4} onClick={() => setValue(5)}/>

        </div>
    )
}

type StarTypeProps = {
    selected: boolean
    onClick: () => void
}

function Star(props: StarTypeProps) {

    const starStyle = {
        cursor: 'pointer',
        fontWeight: props.selected ? 'bold' : 'normal',
    }

    return <>
        <span onClick={props.onClick} style={starStyle}>Star </span>
    </>


}