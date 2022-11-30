import React from 'react';
import ReactDOM from 'react-dom/client';
import CardComponent from './CardComponent.js'

//const heading = React.createElement('h1', { id: 'title' }, 'Hello World');

const title = "Hustler";

const data = [{
    name: "Pushkar",
    city: "Gurgaon",
    qualification: "b.tech cse",
    hobbies: "learning new things",
    currentRole: "front-end developer",
    img : "https://media-exp1.licdn.com/dms/image/C4D03AQGbGCw8a5lH_Q/profile-displayphoto-shrink_200_200/0/1648835306859?e=1675296000&v=beta&t=zi2-WPLit9of6XwkQONztgPMcknEkbr5YvGnd2AGGD8"
},
{
    name: "Ravi",
    city: "Bangalore",
    qualification: "B.tech",
    hobbies: "coding, playing games",
    currentRole: "Senior Associate",
    img : "https://media-exp1.licdn.com/dms/image/C5103AQFoo3dsYDJjIw/profile-displayphoto-shrink_800_800/0/1551502183699?e=1675296000&v=beta&t=vn_UCprymlu9QdzxDh718f8YleOOPrFnD3iGnNed2Lg"
},
{
    name: "Sharmila",
    city: "Bangalore",
    qualification: "B.E. cse",
    hobbies: "reading books , trekking",
    currentRole: "front-end developer",
    img : ""
}
];

const HeadingComponent = () => {
    return (
        <div id="title" className="title-class" tabIndex="1">
            <h1>{title}</h1>
        </div>
    );
}

const CardContainer = () => {
    return (
        data.map((person) => {
            return <CardComponent person={person} key={person.name} />
        })
    );
}

const BodyComponent = () => {
    return (
        <div className="card-container">
            <CardContainer />
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