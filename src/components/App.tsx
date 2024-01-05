import React, {useState} from 'react';
import classes from './App.module.scss';
import {Link, Outlet} from "react-router-dom";
import About from "@/pages/about/About";
import catPng from "@/assets/rizhov.png";
import catJng from "@/assets/Cat.jpg";
import Shield from "@/assets/shield.svg";

export const App = () => {
    const [count, setCount] = useState<number>(0);

    const increment = () => setCount(prev => prev + 1)
    return (
        <div>
            <div>
                <img width={250} src={catPng} alt="cat"/>
                <img width={250} src={catJng} alt="cat"/>
            </div>
            <div>
                <Shield className={classes.icon} width={100} height={100}/>
            </div>
            <Link to={'/about'}>about</Link>
            <Link to={'/shop'}>shop</Link>
            hello world!
            <h1 className={classes.value}>{count}</h1>
            <button className={classes.button} onClick={increment}><span>inc</span></button>
            <About/>
            <Outlet/>
        </div>
    );
};

export default App;