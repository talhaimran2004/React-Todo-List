import React, { useState } from 'react'


const AddTodo = ({addTodo}) => {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    
    
    const onSubmit = (e) => {
        e.preventDefault();

        if (!title || !desc) {
            alert('Title or Desc cant be Blank');
        } else {
            addTodo(title, desc);
            setDesc('');
            setTitle('');
        }
    }

    return (
        <>
            <div className='container'>
                <form onSubmit={onSubmit}>
                    <h4>-Add Todo</h4>
                    <input type="text" className='m-2' id='title' value={title} onChange={(e) => { setTitle(e.target.value) }} placeholder='Todo Title' /><br />
                    <input type="text" className='m-2' id='desc' value={desc} onChange={(e) => { setDesc(e.target.value) }} placeholder='Todo Description' /><br />
                    <button className='btn btn-sm btn-success m-2' >AddTodo</button> <hr />
                </form>
            </div>
        </>
    )
}

export default AddTodo
