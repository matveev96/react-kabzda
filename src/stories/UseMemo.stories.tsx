import React, {KeyboardEvent, useEffect, useMemo, useState} from "react";
import {ItemType, SelectDimych} from "../components/select/SelectDimych";
import styles from "../components/select/Select.module.css";

export default {
    title: 'UseMemo demo'
}

export const DifficultCountingExample = () => {
    const [a, setA] = useState(5)
    const [b, setB] = useState(5)

    let resultA = 1
    let resultB = 1

    resultA = useMemo(() => {
        let tempA = 1;
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 1000000) {
                fake++
                const fakeValue = Math.random()
            }
            tempA *= i
        }
        return tempA
    }, [a])


    for (let i = 1; i <= b; i++) {
        resultB *= i
    }

    return <>
        <input value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
        <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
        <div>
            Result for a: {resultA}
        </div>
        <div>
            Result for b: {resultB}
        </div>
    </>
}

const UsersSecret = (props: { users: Array<string> }) => {
    console.log('users secret')
    return <div>{
        props.users.map((u, i) => <div key={i}>{u}</div>)
    }</div>
}
const Users = React.memo(UsersSecret)

export const HelpForReactMemoExample = () => {
    console.log('HelpForReactMemoExample')
    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(['Alex', 'Dimych', 'Valera', 'Katya'])

    const newArr = useMemo(() => {
        return users.filter(u => u.toLowerCase().indexOf('a') > -1)
    }, [users])

    const addUser = () => {
        const newUser = [...users, 'Sveta ' + new Date().getTime()]
        setUsers(newUser)
    }
    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}

        <button onClick={addUser}>add user</button>
        <Users users={newArr}/>
    </>
}

// type CitiesType = {
//     people: string,
//     city: string
// }
// type ItemsType = {
//     value: string,
//     country: string,
//     cities: CitiesType[]
// }
// const items = [
//     {
//         value: "1",
//         country: 'USA',
//         cities: [
//             {people: '1000000', city: "NewYork"},
//             {people: '2000000', city: "LosAngeles"},
//             {people: '500000', city: "Boston"},
//             {people: '800000', city: "Chicago"},
//         ]
//     },
//     {
//         value: "2",
//         country: 'Belarus',
//         cities: [
//             {people: '1000000', city: "Minsk"},
//             {people: '500000', city: "Brest"},
//             {people: '600000', city: "Grodno"},
//             {people: '150000', city: "Mazyr"}
//         ]
//     },
//     {
//         value: "3",
//         country: 'Ukraine',
//         cities: [
//             {people: '600000', city: "Kiev"},
//             {people: '600000', city: "Poltava"},
//             {people: '600000', city: "Lvov"},
//             {people: '600000', city: "Dnepro"}
//         ]
//     },
// ]
// const NewMessagesCounter = (props: { count: number }) => {
//     console.log('count')
//     return (<div>{props.count}</div>)
// }
// const Counter = React.memo(NewMessagesCounter)
//
// export function SelectMemoExample() {
//
//     const [counter, setCounter] = useState(0);
//     const [value, setValue] = useState('2')
//     const [active, setActive] = useState(false)
//     const [hoveredElemenValue, setHoveredElementValue] = useState(value)
//
//     useEffect(() => {
//         setHoveredElementValue(value)
//     }, [value])
//
//     const selectedItem = items.find(el => el.value === value)
//     const hoveredItem = items.find(el => el.value === hoveredElemenValue)
//
//     const toggleItems = () => setActive(!active)
//     const onItemClicked = (value: any) => {
//         setValue(value);
//         toggleItems()
//     }
//
//     const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
//         if(e.key === "ArrowDown" || e.key === "ArrowUp") {
//             for(let i=0; i < items.length; i++) {
//                 if(items[i].value === hoveredElemenValue) {
//                     const pretendentElement = e.key === "ArrowDown" ? items[i+1] : items[i-1]
//                     if(pretendentElement) {
//                         setValue(pretendentElement.value)
//                         return;
//                     }
//                 }
//             }
//             if(!selectedItem) setValue(items[0].value)
//         }
//         if(e.key === "Enter" || e.key === "Escape") {
//             setActive(false)
//         }
//     }
//
//     return (
//         <>
//             <button onClick={() => setCounter(counter + 1)}>+</button>
//             <Counter count={counter}/>
//             <div className={styles.select}
//                  onClick={toggleItems}
//                  onKeyUp={onKeyUp}
//                  tabIndex={0}>
//                 <h3>{selectedItem && selectedItem.country}</h3>
//                 {
//                     active &&
//                     <div className={styles.items}>
//                         {
//                             items.map(i => <div
//                                 onMouseEnter={() => setHoveredElementValue(i.value)}
//                                 className={styles.item + " " + (hoveredItem === i ? styles.selected : "")}
//                                 key={i.value}
//                                 onClick={() => onItemClicked(i.value)}
//                             >{i.country}</div>)
//                         }
//                     </div>
//                 }
//             </div>
//         </>
//     )
// }
