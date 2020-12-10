import React , {useContext, useState} from 'react';

import List from './components/list'
import Input from './components/adduser'
import Button from './components/Addbutton'

// import Context 

const Todo = () => {
    let [name , setname] = useState("");
    console.log(name)
        return (
            <div>
                <h1>Todo App</h1>
                
                <Input onClick = {(value) => setname(value)} />
                <br></br>
                <Button />
                
                <List />
            </div>
        );
}

export default Todo;