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

## PostMenu
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

## Report
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
