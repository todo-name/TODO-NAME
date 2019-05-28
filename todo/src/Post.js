import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Dots from './img/dots.png';
import copy from './img/copy.png';
import mark from './img/exclamation.png';
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
				<Menu />
				</Paper>
			</Grid>
			)
	}
}

class Menu extends Component {

	render() {
		const styles = {
			icon: {
				width: '20%'
			}
		}
		return (
			<div className="dropdown">
				<img className="dots dropdown-toggle"  id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"src={Dots}></img>						
				<div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
					<a class="dropdown-item" href="#" >
						<img src={copy} style={styles.icon}></img>
						Copy Link
					</a>
					<a class="dropdown-item" href="#">
						<img src={mark} style={styles.icon}></img>
						Report
					</a>
				</div>
			</div>
		)
	}
}