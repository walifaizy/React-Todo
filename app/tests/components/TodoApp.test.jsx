var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoApp = require("TodoApp");

describe("TodoApp", () =>{
    it("should Exist",() =>{
        expect(TodoApp).toExist();
    });
    
    it("Should add todo to the todos state on handleAddTodo", ()=>{
        var todoText = "coding";
        var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
        
        todoApp.setState({todos:[]});
        todoApp.handleAddTodo(todoText);
        
        expect(todoApp.state.todos[0].text).toBe(todoText);
    });
});

