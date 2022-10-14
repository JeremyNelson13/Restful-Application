
# Game-Rater
This is a Restful application designed to allow users to do some basic 
functions to data. It is based off of a project from my NCSU bootcamp called Rest-Rant. 

## Technology used
- Express 
- React
- Express-React-Views
- React-Dom
- Bootstrap
- Dotenv 
- Routes tested with Postman

## Routes Table
| Method | Path | Purpose |
|---|---|---|
| GET | / | Home page |
| GET | /index | Index page |
| POST | /index | Create new entry |
| GET | /index/new | Form page to create new entry |
| GET | /index/:id | Detail view of entry |
| PUT | /index/:id | Update entry |
| GET | /index/:id/edit | Form page for existing entry |
| DELETE | /index/:id | Delete an entry |
| POST | /index/:id/comment | Create comment about specific entry |
| DELETE | /index/:id/comment/:commentId | Delete a comment by id |
| GET | * | Wildcard route. 404 page will match any undefined route |

## Data Structure
| Field Name | Data Type |
|---|---|
| Title | string |
| Genre | string |
| Console | string |
| Release Date | string (for convenience's sake these will store as strings) |
| Box Art | string(URL) |