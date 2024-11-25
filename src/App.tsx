import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledAccordion} from "./components/Accordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/Rating/UncontrolledRating";

function App() {

    const [ratingValue, setRatingValue] = useState<0 | 1 | 2 | 3 | 4 | 5>(0)
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)

    return (
        <div className={"App"}>
            <PageTitle title={'This is App Title'}/>
            Article 1
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <Accordion title={'FirstMenu'} onClick={setAccordionCollapsed} accordionCollapsed={accordionCollapsed}/>


            <OnOff/>
            <OnOff/>
            <OnOff/>

            <UncontrolledAccordion title={'FirstMenu'} />
            <UncontrolledAccordion title={'SecondMenu'} />

            <UncontrolledRating/>
        </div>
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
