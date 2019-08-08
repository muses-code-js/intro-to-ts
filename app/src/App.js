import React from 'react';
import { Item } from './Item';
import { Footer } from './Footer';
import { STATUS, ENTER_KEY } from './contants';
import { Model } from './Model';

import { BrowserRouter as Router } from 'react-router-dom';

import 'todomvc-app-css/index.css';

class App extends React.Component {
	model = new Model('muses-code-todos');

	constructor() {
		super();

		this.state = {
			editing: null,
			nowShowing: STATUS.ALL,
			newTodo: '',
		};
	}

	handleStatusChanged = event => {
		this.setState({ nowShowing: event });
	};

	handleChange = event => {
		this.setState({ newTodo: event.target.value });
	};

	handleNewTodoKeyDown = event => {
		if (event.keyCode !== ENTER_KEY) {
			return;
		}

		event.preventDefault();

		var val = this.state.newTodo.trim();

		if (val) {
			this.model.addTodo(val);
			this.setState({ newTodo: '' });
		}
	};

	toggleAll(event) {
		var checked = event.target.checked;
		this.model.toggleAll(checked);
		this.forceUpdate();
	}

	toggle(todoToToggle) {
		this.model.toggle(todoToToggle);
		this.forceUpdate();
	}

	destroy(todo) {
		this.model.destroy(todo);
		this.forceUpdate();
	}

	edit(todo) {
		this.setState({ editing: todo.id });
	}

	save(todoToSave, text) {
		this.model.save(todoToSave, text);
		this.setState({ editing: null });
	}

	cancel = () => {
		this.setState({ editing: null });
	};

	clearCompleted = () => {
		this.model.clearCompleted();
		this.forceUpdate();
	};

	render() {
		let footer;
		let main;
		let todos = this.model.todos;

		const shownTodos = todos.filter(todo => {
			switch (this.state.nowShowing) {
				case STATUS.ACTIVE:
					return !todo.completed;
				case STATUS.COMPLETED:
					return todo.completed;
				default:
					return true;
			}
		});

		const todoItems = shownTodos.map(todo => {
			return (
				<Item
					key={todo.id}
					todo={todo}
					onToggle={this.toggle.bind(this, todo)}
					onDestroy={this.destroy.bind(this, todo)}
					onEdit={this.edit.bind(this, todo)}
					editing={this.state.editing === todo.id}
					onSave={this.save.bind(this, todo)}
					onCancel={this.cancel}
				/>
			);
		});

		const activeTodoCount = todos.reduce(function(accum, todo) {
			return todo.completed ? accum : accum + 1;
		}, 0);

		const completedCount = todos.length - activeTodoCount;

		if (activeTodoCount || completedCount) {
			footer = (
				<Footer
					count={activeTodoCount}
					completedCount={completedCount}
					nowShowing={this.state.nowShowing}
					onClearCompleted={this.clearCompleted}
					onStatusChange={this.handleStatusChanged}
				/>
			);
		}

		if (todos.length) {
			main = (
				<section className="main">
					<input
						id="toggle-all"
						className="toggle-all"
						type="checkbox"
						onChange={this.toggleAll.bind(this)}
						checked={activeTodoCount === 0}
					/>
					<label htmlFor="toggle-all" />
					<ul className="todo-list">{todoItems}</ul>
				</section>
			);
		}

		return (
			<Router>
				<div>
					<header className="header">
						<h1>todos</h1>
						<input
							className="new-todo"
							placeholder="What needs to be done?"
							value={this.state.newTodo}
							onKeyDown={this.handleNewTodoKeyDown}
							onChange={this.handleChange}
							autoFocus={true}
						/>
					</header>
					{main}
					{footer}
				</div>
			</Router>
		);
	}
}

export default App;
