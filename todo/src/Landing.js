import React, { Component } from 'react';
import NavBar from './NavBar';
import PostGrid from './PostGrid';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

export default class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: false,
        }
    }


    componentDidMount() {
        // Detect when user logs in or out
        let authUnregFunc = firebase.auth().onAuthStateChanged((firebaseUser) => {
            if (firebaseUser) { //firebaseUser defined: is logged in, redirect from login page to my-project
                this.setState({ login: true });
            } else { //firebaseUser undefined: is not logged in
                this.setState({ login: false })
            }
        });
    }


    render() {
        return (
            <div>
                <NavBar login={this.state.login}/>
                <PostGrid />
            </div>
        )
    }
}