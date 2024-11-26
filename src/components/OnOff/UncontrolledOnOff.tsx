import React, {useState} from 'react';

type UncontrolledOnOffPropsType = {
    title: string;
    onChange: (on: boolean) => void;
}

export const UncontrolledOnOff = ({title, onChange}: UncontrolledOnOffPropsType) => {


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

    const OnClicked = () => {
        setOn(true)
        onChange(on)
    }
    const OffClicked = () => {
        setOn(false)
        onChange(on)
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
