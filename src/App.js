import React from 'react';
import styles from './App.module.css'
import { TodoList } from './Todo/TodoList';
import { useState } from 'react';
import { Context } from './Context';
function App() {
  let [state, setState] = useState([{ id: 1, completed: false, title: 'to bay some bread' },
  { id: 2, completed: false, title: 'to bay some milk' },
  { id: 3, completed: false, title: 'to bay some meat' }])

  let change = (id) => {
    setState(state.map(item => {
      if (item.id === id) {
        item.completed = !item.completed
      }
      return item
    })
    )
  }

  let removeTodo = (id) => {
    setState(state.filter(item => {
      if (item.id != id) {
        return item
      }
    }
    ))
  }

  return (
    <Context.Provider value={{removeTodo}} >
      <div className={styles.wrapper}>
        <h1>React tutorial</h1>
          { state.length != 0? <TodoList state={state} change={change} /> : <span>There is no any todo</span>}
      </div>
    </Context.Provider>
  );
}

export default App;
