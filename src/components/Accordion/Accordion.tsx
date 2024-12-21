import React from "react";

export type ItemType = {
    title: string,
    value: any
}
export type AccordionPropsType = {
    title: string;
    accordionCollapsed: boolean;
    onChange: (accordionCollapsed: boolean) => void;
    items: ItemType[]
    onClick: (value: any) => void
}

export function Accordion({title, onChange, accordionCollapsed, items, onClick }: AccordionPropsType) {
        return (
            <div>
                <AccordionTitle titleValue={title} onClickTitle={() => onChange(!accordionCollapsed)}/>
                {!accordionCollapsed && <AccordionBody items={items} onClick={onClick}/>}
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

type BodyType = {
    items: ItemType[]
    onClick: (value: any) => void
}

function AccordionBody({items, onClick}: BodyType) {
    console.log('AccordionBody rendered')
    return (
        <ul>
            {items.map((el, index) => <li onClick={() => onClick(el.value)} key={index}>{el.title}</li>)}
        </ul>
    )
}