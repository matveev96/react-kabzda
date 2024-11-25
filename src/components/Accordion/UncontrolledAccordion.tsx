import React, {useState} from "react";

type AccordionPropsType = {
    title: string;

}

export function UncontrolledAccordion({title}: AccordionPropsType) {

    const [collapsed, setCollapsed] = useState(false);

    return (
        <div>
            <AccordionTitle titleValue={title} setCollapsed={() => setCollapsed(!collapsed)}/>
            {!collapsed && <AccordionBody/>}
        </div>
    )

}

type AccordionTitlePropsType = {
    titleValue: string;
    setCollapsed: () => void;
}

function AccordionTitle({titleValue, setCollapsed}: AccordionTitlePropsType) {
    console.log('AccordionTitle rendered')
    return (
        <h3 onClick={setCollapsed}>{titleValue}</h3>
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