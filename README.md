# 🔰 SnapVerse Blog API

A TypeScript Node.js MongoDB with Mongoose and Express.js-based API designed to manage a blog. The API enables users to create blog, update blog and Delete Blog.

## Website Features

- User Can Search blogs by title or content
- User can Sort blogs by specific fields such as createdAt or title
- User can Defines the sorting order. Accepts values asc (ascending) or desc (descending).
- User can Filter blogs by author ID .

## [ Live Site URL](https://snap-verse-cyan.vercel.app/)

## Usages Technologies

- TypeScript
- Node JS
- Express JS
- MongoDB
- Mongoose

## 🛠️ Installation and Setup

Follow these steps to set up the project locally:

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd <project-folder>
   ```

2.Install the required dependencies:

```bash
npm install
```

3. Create a .env file in the root directory and configure the following environment variables:

```bash
PORT=5000
DATABASE_URL=<your-mongodb-url>
BCRYPT_SOLT_ROUND=12
JWT_ACCESS_TOKEN=<Token-Generate>
JWT_ACCESS_TOKEN_EXPIRES_IN=<Token-Expiries-Date>
```

4. Start the server:

```bash
 npm run start:dev
```

5. The API will be available at

```bash
http://localhost:5000
```

# 📚 API Endpoints

## USER CREATE Endpoints

1. Create a USER
   Method: POST

URL:

```bash
/api/auth/register
```

Description: Adds a new User to the database.

2. Login User
   Method: POST
   URL:

```bash
/api/auth/login
```

Description: Authenticates a user with their email and password and generates a JWT token.



## Blog Management

1. Create Blog
   Method: POST
   URL:

```bash
/api/blogs
```

Description: Allows a logged-in user to create a blog by providing a title and content.
Request Header:Authorization: Bearer <token>

2. Update Blog
   Method: PATCH
   URL:

```bash
/api/blogs/:id
```

Description: Allows a logged-in user to update their own blog by its ID.

Request Header:Authorization: Bearer <token>

3. Delete Blog
   Method: PATCH
   URL:

```bash
/api/blogs/:id
```

Description: Allows a logged-in user to delete their own blog by its ID.

Request Header:Authorization: Bearer <token>

4. Get All Blogs (Public)
   Method: GET
   URL:

```bash
/api/blogs
```
Description: Provides a public API to fetch all blogs with options for searching, sorting, and filtering.

Query Parameters:

- search: Search blogs by title or content (e.g., search=blogtitle).
- sortBy: Sort blogs by specific fields such as createdAt or title (e.g., sortBy=title).
- sortOrder: Defines the sorting order. Accepts values asc (ascending) or desc (descending). (e.g., sortOrder=desc).
- filter: Filter blogs by author ID (e.g., author=authorId).



## Admin Actions

1. Block User
   Method: PATCH
   URL:

```bash
/api/admin/users/:userId/block
```
Description: Allows an admin to block a user by updating the isBlocked property to true.

Request Header:Authorization: Bearer <admin_token>


2. Delete Blog
   Method: DELETE
   URL:

```bash
/api/admin/blogs/:id
```
Description: Allows an admin to delete any blog by its ID.

Request Header:Authorization: Bearer <admin_token>