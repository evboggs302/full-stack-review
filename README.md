# Messaging App.com/evan?name=evan

## FRONTEND

### dependencies

- create-react-app includes => .gitnignore, npm init -y, and basic src folder structure
- axios
- react-redux
- redux
- redux-promise-middleware
- react-router-dom (BrowserRouter)
- react-icons (/fa)
- http-proxy-middleware

### file stucture

- src/
  - components/
    - Header/
      - header.js
      - header.css
    - Profile/
      - profile.js
      - progile.css
    - MessageDisplay/
      - createMessage.js
      - createMessage.css
      - messageDisplay.js
      - messageDisplay.css
  - App.js
  - App.css
  - index.js
  - reset.css
  - ducks/
    - store.js
    - reducer.js

### routes

- home => /
- profile => /profile
- message => /messages
- createMessage => /create-message
- catchAll => '\*' ('page not found')

### redux state

```js
const initialState = {
  user: null,
  messages: []
};
```

## BACKEND

### dependencies

- express
- massive
- .env
- express-session
- bcrypt

### server file structure

- server/
  - index.js
  - controller/
    - messageController.js
    - authController.js (logging in, user data, bcrypt)

### endpoint routes

- **auth**

  - login => /api/login
  - register => /api/register
  - userInfo => /api/user

- **message**
  - getAll => /api/messages
  - postMessage => /api/messages
  - putMessage => /api/messages/:id
  - deleteMessage => /api/messages/:id

### DataBase

- users

```sql
create table users (
    user_id serial primary key,
    username varchar not null,
    email text not null,
    password text not null
)
```

- message

```sql
create table messages (
    message_id serial,
    message text not null,
    user_id int not null references users(user_id),
    time_entered date default now
)
```

- .env

```text
SESSION_SECRET=
SERVER_PORT=
CONNECTION_STRING=
```
