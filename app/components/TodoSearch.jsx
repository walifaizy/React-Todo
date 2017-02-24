var React = require("react");

var TodoSearch = React.createClass({
    handleSearch: function() {
        var showCompleted = this.refs.showCompleted.checked;
        var searchText = this.refs.searchText.value;

        this.props.onSearch(showCompleted, searchText);
    },
    render: function() {
        return (
            <div className="container__header">
                <div>
                    <input type="search" ref="searchText" onChange={this.handleSearch} placeholder="Sarch todos"/>
                </div>
                <div>
                    <label>
                        <input type="checkbox" ref="showCompleted" onChange={this.handleSearch}/>
                        show completed todos
                    </label>
                </div>
            </div>
        );
    }
});

module.exports = TodoSearch;
