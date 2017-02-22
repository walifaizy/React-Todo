var React = require("react");


var Todo = React.createClass({
    /*toggle: function(id) {
         this.props.onToggle(id);
    },*/
    render: function() {
        var {id,text,completed} = this.props;
        return (
            <div onClick={() =>{
                   this.props.onToggle(id); 
                }}>   
              <input type="checkbox" checked={completed}></input>
              {text}
            </div>
        );
    }
});

module.exports = Todo;