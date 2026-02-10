# IgniteXT Backend Server

Real-time backend server with WebSocket support for the IgniteXT platform.

## Features

- **Real-time Updates**: WebSocket integration using Socket.IO for live data synchronization
- **SQLite Database**: Lightweight, file-based database for data persistence
- **RESTful API**: Clean API endpoints for all platform features
- **Data Storage**:
  - On-demand class requests
  - Class applications (student enrollments)
  - Mentor applications
  - Contact form submissions
  - Contributor applications

## Setup

### 1. Install Dependencies

```bash
cd backend
npm install
```

### 2. Environment Configuration

Create a `.env` file in the backend directory:

```bash
PORT=3001
CLIENT_URL=http://localhost:5173
```

### 3. Start the Server

**Development mode (with auto-reload):**
```bash
npm run dev
```

**Production mode:**
```bash
npm start
```

The server will start on `http://localhost:3001`

## API Endpoints

### Health Check
- `GET /api/health` - Server health status

### On-Demand Classes
- `GET /api/on-demand-requests` - Get all class requests
- `POST /api/on-demand-requests` - Create new class request
  ```json
  {
    "id": "req-1234567890",
    "topic": "Rust Systems Programming",
    "field": "Systems Engineering",
    "initiator": "John Doe",
    "type": "ONLINE"
  }
  ```

### Class Applications
- `POST /api/class-applications` - Apply to join a class
  ```json
  {
    "request_id": "req-1234567890",
    "name": "Jane Smith",
    "roll": "CS2021001",
    "github": "janesmith",
    "message": "Interested in learning Rust"
  }
  ```

### Mentor Applications
- `POST /api/mentor-applications` - Submit mentor application
  ```json
  {
    "role": "student",
    "full_name": "Alex Rivera",
    "github": "alexrivera",
    "branch": "Computer Science",
    "year": "3rd Year",
    "experience_years": 2,
    "teaching_count": 5,
    "project_url": "https://github.com/alexrivera/project",
    "motivation": "Want to help others learn"
  }
  ```

### Contact Form
- `POST /api/contact` - Submit contact message
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "subject": "Partnership Inquiry",
    "message": "I'd like to discuss collaboration opportunities"
  }
  ```

### Contributor Applications
- `POST /api/contributor-applications` - Submit contributor application
  ```json
  {
    "full_name": "Sarah Johnson",
    "github": "sarahjohnson",
    "engineering_path": "Backend Engineering",
    "motivation": "Want to contribute to open source"
  }
  ```

## WebSocket Events

### Client → Server
- `connection` - Client connects to server
- `disconnect` - Client disconnects

### Server → Client
- `new_request` - Broadcast when new class request is created
- `request_updated` - Broadcast when class request is updated (e.g., new student joins)

## Database Schema

### on_demand_requests
- `id` (TEXT, PRIMARY KEY)
- `topic` (TEXT)
- `field` (TEXT)
- `initiator` (TEXT)
- `count` (INTEGER)
- `type` (TEXT: 'ONLINE' | 'OFFLINE')
- `status` (TEXT: 'QUEUED' | 'SYNCING' | 'PREPARING_CLUSTER')
- `created_at` (DATETIME)

### class_applications
- `id` (INTEGER, PRIMARY KEY)
- `request_id` (TEXT, FOREIGN KEY)
- `name` (TEXT)
- `roll` (TEXT)
- `github` (TEXT)
- `message` (TEXT)
- `created_at` (DATETIME)

### mentor_applications
- `id` (INTEGER, PRIMARY KEY)
- `role` (TEXT: 'student' | 'teacher')
- `full_name` (TEXT)
- `github` (TEXT)
- `branch` (TEXT, nullable)
- `year` (TEXT, nullable)
- `room_number` (TEXT, nullable)
- `experience_years` (INTEGER)
- `teaching_count` (INTEGER)
- `project_url` (TEXT)
- `motivation` (TEXT)
- `created_at` (DATETIME)

### contact_submissions
- `id` (INTEGER, PRIMARY KEY)
- `name` (TEXT)
- `email` (TEXT)
- `subject` (TEXT, nullable)
- `message` (TEXT)
- `created_at` (DATETIME)

### contributor_applications
- `id` (INTEGER, PRIMARY KEY)
- `full_name` (TEXT)
- `github` (TEXT)
- `engineering_path` (TEXT)
- `motivation` (TEXT)
- `created_at` (DATETIME)

## Database File

The SQLite database file (`ignitext.db`) is automatically created in the `backend` directory on first run.

## CORS Configuration

The server is configured to accept requests from `http://localhost:5173` by default. Update the `CLIENT_URL` environment variable for production deployments.

## Production Deployment

For production deployment:

1. Set appropriate environment variables
2. Use a process manager like PM2:
   ```bash
   npm install -g pm2
   pm2 start server.js --name ignitext-backend
   ```
3. Configure reverse proxy (nginx/Apache) if needed
4. Set up SSL/TLS certificates
5. Update CORS settings for production domain

## Troubleshooting

- **Port already in use**: Change the `PORT` in `.env` file
- **Database locked**: Ensure only one server instance is running
- **WebSocket connection failed**: Check CORS settings and client URL configuration
