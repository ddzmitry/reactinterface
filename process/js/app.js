var React = require('react');
var ReactDOM = require('react-dom');

var MainInterface = React.createClass({

    getInitialState: function(){

        return {
            title : 'Appointments',
            show: true
        }
    },
    render: function() {
        var showTitle;
        if (this.state.show) {
            showTitle = 'New Appointments';
        }
        var displayList = {
            display : this.state.show ? 'block' : 'none',
            color : 'red' 
        }
            return (
                <div className="interface">
                <h1> {showTitle} </h1>
            <ul style = {displayList}>
                    <li > Buffy 3:30 PM</li>
                    <li> Spot  8:30 PM</li>
                    <li> Buffy 3:50 PM</li>
            </ul>
                    </div>
                    )
            
        } //render

}); //MainInterface

ReactDOM.render(
    <MainInterface/>,
    document.getElementById('petAppointments')
)//render