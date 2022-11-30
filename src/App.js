import React from 'react';
import ReactDOM from 'react-dom/client';
import CardComponent from './CardComponent.js';
import data from './data.json';
import { title } from './Constants.js';
import SearchComponent from './SearchComponent.js';
import { useState } from 'react';


//const heading = React.createElement('h1', { id: 'title' }, 'Hello World');


const HeadingComponent = () => {
    return (
        <div id="title" className="title-class" tabIndex="1">
            <h1>{title}</h1>
        </div>
    );
}

const CardContainer = ({ filteredPersons }) => {
    return (
        filteredPersons.map((person) => {
            return <CardComponent person={person} key={person.name} />
        })
    );
}

const BodyComponent = () => {
    const [filteredPersons, setFilteredPersons] = useState(data);
    return (
        <div className="card-container">
            <SearchComponent setFilteredPersons={setFilteredPersons} />
            <CardContainer filteredPersons={filteredPersons} />
        </div>
    )
}

const AppLayout = () => {
    return (
        <>
            <HeadingComponent />
            <BodyComponent />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);