var redux = require("redux");
var {todosReducer,searchTextReducer,showCompletedReducer} = require("reducers");

export var configure = () => {
  var reducer = redux.combineReducers({
    searchText: searchTextReducer,
    showCompleted: showCompletedReducer,
    todos: todosReducer
  });

  var store = redux.createStore(reducer,redux.compose(
  /*redux.applyMiddleware(thunk),*/
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  ));

  return store;
}
