import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const paperStyle = {
	width: 100,
	height: 140
};

export default class Post extends Component {
	render() {
		return(
			<Grid item>
			<Paper style={paperStyle}>
				{this.props.post.text}
			</Paper>
			</Grid>
			)
	}
}