import React, { Component } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import UploadDialog from './UploadDialog';
import { Modal } from 'react-bootstrap'

export default class NavBar extends Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            errorMessage: '',
        };
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
            upload: false
        })
    }

    uploadClick = (event) => {
        this.setState({ upload: true })
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

    render() {
        let button;

        if (this.props.login == false) {
            button =
                <div class="form-inline form-right">
                    <button id="signinButton" className="custom-button btn btn-primary" onClick={this.signinClick}>Sign In</button>
                    <button id="signupButton" className="custom-button btn btn-outline-secondary" onClick={this.signupClick}>Sign Up</button>
                </div>
        } else {
            button =
                <div class="form-inline form-right">
                    <button id="uploadButton" className="custom-button btn btn-primary" onClick={this.uploadClick}>Upload</button>
                    <button id="signoutButton" className="custom-button btn btn-outline-secondary" onClick={this.signoutClick}>Sign Out</button>
                </div>
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

                <Signinform signinform={this.state.signinform} cancel={this.cancelClick} handleSignin={this.handleSignin} error={this.state.errorMessage} />

                <Signupform signupform={this.state.signupform} cancel={this.cancelClick} handleRegister={this.handleRegister} error={this.state.errorMessage} />

                <Successregister cancel={this.cancelClick} registersuccess={this.state.registersuccess} />

                <UploadDialog cancel={this.cancelClick} upload={this.state.upload} auth={this.props.auth} />
            </div >
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
                        <div class="form-group">
                            <label htmlFor="email">Email:</label><br />
                            <input type="email" id="email" className="form-control" name="email" required="required" placeholder="Enter email"></input>
                        </div>
                        <div class="form-group">
                            <label htmlFor="password">Password:</label><br />
                            <input type="password" id="password" className="form-control" name="password" required="required" placeholder="Password"></input>
                        </div>
                        <p>{this.props.error}</p>
                        <div className="button">
                            <button type="submit" class="btn btn-primary">Sign In</button>
                            <button type='button' class="btn btn-secondary form-right-button" formnovalidate="formnovalidate" onClick={this.props.cancel}>Cancel</button>
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
                        <div class="form-group">
                            <label htmlFor="email">Email:</label><br />
                            <input type="email" id="email" className="form-control" name="email" required="required" placeholder="Enter email" />
                        </div>
                        <div class="form-group">
                            <label htmlFor="password">Password:</label><br />
                            <input type="password" id="password" className="form-control" pattern=".{6,}" title="Six or more characters" required="required"
                                placeholder="Password"></input>
                        </div>
                        <div class="form-group">
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
                    <button type='button' class="btn btn-primary" formnovalidate="formnovalidate" onClick={this.props.cancel}>Cancel</button>
                </Modal.Body>
            </Modal>
        )
    }
}