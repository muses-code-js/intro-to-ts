import * as utils from './Utils';

export class Model {
    onChanges = [];
    todos;
    key;

    constructor(key) {
        this.key = key;
        this.todos = utils.store(this.key);
    }

    subscribe = (onChange) => {
        this.onChanges.push(onChange);
    };

    inform = () => {
        utils.store(this.key, this.todos);
        this.onChanges.forEach(function (cb) {
            cb();
        });
    }

    addTodo = (title) => {
        this.todos = this.todos.concat({
            id: utils.uuid(),
            title: title,
            completed: false,
        });

        this.inform();
    };

    toggleAll = (checked) => {
        // Note: it's usually better to use immutable data structures since they're
        // easier to reason about and React works very well with them. That's why
        // we use map() and filter() everywhere instead of mutating the array or
        // todo items themselves.
        this.todos = this.todos.map((todo) => {
            return utils.extend({}, todo, { completed: checked });
        });

        this.inform();
    };

    toggle = (todoToToggle) => {
        this.todos = this.todos.map((todo) => {
            return todo !== todoToToggle ? todo : utils.extend({}, todo, { completed: !todo.completed });
        });

        this.inform();
    };

    destroy = (todo) => {
        this.todos = this.todos.filter(function (candidate) {
            return candidate !== todo;
        });

        this.inform();
    };

    save = (todoToSave, text) => {
        this.todos = this.todos.map(function (todo) {
            return todo !== todoToSave ? todo : utils.extend({}, todo, { title: text });
        });

        this.inform();
    };

    clearCompleted = function () {
        this.todos = this.todos.filter(function (todo) {
            return !todo.completed;
        });

        this.inform();
    };
}
