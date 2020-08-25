import React from 'react'
import styles from './TodoItem.module.css'
import { Context } from '../Context'
import { useContext } from 'react'

export const TodoItem = ({ index, title, id, completed, change }) => {

    let classes
    if (completed === true) {
        classes = styles.done
    }

    const {removeTodo} = useContext(Context)

    return (
        
            <li className={styles.li}>
                <span className={classes}>
                    <input type="checkbox" className={styles.input} onChange={() => change(id)} />
                    <strong>{index + 1}</strong>
                &nbsp;
                <span>{title}</span>
                </span>
                <button className={styles.removeBtn} onClick={() => { removeTodo(id)}}>&times;</button>
            </li>
            )
}
