var Employee = React.createClass({
    getInitialState: function() {
        return {display: true };
    },
    handleDelete() {
        var self = this;
        $.ajax({
            url: self.props.employee._links.self.href,
            type: 'DELETE',
            success: function(result) {
                console.log("success " + self.state.display);
                self.setState({display: false});
                console.log("success " + self.state.display);
            },
            error: function(xhr, ajaxOptions, thrownError) {
                toastr.error("error");
            }
        });
    },
    render: function() {
        console.log("render Employee " + this.props.employee.name);
        if (this.state.display==false) return null;
        return (
            <tr key={this.props.employee.years.toString()}>
                <td>{this.props.employee.name}</td>
                <td>{this.props.employee.age}</td>
                <td>{this.props.employee.years}</td>
                <td>
                    <button className="btn btn-info" onClick={this.handleDelete}>Delete</button>
                </td>
            </tr>
        );
    }
});

var EmployeeTable = React.createClass({
    render: function () {
        console.log("render Employee Table");
        var rows = [];
        this.props.employees.forEach(function (employee) {
            rows.push(<Employee employee = {employee} key={employee.name}/>)
        });
        console.log("render Employee Table before return");
        return (
            <div className="container">
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th>Name</th><th>Age</th><th>Years</th><th>Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                    {rows}
                    </tbody>
                </table>
            </div>
        );
        console.log("render Employee Table after return");
    }
});

var App = React.createClass({

    loadEmployeesFromServer: function () {
        var self = this;
        $.ajax({
            url: "http://localhost:8090/api/employees"
        }).then(function (data) {
            self.setState({
                employees: data._embedded.employees
            });
        });
    },

    getInitialState: function () {
        return {employees: []};
    },

    componentDidMount: function () {
        this.loadEmployeesFromServer();
    },

    render() {
        console.log("render App");
        return ( <EmployeeTable employees={this.state.employees}/> );
    },



});

ReactDOM.render(
    <App />, document.getElementById('root')
);

