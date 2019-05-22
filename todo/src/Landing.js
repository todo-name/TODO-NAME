import React, { Component } from 'react';
import NavBar from './NavBar';
import PostGrid from './PostGrid';
import FirebaseService from './Firebase/firebaseService';

export default class Landing extends Component {
    componentDidMount() {
        let fb = new FirebaseService();
        fb.getAll().then(val => console.log(val));
    }
    render() {
        return(
            <div>
                <NavBar />
                <PostGrid />
            </div>
        )
    }
}