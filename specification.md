# Architecture Specification

## SearchBox
### Properties
|  Name | Type   | Description |  
|---|---|---|
|   |   |   |
|   |   |   |
|   |   |   |   |
### Functionalities
|  Name |  Parameters |  Return | Behavior  |
|---|---|---|---|
|   |   |   |   |   
|   |   |   |   |   
|   |   |   |   |   |
### Connections
- Input:
- Output:

## LogIn
### Properties
### Properties
|  Name | Type   | Description |  
|---|---|---|
|   |   |   |
|   |   |   |
|   |   |   |   |
### Functionalities
|  Name |  Parameters |  Return | Behavior  |
|---|---|---|---|
|   |   |   |   |   
|   |   |   |   |   
|   |   |   |   |   |
### Connections
- Input:
- Output:

## SignUp
### Properties
|  Name | Type   | Description |  
|---|---|---|
|   |   |   |
|   |   |   |
|   |   |   |   |
### Functionalities
|  Name |  Parameters |  Return | Behavior  |
|---|---|---|---|
|   |   |   |   |   
|   |   |   |   |   
|   |   |   |   |   |
### Connections
- Input:
- Output:

## UploadDialog
### Properties
|  Name | Type   | Description |  
|---|---|---|
|   |   |   |
|   |   |   |
|   |   |   |   |
### Functionalities
|  Name |  Parameters |  Return | Behavior  |
|---|---|---|---|
|   |   |   |   |   
|   |   |   |   |   
|   |   |   |   |   |
### Connections
- Input:
- Output:

## Post
### Properties
|  Name | Type   | Description |  
|---|---|---|
|   |   |   |
|   |   |   |
|   |   |   |   |
### Functionalities
|  Name |  Parameters |  Return | Behavior  |
|---|---|---|---|
|   |   |   |   |   
|   |   |   |   |   
|   |   |   |   |   |
### Connections
- Input:
- Output:

## PostTile
### Properties
|  Name | Type   | Description |  
|---|---|---|
|   |   |   |
|   |   |   |
|   |   |   |   |
### Functionalities
|  Name |  Parameters |  Return | Behavior  |
|---|---|---|---|
|   |   |   |   |   
|   |   |   |   |   
|   |   |   |   |   |
### Connections
- Input:
- Output:

## Grid
### Properties
|  Name | Type   | Description |  
|---|---|---|
|   |   |   |
|   |   |   |
|   |   |   |   |
### Functionalities
|  Name |  Parameters |  Return | Behavior  |
|---|---|---|---|
|   |   |   |   |   
|   |   |   |   |   
|   |   |   |   |   |
### Connections
- Input:
- Output:

## NavBar
Locate at the top of the page at all times. Contains the SearchBox component at all times. When user is not signed in, it will contain the SignIn and SignUp button. When user is signed in, it will contain the user’s name and SignOut button.
### Properties
|  Name | Type   | Description |  
|---|---|---|
|  signedIn |  boolean | Keep tracks of user’s state (Signed in or not).  |

### Functionalities
|  Name |  Parameters |  Return | Behavior  |
|---|---|---|---|
|  handleClickSignIn()  |  none  | SignIn form in JSX.  |  Opens SignIn form. |   
| handleClickSignUp()  |  none |  SignUp form in JSX. |  Opens SignUp form. |   
| handleClickSignOut  | none  |  none | Signs user out by changing the state of signedIn.
  |   |
### Connections
- Input:
Connect to SearchBox, SignIn, and SignUp components.
Event handler. onClick for user input, user indicates choice of sign-in or sign-up.

- Output:
Form chosen by user's input. (SignUp or LogIn)

## PostMenu
Navigated by clicking on the dropdown button locate on the top right of an image. Contains options of copying an image link or report an image.

### Properties
|  Name | Type   | Description |  
|---|---|---|
| ImageURL  |  String | Link to the image from database.  |

### Functionalities
|  Name |  Parameters |  Return | Behavior  |
|---|---|---|---|
| copyImage()  | none  | none  |  Copy image URL to the user’s clipboard. Display success message to user.
 |   
|  handleClickReport() | none  | Report form in JSX.  |  Opens the report form. |   

### Connections
- Input:
Event handler. User choice of copy image or report image.

- Output:
Notify user when image is successfully copied to clipboard. Report form view.

## Report
Contains text box field for feedbacks and dropdown menu with options to describe the situation.

### Properties
|  Name | Type   | Description |  
|---|---|---|
| feedbackType  |  String |  Stores the chosen feedback type.
 |
|  description |  String | Stores the feedback description. Limit to 500 characters.
  |
### Functionalities
|  Name |  Parameters |  Return | Behavior  |
|---|---|---|---|
|  handleReport()
 |  String feedbackType, description
 | none
  | Stores user inputs to database. Display message indicate success.
  |   

### Connections
- Input:
User’s choice of feedback and feedback description.

- Output:
Output success message to user.

## Database
### Properties
|  Name | Type   | Description |  
|---|---|---|
|   |   |   |
|   |   |   |
|   |   |   |   |
### Functionalities
|  Name |  Parameters |  Return | Behavior  |
|---|---|---|---|
|   |   |   |   |   
|   |   |   |   |   
|   |   |   |   |   |
### Connections
- Input:
- Output:

## ContentManager
### Properties
|  Name | Type   | Description |  
|---|---|---|
|   |   |   |
|   |   |   |
|   |   |   |   |
### Functionalities
|  Name |  Parameters |  Return | Behavior  |
|---|---|---|---|
|   |   |   |   |   
|   |   |   |   |   
|   |   |   |   |   |
### Connections
- Input:
- Output:
