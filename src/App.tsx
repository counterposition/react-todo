import React from 'react';
import Todo from './Todo';
import TodoList from './TodoList';

/* 
Normally this data would come from a database. It would either be fetched on the client-side during hydration or on the server-side for statically generated pages (as in Next.js)

But for the purposes of this demo, let us manually create the Todo components and pass them to TodoList as children.
 */

const todo_data = [
  { title: 'Leather jacket', done: false },
  { title: 'The Feynman Lectures hardcover', done: true },
  { title: 'Seiko timepiece', done: true }
];

const todo_components = todo_data.map(t => <Todo key={t.title} {...t} />);

function App() {
  return (
    <TodoList title="Shopping List">
      { todo_components}
    </TodoList>
  );
}

export default App;
