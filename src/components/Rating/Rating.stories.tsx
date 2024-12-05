import type {Meta, StoryObj} from '@storybook/react';
// import { action } from '@storybook/addon-actions';

import {Rating, RatingValueType} from "./Rating";
import {useState} from "react";

export default {
    title: 'Rating stories',
    component: Rating
};

export const EmptyRating = () => {
    return <Rating value={0} onClick={x=>x} title={'EmptyStars'}/>
}
export const Rating1 = () => {
    return <Rating value={1} onClick={x=>x} title={'Rating1'}/>
}
export const Rating2 = () => {
    return <Rating value={2} onClick={x=>x} title={'Rating2'}/>
}
export const Rating3 = () => {
    return <Rating value={3} onClick={x=>x} title={'Rating3'}/>
}
export const Rating4 = () => {
    return <Rating value={4} onClick={x=>x} title={'Rating4'}/>
}
export const Rating5 = () => {
    return <Rating value={5} onClick={x=>x} title={'Rating5'}/>
}
export const ChangeRating = () => {
    const [rating, setRating] = useState<RatingValueType>(3)
    return <Rating value={rating} onClick={setRating} title={'ChangeRating'}/>
}
