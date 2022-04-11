import React, { useState } from 'react';
import TimelogDataSerice from './services/timelog.service';

const TimeLogForm = () => {

    const initialTimeLog = {
        id: null,
        start: "",
        end: "",
        description: "",
    }

    const [TimeLog, setTimeLog] = useState(initialTimeLog);
    const [sended, setSended] = useState(false);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setTimeLog({ ...TimeLog, [name]: value });
    };

    const sendTimeLog = () => {
        var data = {
            start: TimeLog.start,
            end: TimeLog.end,
            description: TimeLog.description,
        };

        TimelogDataSerice.create(data)
            .then(response => {
                setTimeLog({
                    id: response.data.id,
                    start: response.data.start,
                    end: response.data.end,
                    description: response.data.description
                });
                setSended(true);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    const newTimeLog = () => {
        setTimeLog(initialTimeLog);
        setSended(false);
    };

    return (<div className="submit-form">
        {sended ? (<div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={newTimeLog}>
                Add
            </button>
        </div>) : (<div>
            <div className="form-group">
                <label htmlFor="start">Start</label>
                <input className="form-control"
                    type="datetime-local"
                    id="start"
                    required
                    value={TimeLog.start}
                    onChange={handleInputChange}
                    name="start"
                />
            </div>
            <div className="form-group">
                <label htmlFor="end">End</label>
                <input className="form-control"
                    type="datetime-local"
                    id="end"
                    required
                    value={TimeLog.end}
                    onChange={handleInputChange}
                    name="end"
                />
            </div>
            <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea
                    className="form-control"
                    id="description"
                    required
                    value={TimeLog.description}
                    onChange={handleInputChange}
                    name="description"
                />
            </div>
            <button onClick={sendTimeLog} className="btn btn-success">
                Send
            </button>

        </div>)}
    </div>);
}

export default TimeLogForm;