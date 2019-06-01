import React, { Component } from 'react';
import Post from './Post';
import Grid from '@material-ui/core/Grid';
import firebaseService from './Firebase/firebaseService';

export default class PostGrid extends Component {
	constructor() {
		super();
		this.state = {
			postsData: []
		}
		this.fb = new firebaseService();
	}
	componentDidMount(){
		this.getRecentPosts();
	}
	getRecentPosts() {
		this.fb.getRecent().then(data => {
			this.setState({postsData: data});
			console.log(this.state.postsData);
		})
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
    		    
    		    {this.state.postsData.map((post, i) => (
    				<Post key={i} post={post}/>
    			))}

    		</Grid >
    		</div>
    		)
    }
}