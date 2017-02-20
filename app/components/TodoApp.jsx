var React = require("react");
var TodoList = require("TodoList");

var TodoApp = React.createClass({
    getInitialState: function() {
        return {
           todos: [
               {
                id: 1,
                text: "Walk the dog"
               }, {
                id: 2,
                text: "Clean the yard"
               }, {
                id: 3,
                text: "Leave the mail on the go"
               }, {
                id: 4,
                text: "Play video games"
               }
           ]
        };
    },
    render: function() {
        var {todos} = this.state;
        return (
            <div>
                <TodoList todos={todos}></TodoList>
            </div>
        )
    }
});

module.exports = TodoApp;