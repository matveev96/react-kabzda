import React from "react";

type AccordionPropsType = {
    title: string;
    collapsed: boolean;
}

export function Accordion({title, collapsed}: AccordionPropsType) {
        return (
            <div>
                <AccordionTitle titleValue={title}/>
                {!collapsed && <AccordionBody/>}
            </div>
        )

}

type AccordionTitlePropsType = {
    titleValue: string;
}

function AccordionTitle({titleValue}: AccordionTitlePropsType) {
    console.log('AccordionTitle rendered')
    return (
        <h3>{titleValue}</h3>
    )
}

function AccordionBody() {
    console.log('AccordionBody rendered')
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
        </ul>
    )
}