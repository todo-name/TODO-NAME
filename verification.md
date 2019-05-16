# Requirements to test: 

## SignUp form user input
* Verify that form will not submit if username, email, password, or passwordconf input fields are empty when the submit button is pressed (automated)
* Verify that username is unique when form is submitted (automated)
* Verify password and passwordconf are the same when form is submitted (automated)
* Automated test to verify a user account is entered into db after fields are all valid and submit button is pressed (automated)
* Verify the signup popup form disappears and main page appears after cancel is pressed or user clicks outside the popup (manual)
## SignIn form
* Verify that signin form will not submit if email/username and password fields are empty when the submit button is pressed (automated)
* Verify email/username matches a email/username in user database when submit button is pressed (automated)
* Verify password matches the password of the user account in database when submit button is pressed (automated) and signin form disappears as user is signed in successfully (manual)
* Verify the signin popup form disappears and main page appears after cancel is pressed or user clicks outside the popup (manual)
* Verify that when user successfully signs in, the signup and signin buttons are replaced with a logout button and a “Hello <username>” message (manual)
## Upload image user input
* Verify that submitting an image actually uploads it to the db (automated)
* Verify that the title submitted for a post cannot be more than 150 characters (manual)
## Post
* Verify that multiple posts can be requested from server (automated)
## Report image user input
* Verify that there cannot be more than 500 characters in the text area (manual)
* Verify that the character count matches the text area (manual)
* Verify that submitting reports are uploaded to the db (automated)
## Image full view
* Verify that liking a picture increases its amount of likes in db
* Verify that copied links can be followed back to the picture
* No automated tests
## Database
* Automate test for user input sanitization
* Automate test to ensure data can be inputted and retrieved
* Automate test to ensure all data is stored and retrieved in the same format
##Search
* Verify that when user inputs search term and clicks search icon, the image grid filters for pictures with tag or title that matches input (manual)
* Verify if user inputs search term that does not match any pictures, a message saying “No matches” appears in the grid area (manual)
* Verify if user clicks on search icon with no text input in search field, the grid area shows all uploaded pictures (manual)


For all of the requirements, how will your verifications be integrated into your process? Will you run automated tests after every build? Before every commit? When will you conduct inspections and who will be involved?
* Run automated test before every commit. It’s important to make sure every changes to the code still pass tests. 
* Conduct inspections on all requirements and have everyone on the team be involved. These inspections can be done when we combine our parts together to ensure components are integrated correctly.
