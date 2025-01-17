import React, {useState} from 'react';

export type OnOffPropsType = {
    onClick: (onOff: boolean) => void;
    onOff: boolean
    title: string
}


export const OnOff = ({onClick, onOff, title }: OnOffPropsType) => {


    const onStyle = {
        display: 'inline-block',
        width: '30px',
        height: '30px',
        border: '1px solid black',
        backgroundColor: onOff ? 'green' : 'white',
        cursor: 'pointer',
    }
    const offStyle = {
        display: 'inline-block',
        width: '30px',
        height: '30px',
        border: '1px solid black',
        backgroundColor: onOff ? 'white' : 'red',
        cursor: 'pointer',

        margin: '0 10px',
    }
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '15px',
        border: '1px solid black',
        display: 'inline-block',
        backgroundColor: onOff ? 'green' : 'red',
    }

    return (
        <div>
            <hr/>
            <h3>{title}</h3>
            <div style={onStyle} onClick={() => { onClick(!onOff) }}>On</div>
            <div style={offStyle} onClick={() => { onClick(!onOff) }}>Off</div>
            <div style={indicatorStyle}></div>
            <hr/>
        </div>
    );
};
