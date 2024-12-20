import React, {KeyboardEvent, useEffect, useState} from "react";
import styles from './Select.module.css';

export type ItemType = {
    title: string,
    value: any
}

export type SelectProps = {
    items: ItemType[]
    onChange: (value: any) => void
    value?: any
}


export function SelectDimych({items, onChange, value}: SelectProps) {
    const [active, setActive] = useState(false)
    const [hoveredElemenValue, setHoveredElemenValue] = useState(value)

    useEffect(() => {
        setHoveredElemenValue(value)
    }, [value])

    const selectedItem = items.find(el => el.value === value)
    const hoveredItem = items.find(el => el.value === hoveredElemenValue)

    const toggleItems = () => setActive(!active)
    const onItemClicked = (value: any) => {
        onChange(value);
        toggleItems()
    }

    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if(e.key === "ArrowDown" || e.key === "ArrowUp") {
            for(let i=0; i < items.length; i++) {
                if(items[i].value === hoveredElemenValue) {
                    const preendentElement = e.key === "ArrowDown" ? items[i+1] : items[i-1]
                    if(preendentElement) {
                        onChange(preendentElement.value)
                        return;
                    }
                }
            }
            if(!selectedItem) onChange(items[0].value)
        }
        if(e.key === "Enter" || e.key === "Escape") {
            setActive(false)
        }
    }

    return (
        <>
            <div className={styles.select}
                 onClick={toggleItems}
                 onKeyUp={onKeyUp}
                 tabIndex={0}>
                <h3>{selectedItem && selectedItem.title}</h3>
                {
                    active &&
                    <div className={styles.items}>
                        {
                            items.map(i => <div
                                onMouseEnter={() => setHoveredElemenValue(i.value)}
                                className={styles.item + " " + (hoveredItem === i ? styles.selected : "")}
                                key={i.value}
                                onClick={() => onItemClicked(i.value)}
                            >{i.title}</div>)
                        }
                    </div>
                }
            </div>
        </>
    )
}