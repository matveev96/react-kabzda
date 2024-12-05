import { action } from '@storybook/addon-actions';

import {UncontrolledRating} from "./UncontrolledRating";
import {useState} from "react";

export default {
    title: 'UncontrolledRating',
    component: UncontrolledRating
};

export const UncontrolledRatingDemo = () => {
    return <UncontrolledRating title={'UncontrolledRatingDemo'}/>
}