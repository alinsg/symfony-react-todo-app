import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import './bootstrap'
import './styles/app.css'

class App extends Component {
    render() {
        return (
            <div>
                <h1>Hello from React!</h1>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'))
