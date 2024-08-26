import React, { useEffect, useState } from 'react'
import { Card, Container } from 'react-bootstrap';
import '../styles/TodoPage.css';

// to-do task
// 3. add a list of todos   ( maybe )

interface Todo {
  id: number;
  text: string;
  completed: boolean;
  createdAt: string;
  expiresAt: string;
}

const TodoPage: React.FC = () => {
  const [user, setUser] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState<string>('');

  useEffect(() => {
    const storedUser = localStorage.getItem('user'); // gets user from local storage
    if (storedUser) {
      setUser(storedUser); // 
    }
  }, []);

  const handleAddTodo = () => {
    if (newTodo) {
      const now = new Date(); // for the unique id
      const newTask: Todo = {
        id: Date.now(), // makes unique id
        text: newTodo,
        completed: false,
        createdAt: now.toISOString(), // makes timestamp
        expiresAt: new Date(now.getTime() + 24 * 60 * 60 * 1000).toISOString() // gets date and time and makes expiration time
      }
      setTodos([...todos, newTask]) // adds newTodo to todos
      setNewTodo('')
    }
  }

  const handleToggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) => { // mapping thru each todo
        if (todo.id === id) { // making sure the todo id matches id were passing
          return { ...todo, completed: !todo.completed } // toggles todo on and off
        }
        return todo
      })
    )

  }

  const handleRemovedTodo = () => {
    setTodos(todos.filter((todo) => todo.completed === false)) // sends back the todo that was just added/completed
  }


  return (


    <Container >

      <div >
        <h1>Hello, {user}</h1>
        <h1>What Todo ?</h1>
        <input
          type="text"
          placeholder="Enter todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)} />
        <button onClick={handleAddTodo}>Add</button>
      </div>
      <div>
        <Card>
          <Card.Body>
            <Card.Title>Todo List</Card.Title>
            <ul>
              {todos.map((todo, index) => (
                <Card key={index} >
                  <Card.Body>
                    <Card.Text>Todo: {todo.text}</Card.Text>
                    <Card.Text>Created: {todo.createdAt}</Card.Text>
                    <input type="checkbox" checked={todo.completed} onChange={() => handleToggleTodo(todo.id)} />
                    <button onClick={handleRemovedTodo}>Remove</button>
                  </Card.Body>
                </Card>
              ))}
            
            </ul>
          </Card.Body>
        </Card>
      </div>
    </Container>


  )


}

export default TodoPage