import React, { Component } from 'react';
import Post from './Post';
import Grid from '@material-ui/core/Grid';

export default class PostGrid extends Component {
	render() {
    	// Temporary until we pipe in posts data from the backend.
    	let data = {text: "Post Text"};
    	let postsData = [data, data, data];
    	return(
    		<div>
    		<Grid
    			container
    			spacing={32}
    			direction="row"
    			justify="center"
    			alignItems="center"
    		>
    		    {postsData.map((postData, i) => (
    				<Post key={i} post={postData}/>
    			))}

    		</Grid >
    		</div>
    		)
    }
}