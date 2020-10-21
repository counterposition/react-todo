import React from 'react';

interface TodoProps {
    title: string,
    done: boolean
}

const Todo: React.FC<TodoProps> = ({title, done}) => (
    <div>
        <span>{ done ? '✅': '' }</span>
        <span>{ title }</span>
    </div>
)

export default Todo;
