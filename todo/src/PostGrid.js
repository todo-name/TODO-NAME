import React, { Component } from 'react';
import Post from './Post';
import Grid from '@material-ui/core/Grid';
import firebaseService from './Firebase/firebaseService';

export default class PostGrid extends Component {
	constructor() {
		super();
		this.fb = new firebaseService();
	}
	checkLiked(pid) {
		return this.props.postsLiked.includes(pid);
	}

	render() {
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
    		    
    		    {this.props.post.map((post, i) => (
					<Post key={i} post={post} fb={this.fb} auth={this.props.auth} 
							liked={this.checkLiked(Object.keys(post)[0])}/>
    			))}

    		</Grid >
    		</div>
    		)
    }
}