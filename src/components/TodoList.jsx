import React from 'react'
import TodoCard from './TodoCard'


const TodoList = (props) => {
    const { todos } = props
  return (
    <ul className='main'>
        {todos.map((todos, todosIndex) =>{
            return (
                <TodoCard { ...props } key={todosIndex} 
                index ={todosIndex}>
                    <p>{todos}</p>
                </TodoCard>
            );
        })}
    </ul>
  )
}

export default TodoList