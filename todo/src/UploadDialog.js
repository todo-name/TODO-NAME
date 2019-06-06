import React, { Component } from 'react';
import { Modal } from 'react-bootstrap'
import firebaseService from './Firebase/firebaseService';

export default class UploadDialog extends Component {
    submit = (event) => {
        let title = document.getElementById("title").value;
        let tags = document.getElementById("tags").value.split(/[ ,]+/);
        let image = document.getElementById("upload_image").files[0];

        var apiUrl = 'https://api.imgur.com/3/image';
        var apiKey = '987f385fd491e1d';

        var xhr = new XMLHttpRequest();
        xhr.open("POST", apiUrl);
        xhr.setRequestHeader("Authorization", "Client-ID " + apiKey);
        xhr.onload = function() {
        	console.log(xhr.response);
        	if(xhr.response.status == 200){
        		let imgurData = xhr.responseText.data;
        		let data = {
        			pid: "",
        			desc: title,
        			flagged: false,
        			likes: 0,
        			time_posted: new Date(),
        			title: "",
        			uid: "",
        			url: imgurData.link
        		};
        		this.fb.add(data);
        	}
        };
        var data = new FormData();
        data.append("image", image);
        xhr.send(data);
    }

    test = (event) => {
  

    }

    constructor(){
    	super();
    	this.fb = new firebaseService();
    }

    render() {
        return (
            <Modal show={this.props.upload} onHide={this.props.cancel}>
                <Modal.Header closeButton>
                    <Modal.Title>Upload Picture</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={this.submit}>
                        <div class="form-group">
                            <label htmlFor="title">Title</label><br />
                            <input type="text" id="title" name="title" className="form-control" required="required" maxLength="150" />
                        </div>
                        <div class="form-group">
                            <label htmlFor="upload_image">Upload Image</label><br />
                            <input type="file" id="upload_image" name="image" accept="image/*" onChange={this.test} />
                        </div>
                        <div class="form-group">
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