import React, { Component } from 'react';
import Post from './Post';
import Grid from '@material-ui/core/Grid';
import FirebaseService from './Firebase/firebaseService';

export default class PostGrid extends Component {
	constructor(){
		super();
		this.state = { posts:[] };
	}

	componentDidMount(){
		let posts = [];

        let fb = new FirebaseService();
        fb.getAll().then((val) => {
        	for(var prop in val){
        		let post = val[prop]
        		let key = Object.keys(post)[0];
        		let postData = post[key];
        		posts.push(postData);
        	}
        	this.setState({posts: posts});
        });
	}

	render() {
    	// Temporary until we pipe in posts data from the backend.
    	return(
    		<div>
    		<Grid
    			container
    			spacing={32}
    			direction="row"
    			justify="center"
    			alignItems="center"
    			style={{
    				margin: 0,
    				width: '100%',
  				}}
    			>
    		    
    		    {this.state.posts.map((post, i) => (
    				<Post key={i} post={post}/>
    			))}

    		</Grid >
    		</div>
    		)
    }
}