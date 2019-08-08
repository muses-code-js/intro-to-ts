import React from 'react';
import * as classNames from 'classnames';

import { STATUS } from './contants';
import { pluralize } from './Utils';
import { Link, withRouter } from 'react-router-dom';

class TodoFooter extends React.Component {
	constructor(props) {
		super(props);

		console.log('props', props);
		props.history.listen((location, action) => {
			props.onStatusChange(location.pathname);
		});
	}

	render() {
		var activeTodoWord = pluralize(this.props.count, 'item');
		var clearButton = null;

		if (this.props.completedCount > 0) {
			clearButton = (
				<button className="clear-completed" onClick={this.props.onClearCompleted}>
					Clear completed
				</button>
			);
		}

		var nowShowing = this.props.nowShowing;
		return (
			<footer className="footer">
				<span className="todo-count">
					<strong>{this.props.count}</strong> {activeTodoWord} left
				</span>
				<ul className="filters">
					<li>
						<Link to="/" className={classNames({ selected: nowShowing === STATUS.ALL })}>
							All
						</Link>
					</li>{' '}
					<li>
						<Link to="/active" className={classNames({ selected: nowShowing === STATUS.ACTIVE })}>
							Active
						</Link>
					</li>{' '}
					<li>
						<Link
							to="/completed"
							className={classNames({ selected: nowShowing === STATUS.COMPLETED })}
						>
							Completed
						</Link>
					</li>
				</ul>
				{clearButton}
			</footer>
		);
	}
}

export const Footer = withRouter(TodoFooter);
