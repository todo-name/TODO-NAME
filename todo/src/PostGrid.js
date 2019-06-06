import React, { Component } from 'react';
import Post from './Post';
import Grid from '@material-ui/core/Grid';
import firebaseService from './Firebase/firebaseService';

export default class PostGrid extends Component {
	constructor() {
		super();
		this.state = {
			postsData: [],
			postsLiked: []
		}
		this.fb = new firebaseService();
	}
	componentDidMount(){
		this.getRecentPosts();
		this.props.auth.postsLiked.subscribe(posts => this.setState({postsLiked: posts}));
	}
	getRecentPosts() {
		this.fb.getRecent().then(data => {
			this.setState({postsData: data});
		})
	}
	checkLiked(pid) {
		return this.state.postsLiked.includes(pid);
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
    		    
    		    {this.state.postsData.map((post, i) => (
					<Post key={i} post={post} fb={this.fb} auth={this.props.auth} 
							liked={this.checkLiked(Object.keys(post)[0])}/>
    			))}

    		</Grid >
    		</div>
    		)
    }
}