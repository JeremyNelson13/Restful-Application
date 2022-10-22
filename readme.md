
# Game-Rater
This is a Restful application designed to allow users to do some basic 
functions to data. It is based off of a project from my NCSU bootcamp called Rest-Rant. This application can be used
to track video games you like and leave reviews. **It is currently not deployed, as it is being used as a base to learn other frameworks**. As these are finished I will add links to their specific repositories or deployments here, to allow people to check different implementations of this concept in different tech stacks.

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
| Author | string, name of comment writer, defaults to anonymous |
| rave | boolean, either negative or positive defaults to false |
| stars | number, 1-5 star rating inc 0.5, required no default |
| content | string, written content of comment, defaults to empty string |
