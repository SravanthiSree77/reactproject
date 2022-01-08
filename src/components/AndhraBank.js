import React from 'react';

function AndhraBank(props) {
    return (
        <div>
           <h1>
               The main branch of AndhraBank is located at
               {props.location}
            </h1> 
        </div>
    );
}

export default AndhraBank;
