import React, { Component } from 'react';

export default class UploadDialog extends Component {
	submit = (event) => {
		let title = document.getElementById("title").value;
		let tags = document.getElementById("tags").value.split(/[ ,]+/);
		alert(tags);
	}


	render() {
        return (
            <div id='signinForm'>
                <form onSubmit={this.submit}>
                    <div>
                        <label htmlFor="title">Title</label><br />
                        <input type="text" id="title" className="text-input" name="title" required="required" maxlength="150"/>
                    </div>
                    <div>
                    	<label htmlFor="upload_image">Upload Image</label><br />
                    	<input type="file" id="upload_image" name="image" accept="image/*" />
                    </div>
                    <div>
                        <label htmlFor="tags">Tags:</label><br />
                        <input type="tags" id="tags" name="tags"
                            className="text-input" maxlength="500"></input>
                    </div>
                    <p>{this.props.error}</p>
                    <div className="button">
                        <button type="submit" className="custom-button" >Post</button>
                        <button type='button' className="custom-button" formnovalidate="formnovalidate" onClick={this.props.cancel}>Cancel</button>
                    </div>
                </form>
            </div>
        )
    }
}