import React, {useState} from 'react';
import './App.scss'
export const App = () => {
    const [count, setCount] = useState<number>(0);

    const increment = () => setCount(prev => prev + 1)
    return (
        <div>
            hello world!
            <h1>{count}</h1>
            <button onClick={increment}><span>inc</span></button>
        </div>
    );
};

export default App;