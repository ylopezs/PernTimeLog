import React from 'react';

const TimeLog = ({id, start, end, description})=>{

    return(<div className="container">
        <p> <h4>Start time: </h4> {start}</p>
        <p><h4>End time: </h4> {end}</p>
        <p><h4>Description: </h4> {description}</p>
    </div>)
}

export default TimeLog;