var expect = require("expect");
var actions = require("actions");

describe("Actions", () => {
  it("should generate search text action",() => {
    var action = {
      type: "SET_SEARCH_TEXT",
      searchText: "This is some search text"
    };
    var res = actions.setSeacrhText(action.searchText);
    expect(res).toEqual(action);
  });

  it("should generate toggleShowCompleted action", () => {
    var action = {
      type: "TOGGLE_SHOW_COMPLETED",
    };
    var res = actions.toggleShowCompleted();
    expect(res).toEqual(action);
  });

  it("should generate addtodo action", () => {
    var action = {
      type: "ADD_TODO",
      text: "This is some text"
    };
    var res = actions.addTodo(action.text);
    expect(res).toEqual(action);
  });
});

it("should generate toggleTodo action", () => {
  var action = {
    type: "TOGGLE_TODO",
    id: "123"
  };
  var res = actions.toggleTodo(action.id);
  expect(res).toEqual(action);
});
