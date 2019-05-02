# Architecture Specification

## SearchBox
### Description
The SearchBox component filters for pictures based on tags and titles
### Properties
|  Name | Type   | Description |  
|---|---|---|
| query  |  String |  Search term |
|  searchField |  TextField | Area to type query  |
### Functionalities
|  Name |  Parameters |  Return | Behavior  |
|---|---|---|---|
|  search | query  | Pictures that match query  | The query is matched with tags and titles to narrow down results  |   
### Connections
- Input:
User's search input.
- Output:
Re-renders landing page in accordance to the search.

## LogIn
### Description
The LogIn component allows users to log in to their account.
### Properties
|  Name | Type   | Description |  
|---|---|---|
|  username_email | TextField  | User inputs a username   |
|   password| TextField  | User inputs password   |
### Functionalities
|  Name |  Parameters |  Return | Behavior  |
|---|---|---|---|
| usernameValidation  | username/email  | Error message if given an invalid username/email  | Check if username/email is associated with an account  |   
|passwordValidation   |password   | Error message if given invalid password  | Check if password is correct for given username/email  |   
| signIn  | username/email and password  | Error message if any field is blank  | Signs user into their account  |   |
### Connections
- Input: User's username and password
- Output: Message on upper corner of main page signifying user has signed in

## SignUp
### Description
 The Signup component allows the user to create an account. It takes in a username, email, password, and password confirmation to create an account. The SignUp page overlays the main home page when viewed.
### Properties
|  Name | Type   | Description |  
|---|---|---|
|Username   | TextField  | Unique username to identify user  |
|Email   |  TextField  |Email to notify user that account was made   |
|Password   | TextField   |  Password for user login |   
| Password confirmation  | TextField   |  Ensure password is what user intend it to be |   |
### Functionalities
|  Name |  Parameters |  Return | Behavior  |
|---|---|---|---|
|  usernameValidation | username  | Error message if not validated  | Checks if username is unique and has at least one character  |   
|  emailValidation | email  |  Error message if not validated | Checks if email is in proper format based on regex  |   
|  password Validation | password  |  Error message if not validated | Checks if password has at least 6 characters  |   
| passwordConfValidation  | password  |  Error message if not validated | Checks if confirmation is the same as password  |   
| submit  | Above 4 parameters  | Error message if field inputs are incorrect or blank  |  Creates a new user with given information  |   
### Connections
- Input: Takes in user username, email, password and password confirmation.
- Output: Creates new user account.

## UploadDialog
### Description
The UploadDialog is a dialog component that allows the user to enter a title, tags, select an image, and then upload it. It communicates with the screen to be shown or hidden from view.
### Properties
|  Name | Type   | Description |  
|---|---|---|
|titleField|TextField|Accepts text for title|
|imageSelector|FileSelector|Allows user to select image|
|tagField|TextField|Allows entry of multiple tags|
### Functionalities
|  Name |  Parameters |  Return | Behavior  |
|---|---|---|---|
|show| none  |void|Display dialog in center of screen.|   
|hide|  none |void|Hides dialog.|   
|uploadPost|title, tags, image|True is upload successful, false otherwise|Takes data from user input fields and uploads it to database. Uses callback to track success of request.|   |
### Connections
- Communicates with the screen to be shown or hidden from view

## Post
### Description
The Post component represents a single image, its title, like count, and tag information. It does not contain UI information, but provides information to be displayed by UI components.
### Properties
|  Name | Type   | Description |  
|---|---|---|
|imagePath|String   |The path of the image to display   |
|title|String   |The title of the post   |
|likeCount   |Integer   |The number of likes for a post   |
|tags   |Array   |An array of tags relevant to the post   |
### Functionalities
|  Name |  Parameters |  Return | Behavior  |
|---|---|---|---|
|Post   |String, String, Integer, Array |none|Constructor. Takes in image path, title, like count, and tags and sets them.   |   
### Connections
- Acts as a pure data storage objects for UI components to access and display.

## PostTile
### Description
The PostTile component is the UI representation of a Post. It displays title, image, like button, and like count. The button has an event listener attached that responds to click events to update like count and fill in the like button.
### Properties
|  Name | Type   | Description |  
|---|---|---|
|titleLabel|TextLabel   |Text label that show the title of the post   |
|image|Image   |The image of the post to be displayed   |
|likeButton|TextField   |Button that allows the user to "like" a post   |   |
|likeLabel|TextLabel   |Text label that show the number of likes on a post   |   |
|post|Post   |Post data object   |   |
### Functionalities
|  Name |  Parameters |  Return | Behavior  |
|---|---|---|---|
|PostTile |Post   | none  |Constructor. Takes the provided Post object and fills UI components with information from the Post object.

### Connections
- Communicates with the screen to be displayed, and with the Post class to retrieve data.

## Grid
### Description
The Grid is a component that loads and organizes a group of PostTiles in a rectangular grid layout.
### Properties
|  Name | Type   | Description |  
|---|---|---|
|tiles|List   |A list of PostTiles to be displayed as a grid.|
|width|Integer   |The width of the grid; how many tiles to display horizontally.   |
|height   |Integer   |The height of the grid; how many tiles to display vertically.   |   |
### Functionalities
|  Name |  Parameters |  Return | Behavior  |
|---|---|---|---|
|Grid   |List<Post>   | none  |Constructor. Takes a list of post, generates PostTiles, and displays them in a grid.   |   
|loadPosts   |List<Post>   |none   |Generates and adds PostTiles to the grid based on the provided list of Posts.   |   
### Connections
- Communicates with the screen to be displayed. Reads information from Post objectiles and creates PostTile components.

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
| handleClickSignOut  | none  |  none | Signs user out by changing the state of signedIn.|
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
| copyImage()  | none  | none  |  Copy image URL to the user’s clipboard. Display success message to user.|   
|  handleClickReport() | none  | Report form in JSX.  |  Opens the report form.|   

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
| feedbackType  |  String |  Stores the chosen feedback type. |
|  description |  String | Stores the feedback description. Limit to 500 characters. |
### Functionalities
|  Name |  Parameters |  Return | Behavior  |
|---|---|---|---|
|  handleReport() |  String feedbackType, description | none | Stores user inputs to database. Display message indicate success.|   

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
