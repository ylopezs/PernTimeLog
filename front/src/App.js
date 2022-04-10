import React from 'react';
import {Routes, Route, Link} from "react-router-dom";
import TimeLogList from "./TimeLogList";
import TimeLogForm from "./TimeLogForm";

function App() {
  return (
    <div className="App">
      <div className="container">
      <div className="container mt-3">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/TimeLogList" className="navbar-brand">
            TimeLog
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/TimeLogList"} className="nav-link">
                Time Log List
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/TimeLogForm"} className="nav-link">
                Add new Log
              </Link>
            </li>
          </div>
        </nav>
          <Routes>
          <Route exact path={"/"} element={<TimeLogList />} />
            <Route exact path={"/TimeLogList"} element={<TimeLogList />} />
            <Route exact path="/TimeLogForm" element={<TimeLogForm />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
