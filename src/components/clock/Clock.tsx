import React, {useEffect, useState} from 'react';
import './Clock.css'

type PropsType = {}

const dateTransformer = (getDate: number) => {
    return getDate < 10 ? '0' + getDate : getDate
}

export const Clock: React.FC<PropsType> = () => {

    const [date, setDate] = useState(new Date());

    useEffect(() => {

        const intervalId = setInterval(() => {
            console.log('clock')
            setDate(new Date())
        }, 1000)

        return () => {
            clearInterval(intervalId)
        }
    }, []);

    const hourDegree = (date.getHours() % 12) * 30 + (date.getMinutes() / 60) * 30;
    const minuteDegree = date.getMinutes() * 6 + (date.getSeconds() / 60) * 6;
    const secondDegree = date.getSeconds() * 6;

    const hour = {
        width: '6px',
        height: '50px',
        backgroundColor: '#333',
        borderRadius: '4px',
        transform: `rotate(${hourDegree}deg)`,
    }

    const minute = {
        width: '4px',
        height: '70px',
        backgroundColor: '#666',
        borderRadius: '4px',
        transform: `rotate(${minuteDegree}deg)`,
    }

    const second = {
        width: '2px',
        height: '80px',
        backgroundColor: 'red',
        borderRadius: '4px',
        transform: `rotate(${secondDegree}deg)`,
    }

    return (
        <div className="clockWrapper">

            <div className='numberClock'>
                <span>{dateTransformer(date.getHours())}</span>
                :
                <span>{dateTransformer(date.getMinutes())}</span>
                :
                <span>{dateTransformer(date.getSeconds())}</span>
            </div>

            <div className='analogClock'>
                <div className='clockFace'>
                    <div className='hour' style={hour}></div>
                    <div className='minute' style={minute}></div>
                    <div className='second' style={second}></div>
                </div>
            </div>
        </div>
    );
};
