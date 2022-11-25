import React, {useEffect, useState} from 'react';
import './App.css';




type propsType={
    body: string
    id: number
    title:string
    userId:    number
}


function App() {

    const [state, setState] = useState<propsType[]>([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => setState(json))
    },[])

    const deleteHandler =()=>{
        setState([])

    }
    const showPostsHandler =()=>{
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => setState(json))
    }

    return (
        <div className="App">
            <button onClick={deleteHandler}>DELETE</button>
            <button onClick={showPostsHandler}>SHOW POSTS</button>
            <ul>
                {state.map((el)=>{
                    return(
                        <li key={el.id}>
                            <span>{el.id}</span>
                            <span>{el.userId}</span>
                            <span>{el.body}</span>
                            <span>{el.title}</span>
                        </li>
                    )
                })}
            </ul>

        </div>
    );
}

export default App;
