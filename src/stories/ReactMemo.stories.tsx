import React, {useState} from "react";

export default {
    title: 'React.memo demo'
}

const NewMessagesCounter = (props: { count: number }) => {
    console.log('count')
    return (<div>{props.count}</div>)
}
const UsersSecret = (props: { users: Array<string> }) => {
    console.log('users')
    return <div>{
        props.users.map((u, i) => <div key={i}>{u}</div>)
    }</div>
}

const Users = React.memo(UsersSecret)
const Counter = React.memo(NewMessagesCounter)

export const Example1 = () => {

    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(['Alex', 'Dimych', 'Valera', 'Katya'])

    const addUser = () => {
        const newUser = [...users, 'Sveta ' + new Date().getTime()]
        setUsers(newUser)
    }
    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <Counter count={counter}/>
        <button onClick={addUser}>Add User</button>
        <Users users={users}/>
    </>
}