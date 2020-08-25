import React from 'react'
import styles from './TodoList.module.css'
import { TodoItem } from './TodoItem'

export const TodoList = ({ state, change }) => {

    return (
        <ul className={styles.ul}>
            {state.map((item, index) => {
                return (
                    <TodoItem title={item.title} index={index} id={item.id} key={item.id} completed={item.completed} change={change}/>
                )
            }
            )}
        </ul>
    )
}
