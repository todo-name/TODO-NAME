import React, { Component } from 'react';
import { Modal } from 'react-bootstrap'

export default class UploadDialog extends Component {
    submit = (event) => {
        let title = document.getElementById("title").value;
        let tags = document.getElementById("tags").value.split(/[ ,]+/);
        alert(tags);
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
                            <input type="text" id="title" name="title" className="form-control" required="required" maxlength="150" />
                        </div>
                        <div class="form-group">
                            <label htmlFor="upload_image">Upload Image</label><br />
                            <input type="file" id="upload_image" name="image" accept="image/*" />
                        </div>
                        <div class="form-group">
                            <label htmlFor="tags">Tags:</label><br />
                            <input type="tags" id="tags" name="tags"
                                className="form-control" maxlength="500"></input>
                        </div>
                        <p>{this.props.error}</p>
                        <div className="button">
                            <button type="submit" className="btn btn-primary" >Post</button>
                            <button type='button' className="btn btn-secondary form-right-button" formnovalidate="formnovalidate" onClick={this.props.cancel}>Cancel</button>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        )
    }
}