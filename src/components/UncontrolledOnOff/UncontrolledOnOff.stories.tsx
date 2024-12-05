import { action } from '@storybook/addon-actions';

import {UncontrolledOnOff} from "./UncontrolledOnOff";
import {useState} from "react";

export default {
    title: 'UncontrolledOnOff',
    component: UncontrolledOnOff
};

export const UncontrolledOnOffDemo = () => {
    return <UncontrolledOnOff title={'UncontrolledOnOffDemo'} defaultOn={true}/>
}