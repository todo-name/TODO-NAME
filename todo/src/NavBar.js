import React, { Component } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import Button from '@material-ui/core/Button';
import UploadDialog from './UploadDialog';

export default class NavBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            display: '',
            errorMessage: ''
        }
    }

    signupClick = (event) => {
        event.preventDefault();
        document.getElementById("signupButton").disabled = true;
        this.setState({ display: 'signup' })
    }

    signinClick = (event) => {
        event.preventDefault();
        document.getElementById("signinButton").disabled = true;
        document.getElementById("signupButton").disabled = false;
        this.setState({ display: 'signin' })
    }

    signoutClick = (event) => {
        event.preventDefault();
        firebase.auth().signOut()
    }

    cancelClick = (event) => {
        event.preventDefault();
        document.getElementById("signupButton").disabled = false;
        document.getElementById("signinButton").disabled = false;

        this.setState({
            display: ''
        })
    }

    cancelClickSuccess = (event) => {
        event.preventDefault();
        this.setState({
            display: ''
        })
    }

    uploadClick = (event) => {
        event.preventDefault();
        document.getElementById("signoutButton").disabled = true;
        document.getElementById("uploadButton").disabled = true;
        this.setState({ display: 'upload' })
    }

    cancelClickUpload = (event) => {
        event.preventDefault();
        document.getElementById("signoutButton").disabled = false;
        document.getElementById("uploadButton").disabled = false;
        this.setState({
            display: ''
        });
    }

    handleRegister = (event) => {
        event.preventDefault();
        if (event.target[1].value != event.target[2].value) {
            document.getElementById('passconfirm').style.display = "block";
            this.setState({ errorMessage: '' })
        } else {
            document.getElementById('passconfirm').style.display = "none";
            firebase.auth().createUserWithEmailAndPassword(event.target[0].value, event.target[1].value)
                .then(() => {
                    this.setState({ display: 'registersuccess', errorMessage: '' })
                }).catch(err => this.setState({ errorMessage: err.message }))
        }
    }

    handleSignin = (event) => {
        event.preventDefault();
        document.getElementById("signupButton").disabled = false;
        document.getElementById("signinButton").disabled = false;
        firebase.auth().signInWithEmailAndPassword(event.target[0].value, event.target[1].value)
            .then(() => {
                this.setState({ display: '', errorMessage: '' })
            }).catch(err => this.setState({ errorMessage: err.message }));
    }

    render() {
        let button;

        if (this.props.login == false) {
            button =
                <form class="form-inline form-right">
                    <button id="signinButton" className="custom-button btn btn-primary" onClick={this.signinClick}>Sign In</button>
                    <button id="signupButton" className="custom-button btn btn-primary" onClick={this.signupClick}>Sign Up</button>
                </form>
        } else {
            button =
                <form class="form-inline form-right">
                    <button id="uploadButton" className="custom-button btn btn-primary" onClick={this.uploadClick}>Upload</button>
                    <button id="signoutButton" className="custom-button btn btn-primary" onClick={this.signoutClick}>Sign Out</button>
                </form>
        }
        return (
            <div>
                <nav class="navbar navbar-light bg-light sticky-top">
                    <form class="form-inline form-left flex-nowrap">
                        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
                        <button class="btn btn-outline-success my-2 my-sm-0 search" type="submit">Search</button>
                    </form>
                    {button}
                </nav>

                {this.state.display == 'signin' &&
                    <Signinform button={this.handleSignin} cancel={this.cancelClick} error={this.state.errorMessage} />
                }

                {this.state.display == 'signup' &&
                    <Signupform button={this.handleRegister} cancel={this.cancelClick} error={this.state.errorMessage} />
                }

                {this.state.display == 'registersuccess' &&
                    <Successregister cancel={this.cancelClickSuccess} />
                }

                {this.state.display == 'upload' &&
                    <UploadDialog cancel={this.cancelClickUpload} />
                }
            </div >
        )
    }
}

class Signinform extends Component {
    render() {
        return (
            <div id='signinForm'>
                <form onSubmit={this.props.button}>
                    <div>
                        <label htmlFor="email">Email:</label><br />
                        <input type="email" id="email" className="text-input" name="email" required="required" />
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label><br />
                        <input type="password" id="password" name="password" required="required"
                            className="text-input"></input>
                    </div>
                    <p>{this.props.error}</p>
                    <div className="button">
                        <button type="submit" className="custom-button" >Sign In</button>
                        <button type='button' className="custom-button form-right-button" formnovalidate="formnovalidate" onClick={this.props.cancel}>Cancel</button>
                    </div>
                </form>
            </div>
        )
    }
}

class Signupform extends Component {
    render() {
        return (
            <div id='signupForm'>
                <form onSubmit={this.props.button} >
                    <div>
                        <label htmlFor="email">Email:</label><br />
                        <input type="email" id="email" className="text-input" name="email" required="required" />
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label><br />
                        <input type="password" id="password" name="password" pattern=".{6,}" title="Six or more characters" required="required"
                            className="text-input"></input>
                    </div>
                    <div>
                        <label htmlFor="confirm">Confirm password:</label><br />
                        <input type="password" id="confirm" className="text-input" name="passwordconf" required="required" />
                    </div>
                    <div id='passconfirm'>
                        <p>Invalid password confirmation</p>
                    </div>
                    <p>{this.props.error}</p>
                    <div className="button">
                        <button type="submit" className="custom-button">Register</button>
                        <button type='button' className="custom-button form-right-button" formnovalidate="formnovalidate" onClick={this.props.cancel}>Cancel</button>
                    </div>
                </form>
            </div>
        )
    }
}

class Successregister extends Component {
    render() {
        return (
            <div id='successRegister'>
                <p>Your account has been created and you have been logged in!</p>
                <button type='button' className="custom-button" onClick={this.props.cancel} >Close</button>
            </div>
        )
    }
}