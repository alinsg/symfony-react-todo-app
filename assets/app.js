import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import './bootstrap'
import TodoContextProvider from "./contexts/TodoContext";
import {ChakraProvider, Heading} from '@chakra-ui/react'
import Header from "./components/header/index"

class App extends Component {
    render() {
        return (
            <>
                <Header />
                <Heading>Hello from App.js</Heading>
            </>
        );
    }
}

ReactDOM.render(<TodoContextProvider><ChakraProvider><App /></ChakraProvider></TodoContextProvider>, document.getElementById('root'))
