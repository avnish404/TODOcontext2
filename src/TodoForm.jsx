import React, { useState,useEffect } from 'react'
import { useTodo } from './TODOcontext'

function TodoForm() {
  const [text,setText] = useState('')
  const {addTodo,todos} = useTodo();
  const handleChange= (e)=>
  {
    setText(e.target.value)
    
  }

  const handleSubmit =(e)=>
  {
    e.preventDefault()
    if(text.length !== 0)
    {
      addTodo(text)
      
    }
    else{
      console.log('Please add todos')
    }
  }

  useEffect(() => {
    console.log('Updated todos:', todos);
    setText('')
  }, [todos]);

  return (
    <div className='w-full flex items-center justify-center mb-8 flex-col'>
      <form  className="w-full max-w-xl  p-6 rounded-xl shadow-md flex items-center gap-2" onSubmit={handleSubmit}>

      <input
          type="text"
          className="w-full px-4 py-3 rounded-l-md border border-gray-300 focus:outline-none bg-white/20 "
          placeholder="Enter Your TODOS"
          onChange={handleChange}
          value={text}
        />
        <button
          type="submit"
          className="bg-green-500 text-white font-medium px-5 py-3 rounded-r-md hover:bg-green-600 transition-all duration-200"
        >
          Add
        </button>
      </form>
    </div>
  )
}

export default TodoForm
