import React from 'react'
import Todo from './components/Todo';
import './App.css';

const data = [
  {
    id: 1,
    title: "Learn React",
    completed: true
  },
  {
    id: "2",
    title: "Take dog for a walk",
    completed: false
  },
  {
    id: 3,
    title: "Meditate",
    completed: false
  }
];

function App() {
  const [state, setState] = React.useState({
    todos : data
  });

  const [addTodo, setAddTodo] = React.useState('')

  const [counter, setCounter] = React.useState(state.todos.length + 1)
  
  const AddTodo = (event) => {
    event.preventDefault();
    if (!addTodo) return;
    setState( 
      {todos : [
        ...state.todos,
        {
          id: counter,
          title: addTodo,
          completed: false
        }
      ]
      });
      setCounter(counter + 1)
      setAddTodo('');
  }

  const handleChange = (event) => {
    setAddTodo(event.target.value);
  }

  const markCompleted = (id) => {
    //state.todos.filter(todo => todo.id === id)
    state.todos.map(todo => {if(id === todo.id) todo.completed = true}) 
    setState({todos:[...state.todos]})
  }

  const removeItem = (id) => {
    const newTodos = state.todos.filter(todo => todo.id !== id)
    setState({todos : [...newTodos]})
  }

  return (
    <div className="App">
      <h1> My Todos</h1>
      <Todo 
        todos={state.todos} 
        AddTodo={AddTodo} 
        handleChange={handleChange} 
        curValue={addTodo} 
        markCompleted={markCompleted}
        removeItem={removeItem}/>
    </div>
  );
}


export default App;
