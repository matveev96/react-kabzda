import React from "react";
import type {Meta, StoryObj} from '@storybook/react';
import {action} from '@storybook/addon-actions';

import {useState} from "react";
import {SelectDimych} from "./SelectDimych";

export default {
    title: 'SelectDimych',
    component: SelectDimych
};

const items = [
    {title: "alex", value: '1'},
    {title: "dimych", value: '2'},
    {title: "valera", value: '3'},
]


export const WithValue = () => {
    const [value, setValue] = useState('2')
    return <SelectDimych
        items={items}
        onChange={setValue}
        value={value}
    />
}

export const WithoutValue = () => {
    const [value, setValue] = useState(null)
    return <SelectDimych
        items={items}
        onChange={setValue}
        value={value}
    />
}

// export const SelectDimychBeta = () => <SelectDimych
//     items={items}
//     onChange={action("value changes")}
//     value={1}
// />
