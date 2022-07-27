# courseology-fullstack
_nology final project : a fullstack app mocking a course catalogue

## Brief
Create a fullstack app, implementing a database and a user interface.<br>
The back-end will be built in Java with Spring Boot. The front-end will be built in Javascript using React.

## Current State
- The app allows for browsing of a course catalogue. Clicking on a course card will redirect to an overview page with full information.
- While browsing, the results are split between pages of ten results. The user can filter the results by course subject.
- Pagination and subject filtering is handled by the API.

![browse](https://i.imgur.com/F390uWP.png)

- On the admin page, the user can delete, add and update courses in the database.<br>

![admin](https://i.imgur.com/YdOkC5D.png)

In its current state, the app is not deployed. In order to run it locally, the back-end must be running in Spring, while the front-end must be run with NPM.

## Project structure - Initial Plan
![structure](https://i.imgur.com/ziY7UcU.png)
