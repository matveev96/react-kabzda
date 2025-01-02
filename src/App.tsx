import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";


function App() {

    const [ratingValue, setRatingValue] = useState<0 | 1 | 2 | 3 | 4 | 5>(0)
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    const [onOff, setOnOff] = useState<boolean>(false);

    return (
        <div className={"App"}>
            <PageTitle title={'This is App Title'}/>

            <Rating value={ratingValue} onClick={setRatingValue} title='Controlled Rating'/>

            <UncontrolledRating title='Uncontrolled Rating' onChange={() => {}}/>

            {/*<Accordion title={'Controlled Accordion'} onClick={setAccordionCollapsed} accordionCollapsed={accordionCollapsed} items={}/>*/}

            <UncontrolledAccordion title={'Uncontrolled Accordion'} />

            {/*<OnOff onClick={setOnOff} onOff={onOff} title='Controlled OnOff'/>*/}

            <UncontrolledOnOff title='Uncontrolled OnOff' /> {onOff.toString()}

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
