# courseology-fullstack
_nology final project : a fullstack app mocking a course catalogue

## Brief
Create a fullstack app, implementing a database and a user interface.<br>
The back-end will be built in Java with Spring Boot. The front-end will be built in Javascript using React.

## Current State
- On startup, the user is presented with a sign-up / sign-in page
- Sign-up creates a new user in the API, sign-in checks the given password against the API before updating the app to the user.

![splash](https://i.imgur.com/WtcduDU.png)

- The app allows for browsing of a course catalogue. Clicking on a course card will redirect to an overview page with full information.
- While browsing, the results are split between pages of ten results. The user can filter the results by course subject.
- Pagination and subject filtering is handled by the API.

![browse](https://i.imgur.com/hueLjK1.png)

- A regular user can access a profile page, where they can change their password or log out.
- If the user has admin priviledges, they can access the admin page.
- On the admin page, the user can delete, add and update courses in the database.
- They can also see a list of registered users, and update their details.

![admin](https://i.imgur.com/vJwdNSS.png)

In its current state, the app is not deployed. In order to run it locally, the back-end must be running in Spring, while the front-end must be run with NPM.

## Project structure - Initial Plan
![structure](https://i.imgur.com/ziY7UcU.png)
