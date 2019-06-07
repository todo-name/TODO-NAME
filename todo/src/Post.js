import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Dots from './img/dots.png';
import copy from './img/copy.png';
import mark from './img/exclamation.png';
import { Dialog, DialogContent, DialogActions } from '@material-ui/core/';

import heart from './img/like.svg';
import redHeart from './img/red_like.svg';
import { throwStatement } from '@babel/types';

const paperStyle = {
	width: 300,
	height: 300,
	padding: 8,
	display:"flex",
	flexDirection: "column",
};

export default class Post extends Component {
	constructor() {
		super();
		this.state = {
			likes: 0,
			liked: false
		}
	}
	componentDidMount() {
		this.setState({
			likes: this.props.post[Object.keys(this.props.post)[0]].likes,
			liked: this.props.liked
		});
	}
	componentWillReceiveProps(props) {
		this.setState({
			likes: props.post[Object.keys(props.post)[0]].likes,
			liked: props.liked
		});
	}

	like = (event) => {
		if (!this.state.liked) {
			this.props.fb.likePost(this.props.post, this.props.auth.getUser()).then(results => {
				this.setState({
					likes: results,
					liked: true
				});
			});
		} else {
			this.props.fb.unlikePost(this.props.post, this.props.auth.getUser()).then(results => {
				this.setState({
					likes: results,
					liked: false
				})
			})
		} 
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
		const imageStyle = { maxWidth: "100%", objectFit: "contain" };
		const likeStyle = { display: "flex", flexDirection: "row", alignContent: "center" };
		const likeCounterStyle = { marginLeft: 8 };
		const descStyle = { marginBottom: 8 };

		let post = this.props.post;
		let key = Object.keys(post)[0];
		let postData = post[key];

		let postImage = null;
		if(postData.url.endsWith(".gifv")){
			let videourl = postData.url.replace(".gifv", ".mp4");
			postImage = <video src={videourl} style={imageStyle} autoPlay muted loop/>;
		} else {
			postImage = <img crossOrigin="" style={imageStyle} src={postData.url} ></img>;
		}

		return(
			<Grid item>
				<Paper style={paperStyle}>
					<div style={styles.postHeader}>
						{postData.title}
						<Menu auth={this.props.auth} fb={this.props.fb} pid={key}/>
					</div>
					<div style={cellStyle}>
						{postImage}
					</div>
					<div style={descStyle}>
						{postData.desc}
					</div>
					{this.props.auth.checkLoggedIn() ? <div style={likeStyle}>
						<img src={this.state.liked ? redHeart : heart} width={24} height={24} onClick={this.like}
								style={{cursor: "pointer"}}></img>
						<div style={likeCounterStyle}> {this.state.likes}</div>
					</div> : undefined}
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
				<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
					<a className="dropdown-item" href="#" >
						<img src={copy} style={styles.icon}></img>
						Copy Link
					</a>
					{this.props.auth.checkLoggedIn() ? <a className="dropdown-item" href="#" onClick={this.clickReport}>
						<img src={mark} style={styles.icon}></img>
						Report
					</a> : undefined}
					<Report open={this.state.open} click={this.clickReport} fb={this.props.fb} pid={this.props.pid}/>
				</div>
			</div>
		)
	}
}

class Report extends Component {
	constructor() {
		super();
		this.reportInfo = {
			flagged: true,
			reportCategory: "",
			reportDesc: ""
		}
	}
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
					<select onChange={(event) => this.reportInfo.reportCategory = event.target.value}>
						<option value=""></option>
						{
							types.map((type) => {
								return (
									<option value={type}>{type}</option>
								)
							})
						}
					</select>
					<textarea id="report-description" type="text" placeholder="Tell us more..." maxLength="500"
							onChange={(event) => this.reportInfo.reportDesc = event.target.value}></textarea>
                </DialogContent>
                <DialogActions>
					<button className="btn btn-primary" type="button" onClick={() => {
						this.props.fb.flag(this.props.pid, this.reportInfo); this.props.click()}
					}>Report</button>
                </DialogActions>
            </Dialog>
        )
    }
}
