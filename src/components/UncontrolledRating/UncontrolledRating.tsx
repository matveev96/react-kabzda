import React from "react";

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5

type UncontrolledRatingProps = {
    title: string;
    defaultRating?: RatingValueType
    onChange: (value: RatingValueType) => void
}


export function UncontrolledRating({title, defaultRating, onChange}: UncontrolledRatingProps) {
    const [value, setValue] = React.useState<RatingValueType>(defaultRating ? defaultRating : 0);
    return (
        <div>
            <h3>{title}</h3>
            <Star selected={value > 0} setValue={() => {setValue(1); onChange(1)}} />
            <Star selected={value > 1} setValue={() => {setValue(2); onChange(2)}} />
            <Star selected={value > 2} setValue={() => {setValue(3); onChange(3)}} />
            <Star selected={value > 3} setValue={() => {setValue(4); onChange(4)}} />
            <Star selected={value > 4} setValue={() => {setValue(5); onChange(5)}} />
        </div>
    )
}

type StarTypeProps = {
    selected: boolean
    setValue: (value: RatingValueType) => void
}

function Star(props: StarTypeProps) {
    const starStyle = {
        cursor: 'pointer',
        fontWeight: props.selected ? 'bold' : 'normal',
    }
    return <>
        <span onClick={() => props.setValue(0)} style={starStyle}>Star </span>
    </>
}