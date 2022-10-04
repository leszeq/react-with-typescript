import React, { useState } from 'react';
// import { Route} from 'react-router-dom';
import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';
import { Todo } from './todo.model';

const App: React.FC = () => {
	const [todos, setTodos] = useState<Todo[]>([]);

	const todoAddHandler = (text: string) => {
		setTodos((prevTodos) => [
			...prevTodos,
			{ id: Math.random().toString(), text: text },
		]);
	};

	const todoDleteHandler = (todoId: string) => {
		setTodos((prevTodos) => {
			return prevTodos.filter((todo) => todo.id !== todoId);
		});
	};

	return (
		<div className='App'>
			<h1>Hello in TodoApp</h1>
			<NewTodo onAddTodo={todoAddHandler} />
			<TodoList items={todos} onDeleteTodo={todoDleteHandler} />
		</div>
	);
};

export default App;
