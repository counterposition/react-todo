import React, { useState, PointerEvent, useRef } from 'react';
import styles from './Todo.module.css';

// transforms input into string that can be used as HTML element IDs 
const IDSafe = (s: string) => s.replace(/ /g, '_');

interface TodoProps {
    title: string,
    done: boolean
}

const Todo: React.FC<TodoProps> = ({ title, done }) => {
    const [_done, setDone] = useState(done);

    return (
        <div className={styles.Todo}>
            <input
                type="checkbox"
                name=""
                id={"item-done_" + IDSafe(title)}
                checked={_done}
                onChange={e => setDone(e.target.checked)}
            />

            <TitleBox
                title={title}
                onTitleChange={t => undefined}
            />
        </div>
    )
};


type TitleBoxProps = {
    title: string,
    editable?: boolean,
    onTitleChange: (newTitle: string) => void;
}
const TitleBox: React.FC<TitleBoxProps> = ({ title, editable, onTitleChange }) => {
    if (editable === null || editable === undefined) editable = false;

    const [_editable, setEditable] = useState(editable);
    const [_title, setTitle] = useState(title);

    function makeTitleEditable(e: PointerEvent<HTMLDivElement>) {
        setEditable(!_editable);
    }

    const inputRef: any = useRef(null);

    // Someday I will scour the internet to figure out the type signature of React's
    // synthetic event corresponding to onBlur. Today is not that day.
    function updateTitle() {
        const newTitle = inputRef.current.value;
        setTitle(newTitle);
        setEditable(false);
        onTitleChange(newTitle);
    }

    if (_editable) {
        return <input
            type="text"
            defaultValue={_title}
            onBlur={updateTitle}
            ref={inputRef}
        ></input>
    } else {
        return <div onClick={makeTitleEditable}>{_title}</div>
    }
}

export default Todo;
