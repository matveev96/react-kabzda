import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";

function App() {
    return (
        <>
            <PageTitle title={'This is App Title'}/>
            Article 1
            <Rating value={1}/>
            <Accordion title={'FirstMenu'} collapsed={true}/>
            <Accordion title={'SecondMenu'} collapsed={false}/>
            Article 2
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
            <Rating value={0}/>

            <OnOff/>
        </>
    );
}

type PageTitleProps = {
    title: string;
}

function PageTitle (props: PageTitleProps) {

    return (
        <h2>{props.title}</h2>
    )
}


export default App;
