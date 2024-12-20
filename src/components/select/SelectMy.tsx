import React from "react";

export type ItemType = {
    title: string,
    value: any
}

type SelectProps = {
    title: string
    collapsed: boolean,
    items: ItemType[]
    onClickCollapsed: () => void;
    onClickSelected: (i: number) => void;
    onBlur: () => void
}

const styleTitle = {
    border: "1px solid black",
    display: "flex",
    justifyContent: "space-between",
    cursor: "pointer"
}
const styleArrow = {
    borderLeft: "1px solid black",
    cursor: "pointer"
}
const styleSelect = {
    width: "200px",
    height: "200px"
}
const styleLi = {
    listStyleType: "none",
    cursor: "pointer",
    marginTop: "10px",
    border: "1px solid black",
}
const styleUl = {
    padding: "0",
    marginTop: "0"
}

export function SelectMyBeta({onClickSelected, items, onBlur, collapsed, onClickCollapsed, title}: SelectProps) {

    return (
        <div tabIndex={0} onBlur={onBlur} style={styleSelect}>
            <div style={styleTitle} onClick={onClickCollapsed}>
                <span>{title}</span>
                <span style={styleArrow} >⭣</span>
            </div>
            <ul style={styleUl}>
                {collapsed &&
                    items.map((el, i) => <li style={styleLi} onClick={() => onClickSelected(i)} key={el.value}>{el.title}</li>)
                }
            </ul>
        </div>
    )
}
