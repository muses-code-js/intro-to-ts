import React from 'react';
import * as classNames from 'classnames';

import * as constants from './contants';

export class Item extends React.Component {
	editField = React.createRef();

	constructor() {
		super();

		this.state = {
			editText: '',
		};
	}
	handleSubmit = event => {
		const val = this.state.editText.trim();
		if (val) {
			this.props.onSave(val);
			this.setState({ editText: val });
		} else {
			this.props.onDestroy();
		}
	};

	handleEdit = () => {
		this.props.onEdit();
		this.setState({ editText: this.props.todo.title });
	};

	handleKeyDown = event => {
		if (event.which === constants.ESCAPE_KEY) {
			this.setState({ editText: this.props.todo.title });
			this.props.onCancel(event);
		} else if (event.which === this.ENTER_KEY) {
			this.handleSubmit(event);
		}
	};

	handleChange = event => {
		if (this.props.editing) {
			this.setState({ editText: event.target.value });
		}
	};

	getInitialState = () => {
		return { editText: this.props.todo.title };
	};

	/**
	 * This is a completely optional performance enhancement that you can
	 * implement on any React component. If you were to delete this method
	 * the app would still work correctly (and still be very performant!), we
	 * just use it as an example of how little code it takes to get an order
	 * of magnitude performance improvement.
	 */
	shouldComponentUpdate = (nextProps, nextState) => {
		return (
			nextProps.todo !== this.props.todo ||
			nextProps.editing !== this.props.editing ||
			nextState.editText !== this.state.editText
		);
	};

	componentDidUpdate(prevProps) {
		if (!prevProps.editing && this.props.editing) {
			this.editField.current.focus();
		}
	}

	render() {
		return (
			<li
				className={classNames({
					completed: this.props.todo.completed,
					editing: this.props.editing,
				})}
			>
				<div className="view">
					<input
						className="toggle"
						type="checkbox"
						checked={this.props.todo.completed}
						onChange={this.props.onToggle}
					/>
					<label onDoubleClick={this.handleEdit}>{this.props.todo.title}</label>
					<button className="destroy" onClick={this.props.onDestroy} />
				</div>
				<input
					ref={this.editField}
					className="edit"
					value={this.state.editText}
					onBlur={this.handleSubmit}
					onChange={this.handleChange}
					onKeyDown={this.handleKeyDown}
				/>
			</li>
		);
	}
}
