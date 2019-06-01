import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Dots from './img/dots.png';
import copy from './img/copy.png';
import mark from './img/exclamation.png';
import { Dialog, DialogContent, DialogActions } from '@material-ui/core/';

import heart from './img/heart.png';

const paperStyle = {
	width: 300,
	height: 300,
	padding: 8,
	display:"flex",
	flexDirection: "column",
};

export default class Post extends Component {

	like = (event) => {
		// API call to like
	}

	render() {
		const styles = {
			postHeader: {
				display: "flex",
				flexDirection: "row",
				justifyContent: "space-between"
			},
		};
		const cellStyle = {
			display: "flex", 
			flex: 1, 
			minHeight: 0, 
			background: "black",
			marginTop: 8,
			marginBottom: 8
		};
		const imageStyle = { maxWidth: "100%" };

		let post = this.props.post;
		let key = Object.keys(post)[0];
		let postData = post[key];

		let postImage = null;
		if(postData.url.endsWith(".gifv")){
			let videourl = postData.url.replace(".gifv", ".mp4");
			postImage = <video src={videourl} style={imageStyle} autoPlay />;
		} else {
			postImage = <img crossOrigin="" style={imageStyle} src={postData.url} ></img>;
		}

		return(
			<Grid item>
				<Paper style={paperStyle}>
					<div style={styles.postHeader}>
						{postData.desc}
						<Menu />
					</div>
				<div style={cellStyle}>
					{postImage}
				</div>
				<img src={heart} width={24} height={24} onClick={this.like}></img>
				</Paper>
			</Grid>
			)
	}
}

class Menu extends Component {
	constructor(props) {
		super(props);
		this.state = {}
	}
	clickReport = () => {
		this.setState({
			open: !this.state.open,
		})
	}
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
					<a class="dropdown-item" href="#" onClick={this.clickReport}>
						<img src={mark} style={styles.icon}></img>
						Report
					</a>
					<Report open={this.state.open} click={this.clickReport} />
				</div>
			</div>
		)
	}
}

class Report extends Component {
    render() {
		const types = ['Not a dog', 'Not cute', 'Inappropriate', 'A cat', 'Other']
        return (
            <Dialog
                open={this.props.open}
                onClose={this.props.click}
                scroll='paper'
                fullWidth='false'
                maxWidth='sm'
                aria-labelledby="scroll-dialog-title"
            >
                <DialogContent>
					<select>
						{
							types.map((type) => {
								return (
									<option value={type}>{type}</option>
								)
							})
						}
					</select>
					<textarea id="report-description" type="text" placeholder="Tell us more..." maxLength="500"></textarea>
                </DialogContent>
                <DialogActions>
					<button className="btn btn-primary" type="button" onClick={this.props.click}>Report</button>
                </DialogActions>
            </Dialog>
        )
    }
}