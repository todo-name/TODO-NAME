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
            postsData: [],
            results: ''
        }
        this.getRecentPosts = this.getRecentPosts.bind(this);
        this.auth = new Auth();
        this.fb = new FirebaseService();
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

        this.getRecentPosts();
    }

    getRecentPosts() {
        let fb = new FirebaseService();
		fb.getRecent().then(data => {
            console.log(data);
            this.setState({postsData: data});
            console.log(this.state.postsData)
        })
    }

    
    searchClick = (event) => {
        event.preventDefault()
        let searchTerm = document.getElementById('term').value.toLowerCase();
        if (searchTerm == '') {
            this.setState({results: ""})
            this.getRecentPosts()
        } else {
            if (searchTerm.includes(' ')) {
                searchTerm = searchTerm.split(" ");
            }
            let fb = new FirebaseService();
            fb.getRecent().then(post => {
                let filteredPosts = []
                for (var i = 0; i < post.length; i++) {
                    let key = Object.keys(post[i])[0];
                    let postData = post[i][key]
                    if ((typeof searchTerm) == 'string') {
                        if (postData.desc.toLowerCase().includes(searchTerm)) {
                            filteredPosts.push(post[i]);
                        }
                    } else {
                        for (var j = 0; j < searchTerm.length; j++) {
                            if (postData.desc.toLowerCase().includes(searchTerm[j])) {
                                filteredPosts.push(post[i]);
                                j = searchTerm.length
                            }
                        }
                    }
                }
                if (filteredPosts.length == 0) {
                    this.setState({results: "No results"})
                } else {
                    this.setState({results: ""})
                }
                this.setState({postsData: filteredPosts})
            })
        }
    }

    
    render() {
    	let postGrid = <PostGrid auth={this.auth} post={this.state.postsData} results={this.state.results}/>;
        return (
            <div>
                <NavBar getRecentPosts={this.getRecentPosts} login={this.state.login} postGrid={postGrid} auth={this.auth} search={this.searchClick} upload={this.upload} uploadForm={this.state.uploadForm}/>
                {postGrid}
            </div>
        )
    }
}