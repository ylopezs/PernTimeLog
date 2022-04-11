import React, { useState, useEffect } from "react";
import TimelogDataSerice from "./services/timelog.service";
import TimeLog from "./TimeLog";

const TimeLogList = () => {

    const [timeLogs, setTimeLogs] = useState([]);
    useEffect(() => {
        retrieveTimeLogs();
    }, []);

    const retrieveTimeLogs = () => {
        TimelogDataSerice.getAll()
            .then(response => {
                setTimeLogs(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };


    return (<div className="list row">
        <h4>Time Log List</h4>
        <ul className="list-group">
            {timeLogs && timeLogs.map((timelog, index) => {
                return (
                    <li className="list-group-item" key={index} >
                        <TimeLog key={timelog.id}
                            id={timelog.id}
                            start={timelog.start}
                            end={timelog.end}
                            description={timelog.description} />
                    </li>);
            })}
        </ul>
    </div>)
}

export default TimeLogList;