import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';

class App extends Component {
    render() {
        return (
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="home">Home</Link>
                        </li>
                        <li>
                            <Link to="comments">Comments</Link>
                        </li>
                    </ul>
                </nav>
                <div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default App;