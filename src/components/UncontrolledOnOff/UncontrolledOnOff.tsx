import React, {useState} from 'react';

type UncontrolledOnOffPropsType = {
    title: string;
    defaultOn?: boolean;
}

export const UncontrolledOnOff = ({title, defaultOn}: UncontrolledOnOffPropsType) => {


    const [on, setOn] = useState(defaultOn ? defaultOn : false);
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

    const OnClicked = () => {
        setOn(true)
    }
    const OffClicked = () => {
        setOn(false)
    }

    return (
        <div>
            <hr/>
            <h3>{title}</h3>
            <div style={onStyle} onClick={OnClicked}>On</div>
            <div style={offStyle} onClick={OffClicked}>Off</div>
            <div style={indicatorStyle}></div>
            <hr/>
        </div>
    );
};
