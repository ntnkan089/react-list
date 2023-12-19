//import React from 'react'
//import { useState } from "react";

import ItemList from "./ItemList";
const Content = ({items, setItems, handleCheck, handleDelete}) => {

    //useState(default  )
    //const [current state, function to update state]
    //const[name, setName] = useState('Dave');

  



    /* const[count, setCount] = useState(0);
    const[count1, setCount1] = useState(0);

    const handleNameChange = () => {
      const names = ["Bob", "a", "b"]
      const int  = Math.floor(Math.random()*3);
      setName(names[int]);
  }

     let a = 0;
    function Counter()
    {
        setInterval(() => {
        setCount(count+1);//a+1 better  
    }, 1000)}

    
    function Count()
    {
        setCount1(count1+1);
    }

    const handleClick = () => {
         console.log('You clicked it')
    }
    const handleClick1 = (name) => {
         console.log(name+' you clicked it')
    }
    const handleClick2 = (e) => {
         console.log(e.target)
         console.log(e.target.innerText)
    }
 */
  return (
    //fragment, indicate parent element
    <>

        {/*
        
        
        //First Lesson



         <p onDoubleClick={handleClick}>
          Hello World!
          <br />
          Hello {name}!
          Counting time {count}
          <br />
          Count {count1}
          
        </p>
        <button onClick={handleNameChange}>change name {name}!</button>
        <button onClick={()=>handleClick1('a')}>click1 it</button>
        <button onClick={(e)=>handleClick2(e)}>click2 it</button>
        <button onClick={Counter}>click3 countTime</button>
        <button onClick={Count}>click3+1 count</button> */}

        {items.length? (
                <ItemList 
                    items = {items} 
                    setItems = {setItems}
                    handleCheck = {handleCheck}
                    handleDelete = {handleDelete}
                />
            ):
            (
                <p>
                    Empty
                </p>
            )
            }
        
    </>
  )
}

export default Content