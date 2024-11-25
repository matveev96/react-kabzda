import React from "react";

export type AccordionPropsType = {
    title: string;
    accordionCollapsed: boolean;
    onClick: (accordionCollapsed: boolean) => void;
}

export function Accordion({title, onClick, accordionCollapsed}: AccordionPropsType) {
        return (
            <div>
                <AccordionTitle titleValue={title} onClickTitle={() => onClick(!accordionCollapsed)}/>
                {!accordionCollapsed && <AccordionBody/>}
            </div>
        )

}

type AccordionTitlePropsType = {
    titleValue: string;
    onClickTitle: () => void;
}

function AccordionTitle({titleValue, onClickTitle}: AccordionTitlePropsType) {
    console.log('AccordionTitle rendered')
    return (
        <h3 onClick={onClickTitle}>{titleValue}</h3>
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