import React, {useState} from 'react';


export const OnOff = () => {


    const [on, setOn] = useState(false);
    const onStyle = {
        display: 'inline-block',
        width: '30px',
        height: '30px',
        border: '1px solid black',
        backgroundColor: on ? 'green' : 'white',
        cursor: 'pointer',
    }
    const offStyle = {
        display: 'inline-block',
        width: '30px',
        height: '30px',
        border: '1px solid black',
        backgroundColor: on ? 'white' : 'red',
        cursor: 'pointer',

        margin: '0 10px',
    }
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '15px',
        border: '1px solid black',
        display: 'inline-block',
        backgroundColor: on ? 'green' : 'red',
    }

    return (
        <div>
            <hr/>
            <div style={onStyle} onClick={() => { setOn(true) }}>On</div>
            <div style={offStyle} onClick={() => { setOn(false) }}>Off</div>
            <div style={indicatorStyle}></div>
            <hr/>
        </div>
    );
};
