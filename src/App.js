import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LockScreen from "react-lock-screen";

import Home from './Home';
import Menu from './Tasks/Menu';
import Task1 from './Tasks/Task1';
import Task2 from './Tasks/Task2';
import Task3 from './Tasks/Task3';


const App = () => {
  const getLockScreenUi = setLock => {
    return (
      <div className="react-lock-screen__ui jc-center">
        <img
          width="32"
          src="https://cdn3.iconfinder.com/data/icons/wpzoom-developer-icon-set/500/102-256.png"
          alt="lock"
        />
        <p>Just to be safe, we locked the screen</p>
        <button onClick={() => setLock(false)}>unlock</button>
      </div>
    );
  };

  return (
    <LockScreen timeout={10000} ui={getLockScreenUi}>
      <div className="container">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/task-1' element={<Task1 />} />
          <Route path='/task-2' element={<Task2 />} />
          <Route path='/task-3' element={<Task3 />} />
        </Routes>
      </div>
    </LockScreen>
  );
}

export default App;