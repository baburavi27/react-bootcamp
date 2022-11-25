import React from 'react';
import ReactDOM from 'react-dom/client';

//const heading = React.createElement('h1', { id: 'title' }, 'Hello World');

const TitleComponent = () => {
    return (
        <h1>Namaste React Bootcamp</h1>
    );
}

const HeadingComponent = () => {
    return (
        <div id="title" className="title-class" tabIndex="1">
            <TitleComponent />
            <h2>from zero to hero</h2>
            <h3>in months</h3>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeadingComponent />);