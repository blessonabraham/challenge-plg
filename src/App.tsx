import React from 'react';
import { useState } from 'react';

const App = () => {

    const [theContent, setTheContent] = useState('')

    const [theArray, setTheArray] = useState([])

    const onClickHandler = () => {
        setTheArray([...theArray, theContent])
        setTheContent('')
    }

    return (
        <div>
            <input type='text' value={theContent} onChange={(e) => setTheContent(e.target.value)}></input>
            <button onClick={onClickHandler}>Button</button>
            <ul>
               {theArray.map((value => <li>{value}</li>))}
            </ul>
        </div>
    )
}

export default App;