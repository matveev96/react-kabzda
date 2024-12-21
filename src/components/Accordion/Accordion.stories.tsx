import type {Meta, StoryObj} from '@storybook/react';
import {action} from '@storybook/addon-actions';

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
const onClickCallbackHandler = action('onClickCallbackHandler');
export const CollapsedAccordion = () => {
    return <Accordion title={'Collapsed Accordion'}
                      onChange={() => {
                          console.log('blablabla')
                      }}
                      onClick={onClickCallbackHandler}
                      accordionCollapsed={true}
                      items={[]}/>
}

export const OpenedAccordion = () => {
    return <Accordion title={'Opened Accordion'}
                      onChange={onClickHandler}
                      onClick={onClickCallbackHandler}
                      accordionCollapsed={false}
                      items={[
                          {title: "alex", value: 1},
                          {title: "dimych", value: 2},
                          {title: "valera", value: 3}
                      ]}/>
}

export const AccordionDemo = () => {
    const [collapsed, setCollapsed] = useState<boolean>(false)
    return <Accordion title={'Accordion'}
                      onChange={() => {
                          setCollapsed(!collapsed)
                      }}
                      onClick={onClickCallbackHandler}
                      accordionCollapsed={collapsed}
                      items={[
                          {title: "alex", value: 1},
                          {title: "dimych", value: 2},
                          {title: "valera", value: 3}
                      ]}/>
}