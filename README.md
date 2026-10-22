# COMP229.004-F2026-MidTerm-301439216

Book Store backend API (Node.js, Express, MongoDB Atlas) for the COMP229 midterm.

## Run locally

1. `npm install`
2. Create a `.env` file with `DB_USERNAME`, `DB_PASSWORD` and `DB_CLUSTER`.
3. `npm start` and open http://localhost:3000/

## Endpoints

| Method | URL | Action |
|---|---|---|
| GET | /api/books | get all books |
| GET | /api/books/:id | get a book by id |
| POST | /api/books | add new book |
| PUT | /api/books/:id | update book by id |
| DELETE | /api/books/:id | remove book by id |
| GET | /api/users | get all users |
| GET | /api/users/:id | get user by id |
| POST | /api/users | add new user |
| PUT | /api/users/:id | update user by id |
| DELETE | /api/users/:id | remove user by id |
