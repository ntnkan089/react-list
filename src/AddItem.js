//import React from 'react'
import { FaPlus } from 'react-icons/fa';
import { useRef } from 'react';

const AddItem = ({newItem, setNewItem, handleSubmit}) => {


    const inputRef = useRef();

  return (
    <form 
        className = 'addForm'/* action="" */
       onSubmit={/* (e)=>handleSubmit(e) */handleSubmit}
    >
        <label htmlFor="addItem">
            Add Item
        </label>
        <input 
            type="text" 
            autoFocus
            //set inputRef to this input element
            ref = {inputRef}
            id="addItem"
            placeholder="Add Item"
            required

            //next 2 lines makes input controlled input, i.e you can use the input
            value = {newItem}
            //updates truth source as you type(components).
            onChange = {(e)=>setNewItem(e.target.value)}
        />
        <button 
           type="submit" //type is submit by default
            aria-label="Add Item"
            onClick = {()=>inputRef.current.focus()}
            >
            <FaPlus />
        </button>
    </form>
  )
}

export default AddItem