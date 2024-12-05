import type {Meta, StoryObj} from '@storybook/react';
import { action } from '@storybook/addon-actions';

import {Accordion} from "./Accordion";
import {useState} from "react";

export default {
    title: 'Accordion',
    component: Accordion
};

// type Story = StoryObj<typeof Accordion>;
//
// export const FirstStory: Story = {
//     args: {
//         title: 'Hello',
//         accordionCollapsed: false,
//         onClick: () => {}
//     }
// }

const onClickHandler = action('onClick');
export const CollapsedAccordion = () => {
    return  <Accordion title={'Collapsed Accordion'}
                       onClick={() => {
                           console.log('blablabla')
                       }}
                       accordionCollapsed={true}/>
}

export const OpenedAccordion = () => {
    return <Accordion title={'Opened Accordion'}
                      onClick={onClickHandler}
                      accordionCollapsed={false}/>
}

export const AccordionDemo = () => {
    const [collapsed, setCollapsed] = useState<boolean>(false)
    return <Accordion title={'Accordion'}
                      onClick={() => {setCollapsed(!collapsed)}}
                      accordionCollapsed={collapsed}/>
}