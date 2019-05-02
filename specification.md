# Architecture Specification

## SearchBox
### Description
The SearchBox component filters for pictures based on tags and titles
### Properties
|  Name | Type   | Description |  
|---|---|---|
| query  |  TextField |  Search term |
|  searchField |  TextField | Area to type query  |
|   |   |   |   |
### Functionalities
|  Name |  Parameters |  Return | Behavior  |
|---|---|---|---|
|  search | query  | Pictures that match query  | The query is matched with tags and titles to narrow down results  |   
|   |   |   |   |   
|   |   |   |   |   |
### Connections
- Input: 
- Output:

## LogIn
### Description
The LogIn component allows users to log in to their account.
### Properties
|  Name | Type   | Description |  
|---|---|---|
|  username_email | TextField  | User inputs a username   |
|   password| TextField  | User inputs password   |
|   |   |   |   |
### Functionalities
|  Name |  Parameters |  Return | Behavior  |
|---|---|---|---|
| usernameValidation  | username/email  |   |   |   
|passwordValidation   |password   |   |   |   
| signIn  |   |   |   |   |
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
Responsible for the storing and retrieving of data, interacts exclusively with the Content Management component, taking requests from and returning data to the service.
### Properties
|  Name | Type   | Description |  
|---|---|---|
|  Users | Database of User objects  | Stores information about the users for login, association with posts, and tagging  |
| Posts  |  Database of Post objects | Stores information about posts for sharing, analysis, and accountability  |  |
### Functionalities
|  Name |  Parameters |  Return | Behavior  |
|---|---|---|---|
| Add  |  Data | Success or failure  | Stores data in database and returns if successful or not  |   
| Get | Data_id  | Data or error  | Retrieves data from database based on data id  |   
| Delete  | Data_id  | Success or failure  | Deletes data from database based on data id  |
| Update  | Data_id, attribute, value of attribute | Updated data or error  | Updates the value of an attribute based on data id |
| GetAll  | Attribute, value of attribute  | Set of Data  | Retrieves set of data from database where the value matches an attribute |
| GetRecentPosts  | null  | Set of most recent Posts  | Predefined GetAll function, allows for the retrieval of the most recently created Posts |  |
### Connections
- Input: ContentManager
- Output: ContentManager

## ContentManager
Handles the backend operations of managing proper submission and user flow. Provides the core connection between front-end components and the databases, transferring data from piece to piece
### Properties
|  Name | Type   | Description |  
|---|---|---|
| UserDbConnection  | Database Connection  | Maintains a connection to the user database to perform database operations  |
| PostDbConnection  | Database Connection  | Maintains a connection to the post database to perform database operations  |
| User  | User Object  | Keeps track of the current user, logged in or otherwise  |   |
### Functionalities
|  Name |  Parameters |  Return | Behavior  |
|---|---|---|---|
| Login  | Email / Username, Password  | Success or failure  | Takes user inputted email / username and password and logs them in if the information is correct  |   
| SignUp  | Email, Username, Password  | Success or failure  | Takes user inputted email, username, and password, and creates a user account for them, logs them in  |   
| Post  | Post Data  | Success or failure  | Takes user inputted post data and creates a Post for them, saving it in the database |
| RetrievePosts  | null  | List of Post Objects  |  Retrieves list of most recent posts from database and returns them for displaying |
| Report  | Post Data  | Success or failure  | Takes post data of a user-reported post and updates the database to tag the post in the database for review  |   |
### Connections
- Input: All front-end components, Database
- Output: Database, All front-end components
