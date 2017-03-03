var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require("react-redux");
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var TodoApp = require("TodoApp");

//redux
var actions = require("actions");
var store = require("configureStore").configure();

store.subscribe(() => {
  console.log("New state", store.getState());
});

/*store.dispatch(actions.addTodo("Clean the yard"));
store.dispatch(actions.setSearchText("yard"));
store.dispatch(actions.toggleShowCompleted("Clean the yard"));*/

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Provider store={store}>
    <TodoApp></TodoApp>
  </Provider>,
  document.getElementById('app')
);
