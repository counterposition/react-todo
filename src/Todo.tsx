import React from 'react';
import styles from './Todo.module.css';

interface TodoProps {
    title: string,
    done: boolean
}

const Todo: React.FC<TodoProps> = ({title, done}) => (
    <div className={styles.Todo}>
        <div className={styles.done}>{ done ? '✅': '' }</div>
        <div className={styles.title}>{ title }</div>
    </div>
);


export default Todo;
