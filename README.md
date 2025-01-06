
# MERN Pull Request Management System

A comprehensive Pull Request Management System built using the **MERN stack** (MongoDB, Express, React, Node.js). This system allows users to create, review, approve, or reject pull requests. It supports both **parallel** and **sequential** approval workflows.

---

## Features

1. **Pull Request Management**:
   - Create, update, delete, and view pull requests.
   - Add detailed descriptions and assign approvers.

2. **Approval Workflow**:
   - Parallel approval: All approvers can approve independently.
   - Sequential approval: Approvers approve in order, stopping if rejected.

3. **Comment System**:
   - Add and view comments on pull requests.

4. **Role-Based Access Control**:
   - Users can perform actions based on their roles (requesters, reviewers, approvers).

5. **Real-Time Notifications**:
   - Receive updates on status changes using WebSockets.

6. **Secure Authentication**:
   - JWT-based authentication.
   - Password hashing with bcrypt.

---

## Tech Stack

- **Frontend**: React, React Router, Axios
- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT

---

## Installation

### Prerequisites

- Node.js and npm installed
- MongoDB installed or access to a cloud MongoDB instance (e.g., MongoDB Atlas)

### Setup Instructions

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/mern-pull-request-management.git
   cd mern-pull-request-management
   ```

2. **Install Dependencies**:

   - Backend:
     ```bash
     cd backend
     npm install
     ```

   - Frontend:
     ```bash
     cd ../frontend
     npm install
     ```

3. **Environment Variables**:

   - Create a `.env` file in the `backend` directory with the following variables:
     ```env
     MONGO_URI=your-mongodb-uri
     JWT_SECRET=your-jwt-secret
     PORT=5000
     ```

4. **Start the Application**:

   - Backend:
     ```bash
     cd backend
     npm start
     ```

   - Frontend:
     ```bash
     cd ../frontend
     npm start
     ```

5. **Access the Application**:
   - Frontend: Open [http://localhost:3000](http://localhost:3000)
   - Backend API: [http://localhost:5000/api](http://localhost:5000/api)

---

## Folder Structure

### Backend
```
backend/
├── models/            # Mongoose schemas
├── routes/            # API routes
├── config/            # Database and environment configuration
├── index.js          # Entry point for the backend
```

### Frontend
```
frontend/
├── src/
│   ├── components/    # React components
│   ├── App.js         # Main app component
│   ├── index.js       # Entry point for the frontend
```

---

## API Endpoints

### Pull Requests

| Method | Endpoint                     | Description                      |
|--------|-------------------------------|----------------------------------|
| GET    | `/api/pull-requests`         | Get all pull requests           |
| GET    | `/api/pull-requests/:id`     | Get a specific pull request     |
| POST   | `/api/pull-requests`         | Create a new pull request       |
| PUT    | `/api/pull-requests/:id`     | Update a pull request           |
| DELETE | `/api/pull-requests/:id`     | Delete a pull request           |

### Comments

| Method | Endpoint                           | Description                       |
|--------|-----------------------------------|-----------------------------------|
| POST   | `/api/pull-requests/:id/comments` | Add a comment to a pull request  |
| GET    | `/api/pull-requests/:id/comments` | Get all comments for a pull request |

### Approvals

| Method | Endpoint                           | Description                       |
|--------|-----------------------------------|-----------------------------------|
| POST   | `/api/pull-requests/:id/approvals`| Add an approval decision          |
| GET    | `/api/pull-requests/:id/approvals`| Get all approvals for a pull request|

---

## Screenshots

### 1. Dashboard
A list of all pull requests with their status.

### 2. Create Pull Request
A form for users to submit a pull request with approvers.

### 3. Approval Page
Interface for approvers to review and make decisions.

---

## Future Enhancements

1. Add user registration and role assignment.
2. Implement full test coverage for both backend and frontend.
3. Add analytics for tracking pull request activity.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
```
