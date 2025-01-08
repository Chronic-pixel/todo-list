
import React, { useState } from 'react';



const TodoForm = () => {
    const [value, setValue] = useState('')
    const [category, setCategory] = useState ('')

    const handleSubmit = (e) => {
      e.preventDefault()
      if(!value || !category) return;
      setValue('')
      setCategory('')
      console.log(value, category);
    };
  return (
    <div className='todo-form'>
       <h2>Create Task</h2>
       <form onSubmit={handleSubmit}>
        <input type="text" 
        placeholder='Type a title' 
        value={value}
        onChange={(e) => setValue(e.target.value)} />
        <select value={category} onChange={(e) => setCategory(e.target.value)} >
            <option value="">Select a category</option>
            <option value="job">Job</option>
            <option value="personal">Personal</option>
            <option value="studies">Studies</option>
            <option value="hobby">Hobby</option>
        </select>
         <button type='submit'>Submit</button>
       </form>
    </div>
  )
}

export default TodoForm;