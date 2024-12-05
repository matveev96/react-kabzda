import type {Meta, StoryObj} from '@storybook/react';
import { action } from '@storybook/addon-actions';

import {useState} from "react";
import {OnOff} from "./OnOff";
import {Rating, RatingValueType} from "../Rating/Rating";

export default {
    title: 'OnOff stories',
    component: OnOff
};

const callback = action("on off clicked")

export const OnMode = () => {
    return <OnOff onOff={true} onClick={callback} title={'OnMode'} />
}
export const OffMode = () => {
    return <OnOff onOff={false} onClick={callback} title={'OnOff'} />
}

export const ModeChanging = () => {
    const [value, setValue] = useState(false)
    return <OnOff onOff={value} onClick={setValue} title={'ModeChanging'} />
}
