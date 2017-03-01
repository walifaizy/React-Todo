var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var TodoApp = require("TodoApp");

//redux
var actions = require("actions");
var store = require("configureStore").configure();

store.subscribe(() => {
  console.log("STATE: " + store.getState());
});

store.dispatch(actions.addTodo("Clean the yard"));
store.dispatch(actions.setSearchText("yard"));
store.dispatch(actions.toggleShowCompleted("Clean the yard"));

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <TodoApp></TodoApp>,
  document.getElementById('app')
);
