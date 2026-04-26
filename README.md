# Shayri Backend API

Express.js backend server for the Shayri Poetry Application. This API serves poetry data, user management, and analytics endpoints.

## Features

- 📚 **Poetry Data Management**: Complete CRUD operations for shayri
- 👥 **User Management**: User profiles, roles, and permissions
- 📊 **Analytics Dashboard**: Comprehensive statistics and insights
- 🔍 **Search Functionality**: Full-text search for shayri and users
- 🛡️ **Security**: Rate limiting, CORS, helmet protection
- 📝 **Logging**: Morgan request logging
- 🚀 **Performance**: Compression and caching

## Installation

```bash
cd backend
npm install
```

## Environment Setup

Copy the environment file:
```bash
cp .env.example .env
```

Update the `.env` file with your configuration:
- `PORT`: Server port (default: 5000)
- `NODE_ENV`: Environment (development/production)
- `FRONTEND_URL`: Frontend URL for CORS

## Running the Server

Development mode with auto-restart:
```bash
npm run dev
```

Production mode:
```bash
npm start
```

## API Endpoints

### Health Check
- `GET /health` - Server health status

### Poetry Endpoints
- `GET /api/shayri` - Get all shayri (with filtering and pagination)
- `GET /api/shayri/:id` - Get shayri by ID
- `GET /api/shayri/category/:category` - Get shayri by category
- `GET /api/shayri/featured` - Get featured shayri
- `GET /api/shayri/search?q=query` - Search shayri
- `GET /api/shayri/stats` - Get poetry statistics

### User Endpoints
- `GET /api/users` - Get all users (with filtering and pagination)
- `GET /api/users/:id` - Get user by ID
- `GET /api/users/stats` - Get user statistics
- `GET /api/users/search?q=query` - Search users

### Analytics Endpoints
- `GET /api/analytics` - Get comprehensive analytics data

### Configuration Endpoints
- `GET /api/config/categories` - Get available poetry categories

## Query Parameters

### Poetry Filtering
```bash
GET /api/shayri?category=Romantic&author=Arij&featured=true&page=1&limit=10
```

### User Filtering
```bash
GET /api/users?role=admin&status=active&page=1&limit=10
```

## Response Format

All responses follow this format:

```json
{
  "success": true,
  "data": [...],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 50,
    "pages": 5
  }
}
```

Error responses:
```json
{
  "success": false,
  "error": "Error message",
  "message": "Detailed error information"
}
```

## Data Sources

The API reads data from:
- `/src/data/repositories/poetryData.js` - Poetry collection and repository
- `/src/data/repositories/userData.js` - User data and repository
- `/src/data/entities/poetryEntities.js` - Poetry categories and entities

## Security Features

- **Helmet**: Security headers
- **CORS**: Cross-origin resource sharing
- **Rate Limiting**: 100 requests per 15 minutes per IP
- **Compression**: Gzip compression for responses
- **Input Validation**: Query parameter validation

## Performance Features

- **Pagination**: Large datasets are paginated
- **Compression**: Response compression
- **Caching**: In-memory data caching
- **Filtering**: Server-side data filtering

## Development

The server automatically restarts on file changes when using `npm run dev`.

## Testing

```bash
npm test
```

## Deployment

1. Set `NODE_ENV=production`
2. Configure your `FRONTEND_URL`
3. Run `npm start`

## License

MIT License
