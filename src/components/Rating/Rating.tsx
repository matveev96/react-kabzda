import React from "react";

type RatingProps = {
    value: 0 | 1 | 2 | 3 | 4 | 5;
}

export function Rating({ value }: RatingProps) {

    return (
        <div>
            <Star selected={value > 0}/>
            <Star selected={value > 1}/>
            <Star selected={value > 2}/>
            <Star selected={value > 3}/>
            <Star selected={value > 4}/>
        </div>
    )
}

type StarTypeProps = {
    selected: boolean
}

function Star(props: StarTypeProps) {
    debugger;
    return props.selected ? <span><b>Star </b></span> : <span>Star </span>

}