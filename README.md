# Articles

This page was built with **React**, **React-Redux** for the frontend and **Express.js & Node.js** for backend with **Mongodb** as the database.

## Motive

The intention of building this project was part of a process to learn react-redux, that is to pass data and manage state accross different pages within an application. This enable users to interact with the page with all CRUD operations, that create posts, read, update, or delete posts they created.

## Tech Stack

![React.js](https://img.shields.io/badge/React.js-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![React-Redux](https://img.shields.io/badge/React--Redux-764ABC?style=for-the-badge&logo=redux&logoColor=white)
![JWT](https://img.shields.io/badge/JSON_Web_Token-000000?style=for-the-badge&logo=json-web-tokens&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![React Google Login](https://img.shields.io/badge/React_Google_Login-4285F4?style=for-the-badge&logo=google&logoColor=white)
![Material UI](https://img.shields.io/badge/Material_UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)
![Moment.js](https://img.shields.io/badge/Moment.js-8B5CF6?style=for-the-badge&logo=moment.js&logoColor=white)

## Features

- User authentication & authorization using JWT token
- Real-time state updates made possible using redux.
- MongoDB integration as database source
- React google login integration
- moment.js for posts dates and time formats
- Pagination support to improve performance

## Setup Steps

1. Clone repository
2. cd into either client or server directory first
3. `npm install` or `npm install --legacy-peer-deps` to ignore peer dependency flags
4. configure `.env or .env.local` locally
5. connect mongoose before running the server
6. voilà!

### Setup Environment Variables (.env.loca)

```
MONGODB_URL=
PORT=
```

## Status

All current features funtional, user can create, update, edit and delete post.

### Todo

- [ ] Implement comments UI under Posts
- [ ] Testing
- [ ] Restructure dashboard and postcard

![Posts page](src/images/readMe.png)
