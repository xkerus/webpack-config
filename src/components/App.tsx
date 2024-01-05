import React, {useState} from 'react';
import classes from './App.module.scss';
import {Link, Outlet} from "react-router-dom";
import About from "@/pages/about/About";
export const App = () => {
    const [count, setCount] = useState<number>(0);

    const increment = () => setCount(prev => prev + 1)
    return (
        <div>
            <Link to={'/about'}>about</Link>
            <Link to={'/shop'}>shop</Link>
            hello world!
            <h1 className={classes.value}>{count}</h1>
            <button className={classes.button} onClick={increment}><span>inc</span></button>
            <About />
        </div>
    );
};

export default App;