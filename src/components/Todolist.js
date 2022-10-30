import React, { useRef, useState } from 'react'; 

import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';

import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import TextField from '@mui/material/TextField';

function Todolist() {

  const columns = [
    {headerName: 'Date', field: 'date', sortable: true},
    {headerName: 'Description', field: 'description', sortable: true},
    {headerName: 'Priority', field:'priority', sortable: true, filter: true,
    cellStyle: params => params.value === "High" ? {color: 'red'} : {color: 'black'}},
  ]

    const[todo, setTodo] = useState({ description: '', date: '', priority: ''});
    const[todos, setTodos] = useState([]); 
    const girdRef = useRef();
    
    const addTodo = () => {
      setTodos([...todos, todo])
      setTodo({description:'', date:'', priority:''});
    }

    const inputChanged = (event) => {
      setTodo({...todo, [event.target.name]: event.target.value});
    }

    const deleteTodo = () => {
      if( girdRef.current.getSelectedNodes().length > 0) {
        setTodos(todos.filter((todo, index) =>
          index !== girdRef.current.getSelectedNodes()[0].childIndex))
      }else{
        alert('Error"');
      }
    }

    return(
        <div className='App'>
          <TextField
            label='Description'
            variant='standard'
            name='description'
            value={todo.description}
            onChange={inputChanged} />
           <TextField
            label='Date'
            variant='standard'
            name='date'
            value={todo.date}
            onChange={inputChanged}/>      
          <TextField
            label='Priority'
            variant='standard'
            name='priority'
            value={todo.priority}
            onChange={inputChanged}/>

          <Button onClick={addTodo} variant="outlined">Add</Button>
          <Button onClick={deleteTodo} variant="outlined" color="red" endIcon={<DeleteIcon />}>Delete</Button>
          
          <div className='ag-theme-material' style={{height: 400, width: 700, margin: 'auto'}}>
            <AgGridReact
                rowData={todos}
                columnDefs={columns}
                rowSelection="single"
                ref={girdRef}
                onGridReady = { params => girdRef.current = params.api}>
            </AgGridReact>
        </div>
      </div>
    ); 
}

export default Todolist;