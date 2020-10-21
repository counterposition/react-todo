import React from 'react';

type TodoListProps = {
    title: string,
};

const TodoList: React.FC<TodoListProps> = (props) => (
    <article>
        <h1>{props.title}</h1>
        { props.children }
    </article>
)

export default TodoList;
