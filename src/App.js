import React from 'react';
import CardList from './CardList';
import Scroll from './Scroll';
import SearchBox from './SearchBox';
import './App.css';

class App extends React.Component {

    constructor(){
        super();

        this.state = {
            robots: [],
            searchfield: '',
        }
    }

    onSearchChange = (event) => {

        this.setState({searchfield: event.target.value})
        console.log(this.state.searchfield.toLowerCase());
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then( response => response.json())
            .then( users => this.setState({robots: users}));
    }

    render(){
        const filteredRobot = this.state.robots.filter((robot) =>{
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase()) || robot.email.toLowerCase().includes(this.state.searchfield.toLowerCase())
        });

        if (this.state.robots.length === 0) {
            console.log("loading")
            return (
                <div className='tc'><h1>Loading robots</h1></div>
            );
        }
        else {
            return (
                <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                <CardList robots={filteredRobot}/>
                </Scroll>
            </div>
            );
        }
    }
}

export default App;
