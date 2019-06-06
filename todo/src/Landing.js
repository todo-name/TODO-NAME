import React, { Component } from 'react';
import NavBar from './NavBar';
import PostGrid from './PostGrid';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import FirebaseService from './Firebase/firebaseService';
import Auth from './Auth';

export default class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: false,
        }
        this.auth = new Auth();
    }

    componentDidMount() {
        let fb = new FirebaseService();
        fb.getAll().then(val => console.log(val));

        // Detect when user logs in or out
        let authUnregFunc = firebase.auth().onAuthStateChanged((firebaseUser) => {
            if (firebaseUser) { //firebaseUser defined: is logged in
                this.setState({ login: true });
                this.auth.setUser(firebaseUser.uid);
                fb.getLikedPosts(firebaseUser.uid).then(data => this.auth.addLikedPosts(data));
            } else { //firebaseUser undefined: is not logged in
                this.setState({ login: false });
            }
        });
    }
    
    render() {
    	let postGrid = <PostGrid auth={this.auth}/>;
        return (
            <div>
                <NavBar login={this.state.login} postGrid={postGrid} auth={this.auth}/>
                {postGrid}
            </div>
        )
    }
}