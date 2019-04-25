# Requirements
## Main Page
- All popups mentioned hereafter will appear as a new window within the same browser tab.
- All popups mention hereafter will be closable by clicking outside the popup
- The upload button will be on the top right, below the row containing the sign in button, sign up button, and search box.
- The upload button will be clickable when the user is logged in, and disabled (greyed out) when the user isn’t
- Clicking the upload button will open the upload image popup
- The sign up button will say “Sign Up” when the user isn’t logged in, and “Sign Out” when the user is
- Clicking the Sign In button will open the sign in popup
- The sign in button, sign up button, and search box will appear in a row at the top of the screen.
- Clicking the search bar will allow typing of plaintext search terms and tags preceded by hashtags.
- Clicking the search icon, or hitting enter when the focus is on the search box, will trigger filtering of the image grid based on search terms. If no search terms are provided then no filtering will occur.
- The image grid will display equally sized image tiles in a grid, below the row containing the search bar and below the upload button.
- The size of each image in the image grid will scale up based on browser size to a maximum size, and then extra browser size will be used to add more images to the width or height of the grid.
- The height of the image grid will fill the extent of the browser.
- Scrolling down on the page will load more images into the grid, with the same dimensions as the previous images.
- Each tile in the image grid will have a title above it, a heart button in the top left of the image, and an ellipsis button in the top right of the image.
- The heart button for each tile will be filled in when the user clicks on it.
The ellipsis button will expand to show a menu with copy and report options.
- The copy option, when clicked, will copy the link of the image to the user’s clipboard.
The report option, when clicked, will open the report image dialog.


## Upload Image
- Input field “Title” is optional. Limit is 150 characters.
- The upload image button will open “Finder” where user can navigate through their directories to find the right image to upload.  (how does this work?)
- Only one image is allowed.  
- Once image is picked, the user will see the image display and a “Change Image” button will be next to the image if user decide to change to another image.
- There is a “X” on the top right corner if user want to cancel uploading image. A warning will pop up where user can choose to stay or exit and discard changes.
- User must be able to add “tags/descriptions” with maximum of 500 characters.
- User must be able to use “#” to indicate tags.
- User must be able to use emoji.
- User must be able to click upload button and see their image at the top of the main page.


## Click on Image
- Images must load in full screen view when clicked on from the main page.
- Images must scale to their native aspect ratios while still staying within the width of the page.
- The full screen view must be scrollable if the native height of the image extends beyond the size of the browser.
- Image max size will be determined by a max height proportional to the browser size.
- The ellipsis in the top right corner must appear in the corner and be clickable for all users.
- The like button must appear in the top left corner for logged in users only (what happens if they aren’t logged in).
- Clicking the ellipsis must make the additional options menu appear to the right side of it.
- Clicking the copy button must copy the url for the image’s post to the user’s browser clipboard.
- Clicking the report button must launch the Report Image popup and make the additional options menu disappear.

## Report Image
- Users must be able to type a report of up to 500 characters in the text area.
- The character counter in the bottom left corner must respond in real time to the amount of characters in the text area.
- Characters written beyond the 500 character limit must not appear within the text area.
- Clicking the “x” in the top right corner must close the popup.
- Text in the text area must not persist if the “x” was clicked after text had been written.
- Closing the popup must return users to their original position.
- Clicking the report button must communicate the contents of the text area with content moderators.
- Clicking the report button must provide users visual feedback that their report was submitted.
- Clicking the report button must close the popup.

## Sign Up / Sign In / Sign Out
- The "Sign In" button is displayed on the top of the screen to the right of the search bar when the user is signed out.
- The signup button is displayed on the top right of the screen to the right of the "Sign In" button when the user is signed out.
- Upon clicking the signup button, a popup screen that overlays the main screen is shown with 4 input text fields labelled username, email, password, and confirm password aligned vertically.
- At the bottom of the signup screen are two buttons located side by side with each other named cancel and submit.
- To exit the signup screen and return to the main page, either click on the cancel button or click anywhere outside the popup screen.
- If submit button is clicked on and any of the 4 text fields are missing user input, an error message is shown between the bottom of the last text form and the buttons that says “There are incomplete required fields.”
- If user submits a username that has been taken, an error message will show right above the username textarea that says “Username taken”
- If user submits a email that does not match email validation regex expression, an error message will show right above the email textarea that says “Invalid email”.
- If user submits a password that has fewer than 6 characters, an error message will show right above the password textarea that says “Invalid password”
- If user submits a password confirmation that does not match the password input, an error message will show right above the password confirmation textarea that says “Invalid password confirmation”.
- If there are no errors in all input forms and submit is clicked on, a new user is created and user is redirected to the sign-in page.
- Sign-in page is a popup screen that overlays the main page.
- The sign in page is accessed by clicking on the sign in button or from being redirected from the signup page
- The sign in page must have 2 textareas aligned vertically with the first one labelled username/email and the second one labelled password.
- The bottom of the sign in page has 2 buttons aligned horizontally named Cancel and Submit.
- Upon pressing the Cancel button or clicking outside the sign in page, the user will exit the sign in page and return to the main page.
- When the user clicks on submit and username/email is invalid, a message will show above the username/email textarea saying “Invalid username/email”.
- When the user clicks on submit and username/email is valid but password is invalid, a message will show above the password textarea saying “Invalid password”.
- When the user clicks on submit and the inputted username/email and password are valid, the user is signed in and redirected to the main page and a message saying “Hello {username}” is displayed on the top right of the page.
- A signed in user is able to post and like pictures.
- When the user is signed in, the sign in and sign up button disappear and a sign out button appears to the right of the search bar.
- When the user clicks on the sign out button, the user is signed out and the message “Hello {username}” disappears and the sign in and sign up appear in their original positions.
- A signed out user is unable to post and like pictures.

## Mobile Look / Responsiveness
- On screens with width less than 992px, picture frames will be aligned in rows of 3 with all frames centered on the page horizontally, and all pictures evenly spaced from one another.
- On screens with width greater than or equal to 1200px (large desktops), more pictures will be added to the rows based on the width and will stay evenly spaced from each other and be centered on the page horizontally.
- All pictures will maintain a 1:1 aspect ratio as the browser is resized.
- The search bar, sign in/up/out, and upload buttons must be located at the very top of the page and centered horizontally no matter the browser size.
