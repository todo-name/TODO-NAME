import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Dots from './img/dots.png';
import copy from './img/copy.png';
import mark from './img/exclamation.png';
import { Dialog, DialogContent, DialogActions } from '@material-ui/core/';

import heart from './img/heart.png';


export default class Post extends Component {
	like = (event) => {
		// API call to like
	}

	render() {
		const styles = {
			paperStyle: {
				width: "100%",
				height: 140
			},
			postHeader: {
				display: "flex",
				flexDirection: "row",
				justifyContent: "space-between"
			}
		}

		return(
			<Grid item>
				<Paper style={styles.paperStyle}>
					<div style={styles.postHeader}>
						{this.props.post.text}
						<Menu />
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
		const types = ['Not a dog', 'Not cute', 'Inaccpropriate', 'A cat', 'Other']
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