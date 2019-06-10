import React, { Component } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
//import UploadDialog from './UploadDialog';
import { Modal } from 'react-bootstrap'
import firebaseService from './Firebase/firebaseService';

export default class NavBar extends Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            errorMessage: '',
            //uploadForm: this.props.uploadForm
        };
        this.fb = new firebaseService();
    }

    signupClick = (event) => {
        event.preventDefault();
        this.setState({ signupform: true })
    }

    signinClick = (event) => {
        this.setState({ signinform: true })
    }

    signoutClick = (event) => {
        firebase.auth().signOut();
        this.props.auth.signOut();
    }

    cancelClick = (event) => {
        this.setState({
            signinform: false,
            signupform: false,
            registersuccess: false,
            uploadForm: false
        })
    }

    uploadClick = (event) => {
        this.setState({ uploadForm: true })
    }


    handleRegister = (event) => {
        event.preventDefault();
        if (event.target[1].value != event.target[2].value) {
            document.getElementById('passconfirm').style.display = "block";
            this.setState({ errorMessage: '' })
        } else {
            document.getElementById('passconfirm').style.display = "none";
            firebase.auth().createUserWithEmailAndPassword(event.target[0].value, event.target[1].value)
                .then((data) => {
                    this.setState({ signupform: false, errorMessage: '', registersuccess: true });
                    this.props.auth.setUser(data.user.uid);
                }).catch(err => this.setState({ errorMessage: err.message }))
        }
    }

    handleSignin = (event) => {
        event.preventDefault();
        firebase.auth().signInWithEmailAndPassword(event.target[0].value, event.target[1].value)
            .then((data) => {
                this.setState({ signinform: false, errorMessage: '' });
                this.props.auth.setUser(data.user.uid);
            }).catch(err => this.setState({ errorMessage: err.message }));
    }

    handleUpload = (event) => {
        let title = document.getElementById("title").value;
        let tags = document.getElementById("tags").value.split(/[ ,]+/);
        let image = document.getElementById("upload_image").files[0];
        let desc = document.getElementById("desc").value;

        var apiUrl = 'https://api.imgur.com/3/image';
        var apiKey = '987f385fd491e1d';

        var xhr = new XMLHttpRequest();
        xhr.open("POST", apiUrl);
        xhr.setRequestHeader("Authorization", "Client-ID " + apiKey);

        let firebase = this.fb;
        let auth = this.props.auth;

        xhr.onload = function() {
        	if(xhr.status == 200){
        		let imgurData = JSON.parse(xhr.responseText).data;
        		console.log(imgurData);

        		let data = {
        			desc: desc,
        			flagged: false,
        			likes: 0,
        			time_posted: new Date(imgurData.datetime * 1000),
        			title: title,
        			uid: auth.getUser(),
        			url: imgurData.link
        		};

        		firebase.add(data).then(function(docRef) {
        			console.log("Document written with ID: ", docRef.id);
        		})
        		.catch(function(error) {
        			console.log("Error adding document: ", error);
				});
        	}	
        };
        var data = new FormData();
        data.append("image", image);
        xhr.send(data);

        event.preventDefault();
        this.cancelClick();
        this.props.getRecentPosts();
    }

    

    render() {
        let button;

        if (this.props.login == false) {
            button =
                <div className="form-inline form-right">
                    <button id="signinButton" className="custom-button btn btn-primary" onClick={this.signinClick}>Sign In</button>
                    <button id="signupButton" className="custom-button btn btn-outline-secondary" onClick={this.signupClick}>Sign Up</button>
                </div>
        } else {
            button =
                <div className="form-inline form-right">
                    <button id="uploadButton" className="custom-button btn btn-primary" onClick={this.uploadClick}>Upload</button>
                    <button id="signoutButton" className="custom-button btn btn-outline-secondary" onClick={this.signoutClick}>Sign Out</button>
                </div>
        }
        return (
            <div>
                <nav className="navbar navbar-light bg-light sticky-top">
                    <form className="form-inline form-left flex-nowrap">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" id='term'></input>
                        <button className="btn btn-outline-success my-2 my-sm-0 search" type="submit" onClick={this.props.search}>Search</button>
                    </form>
                    {button}
                </nav>

                <Signinform signinform={this.state.signinform} cancel={this.cancelClick} handleSignin={this.handleSignin} error={this.state.errorMessage} />

                <Signupform signupform={this.state.signupform} cancel={this.cancelClick} handleRegister={this.handleRegister} error={this.state.errorMessage} />

                <Successregister cancel={this.cancelClick} registersuccess={this.state.registersuccess} />

                <UploadDialog uploadForm={this.state.uploadForm} cancel={this.cancelClick} upload={this.handleUpload} auth={this.props.auth} />
            </div >
        )
    }
}

class UploadDialog extends Component {
    render() {
        return (
            <Modal show={this.props.uploadForm} onHide={this.props.cancel}>
                <Modal.Header closeButton>
                    <Modal.Title>Upload Dog Picture</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={this.props.upload}>
                        <div className="form-group">
                            <label htmlFor="title">Title</label><br />
                            <input type="text" id="title" name="title" className="form-control" required="required" maxLength="150" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="desc">Description</label><br />
                            <input type="text" id="desc" name="description" className="form-control" required="required" maxLength="500" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="upload_image">Upload Image</label><br />
                            <input type="file" id="upload_image" name="image" accept="image/*" required="required" onChange={this.test} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="tags">Tags:</label><br />
                            <input type="tags" id="tags" name="tags"
                                className="form-control" maxLength="500"></input>
                        </div>
                        <p>{this.props.error}</p>
                        <div className="button">
                            <button type="submit" className="btn btn-primary" >Post</button>
                            <button type='button' className="btn btn-secondary form-right-button" formNoValidate="formnovalidate" onClick={this.props.cancel}>Cancel</button>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        )
    }
}

class Signinform extends Component {
    render() {
        return (

            <Modal show={this.props.signinform} onHide={this.props.cancel}>
                <Modal.Header closeButton>
                    <Modal.Title>Sign In</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={this.props.handleSignin}>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label><br />
                            <input type="email" id="email" className="form-control" name="email" required="required" placeholder="Enter email"></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password:</label><br />
                            <input type="password" id="password" className="form-control" name="password" required="required" placeholder="Password"></input>
                        </div>
                        <p>{this.props.error}</p>
                        <div className="button">
                            <button type="submit" className="btn btn-primary">Sign In</button>
                            <button type='button' className="btn btn-secondary form-right-button" formnovalidate="formnovalidate" onClick={this.props.cancel}>Cancel</button>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        )
    }
}

class Signupform extends Component {
    render() {
        return (
            <Modal show={this.props.signupform} onHide={this.props.cancel}>
                <Modal.Header closeButton>
                    <Modal.Title>Register</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={this.props.handleRegister} >
                        <div className="form-group">
                            <label htmlFor="email">Email:</label><br />
                            <input type="email" id="email" className="form-control" name="email" required="required" placeholder="Enter email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password:</label><br />
                            <input type="password" id="password" className="form-control" pattern=".{6,}" title="Six or more characters" required="required"
                                placeholder="Password"></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="confirm">Confirm password:</label><br />
                            <input type="password" id="confirm" className="form-control" name="passwordconf" required="required" placeholder="Password confirmation" />
                        </div>
                        <div id='passconfirm'>
                            <p>Invalid password confirmation</p>
                        </div>
                        <p>{this.props.error}</p>
                        <div className="button">
                            <button type="submit" className="btn btn-primary">Register</button>
                            <button type='button' className="btn btn-secondary form-right-button" formnovalidate="formnovalidate" onClick={this.props.cancel}>Cancel</button>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        )
    }
}

class Successregister extends Component {
    render() {
        return (
            <Modal show={this.props.registersuccess} onHide={this.props.cancel}>
                <Modal.Body>
                    <p>Your account has been created and you have been logged in!</p>
                    <button type='button' className="btn btn-primary" formnovalidate="formnovalidate" onClick={this.props.cancel}>Cancel</button>
                </Modal.Body>
            </Modal>
        )
    }
}