import React from 'react'
import TodoItem from './TodoItem'

const Todo = (props) => {
    const todoList = props.todos.map(
        element => <TodoItem 
                    data={element}
                    markComplete={props.markCompleted}
                    removeItem={props.removeItem}/>           
    )
    if(todoList.length == 0)  {
      return (
        <div>
          <form onSubmit={props.AddTodo}>  
            <input type="text" maxlength="40" value={props.curValue} onChange={props.handleChange}/>
            <button className="submitButton" type="submit">Add Todo</button>
        </form>
          <p align="center">No more todos :)</p>
        </div>
      )
    } 
    return(
      <React.Fragment>  
        <form onSubmit={props.AddTodo}>  
            <input type="text" maxlength="40" value={props.curValue} onChange={props.handleChange}/>
            <button type="submit" value="Add Todo">Add Todo</button>
        </form>
        <ul>
            {todoList}
        </ul>
      </React.Fragment>
    );
}

export default Todo;