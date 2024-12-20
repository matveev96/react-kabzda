import type {Meta, StoryObj} from '@storybook/react';
import {action} from '@storybook/addon-actions';

import {useState} from "react";
import {SelectMyBeta} from "./SelectMy";

export default {
    title: 'SelectMy',
    component: SelectMyBeta
};

const items = [
    {title: "alex", value: 1},
    {title: "dimych", value: 2},
    {title: "valera", value: 3},
    {title: "eugene", value: 4},
    {title: "sergei", value: 5},
]


export const BetaSelect = () => {
    let [selectedTitle, setSelectedTitle] = useState(items[0].title)
    let [collapsed, setCollapsed] = useState(true)

    const onClickCollapsedHandler = () => {
        setCollapsed(!collapsed)
    }

    const onClickTitleHandler = (i: number) => {
        setSelectedTitle(items[i].title)
        setCollapsed(false)

    }

    const onBlurHandler = () => {
        setCollapsed(false)
    }

    return <SelectMyBeta onClickCollapsed={onClickCollapsedHandler}
                   onClickSelected={onClickTitleHandler}
                   onBlur={onBlurHandler}
                   collapsed={collapsed}
                   title={selectedTitle}
                   items={items}

    />
}
