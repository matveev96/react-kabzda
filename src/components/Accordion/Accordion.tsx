import React, {memo} from "react";

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
type AccordionTitlePropsType = {
    titleValue: string;
    onClickTitle: () => void;
}
type BodyType = {
    items: ItemType[]
    onClick: (value: any) => void
}

function AccordionTitle({titleValue, onClickTitle}: AccordionTitlePropsType) {
    console.log('AccordionTitle rendered')
    return (
        <h3 onClick={onClickTitle}>{titleValue}</h3>
    )
}

const Title = memo(AccordionTitle)

function AccordionBody({items, onClick}: BodyType) {
    console.log('AccordionBody rendered')
    return (
        <ul>
            {items.map((el, index) => <li onClick={() => onClick(el.value)} key={index}>{el.title}</li>)}
        </ul>
    )
}
const Body = memo(AccordionBody)

export function Accordion({title, onChange, accordionCollapsed, items, onClick }: AccordionPropsType) {
    return (
        <div>
            <Title titleValue={title} onClickTitle={() => onChange(!accordionCollapsed)}/>
            {!accordionCollapsed && <Body items={items} onClick={onClick}/>}
        </div>
    )

}