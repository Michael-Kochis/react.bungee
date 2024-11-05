import React, { Component } from 'react';
import './App.css'
import Greeting from './components/Greeting';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Greeting("Name") />
            </div>
        )
    }
}

export default App;