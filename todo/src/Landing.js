import React, { Component } from 'react';
import NavBar from './NavBar';
import PostGrid from './PostGrid';

export default class Landing extends Component {
    render() {
        return(
            <div>
                <NavBar />
                <PostGrid />
            </div>
        )
    }
}