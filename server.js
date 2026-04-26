/**
 * Shayri Backend API Server
 * Express.js server for serving poetry data and user management
 * @author Senior Development Team
 * @version 1.0.0
 */

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const compression = require('compression');
const rateLimit = require('express-rate-limit');
const path = require('path');
require('dotenv').config();

// Import data repositories
const { PoetryRepository, POETRY_CATEGORIES } = require('./data/poetryData.js');
const { UserRepository, MOCK_USERS } = require('./data/userData.js');

// ====================
// EXPRESS APP SETUP
// ====================
const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(helmet());
app.use(compression());
app.use(morgan('combined'));
app.use(cors());

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later.'
});
app.use('/api/', limiter);

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// ====================
// API ROUTES
// ====================

// Health check
app.get('/health', (req, res) => {
  res.json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    environment: process.env.NODE_ENV || 'development'
  });
});

// ====================
// POETRY ENDPOINTS
// ====================

// Get all shayri with optional filtering
app.get('/api/shayri', (req, res) => {
  try {
    const { category, author, featured, page = 1, limit = 10 } = req.query;
    
    let filtered = PoetryRepository.getAllShayri({
      category: category || undefined,
      author: author || undefined,
      featured: featured === 'true'
    });

    // Pagination
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + parseInt(limit);
    const paginatedResults = filtered.slice(startIndex, endIndex);

    res.json({
      success: true,
      data: paginatedResults,
      pagination: {
        page: parseInt(page),
        limit: parseInt(limit),
        total: filtered.length,
        pages: Math.ceil(filtered.length / limit)
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to fetch shayri data',
      message: error.message
    });
  }
});

// Get shayri by ID
app.get('/api/shayri/:id', (req, res) => {
  try {
    const { id } = req.params;
    const shayri = PoetryRepository.getShayriById(id);
    
    if (!shayri) {
      return res.status(404).json({
        success: false,
        error: 'Shayri not found'
      });
    }

    res.json({
      success: true,
      data: shayri
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to fetch shayri',
      message: error.message
    });
  }
});

// Get shayri by category
app.get('/api/shayri/category/:category', (req, res) => {
  try {
    const { category } = req.params;
    const shayri = PoetryRepository.getShayriByCategory(category);
    
    res.json({
      success: true,
      data: shayri,
      count: shayri.length
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to fetch shayri by category',
      message: error.message
    });
  }
});

// Get featured shayri
app.get('/api/shayri/featured', (req, res) => {
  try {
    const featured = PoetryRepository.getFeaturedShayri();
    
    res.json({
      success: true,
      data: featured,
      count: featured.length
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to fetch featured shayri',
      message: error.message
    });
  }
});

// Search shayri
app.get('/api/shayri/search', (req, res) => {
  try {
    const { q: query } = req.query;
    
    if (!query) {
      return res.status(400).json({
        success: false,
        error: 'Search query is required'
      });
    }

    const results = PoetryRepository.searchShayri(query);
    
    res.json({
      success: true,
      data: results,
      count: results.length,
      query
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Search failed',
      message: error.message
    });
  }
});

// Get poetry statistics
app.get('/api/shayri/stats', (req, res) => {
  try {
    const stats = PoetryRepository.getStatistics();
    
    res.json({
      success: true,
      data: stats
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to fetch statistics',
      message: error.message
    });
  }
});

// ====================
// USER ENDPOINTS
// ====================

// Get all users
app.get('/api/users', (req, res) => {
  try {
    const { role, status, page = 1, limit = 10 } = req.query;
    
    let users = UserRepository.getAllUsers();
    
    // Filter by role
    if (role) {
      users = users.filter(user => user.role === role);
    }
    
    // Filter by status
    if (status) {
      users = users.filter(user => user.status === status);
    }

    // Pagination
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + parseInt(limit);
    const paginatedResults = users.slice(startIndex, endIndex);

    res.json({
      success: true,
      data: paginatedResults,
      pagination: {
        page: parseInt(page),
        limit: parseInt(limit),
        total: users.length,
        pages: Math.ceil(users.length / limit)
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to fetch users',
      message: error.message
    });
  }
});

// Get user statistics
app.get('/api/users/stats', (req, res) => {
  try {
    const stats = UserRepository.getUserStats();
    
    res.json({
      success: true,
      data: stats
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to fetch user statistics',
      message: error.message
    });
  }
});

// Get user by ID
app.get('/api/users/:id', (req, res) => {
  try {
    const { id } = req.params;
    const user = UserRepository.getUserById(parseInt(id));
    
    if (!user) {
      return res.status(404).json({
        success: false,
        error: 'User not found'
      });
    }

    res.json({
      success: true,
      data: user
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to fetch user',
      message: error.message
    });
  }
});

// Search users
app.get('/api/users/search', (req, res) => {
  try {
    const { q: query } = req.query;
    
    if (!query) {
      return res.status(400).json({
        success: false,
        error: 'Search query is required'
      });
    }

    const results = UserRepository.searchUsers(query);
    
    res.json({
      success: true,
      data: results,
      count: results.length,
      query
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'User search failed',
      message: error.message
    });
  }
});

// ====================
// ANALYTICS ENDPOINTS
// ====================

// Get comprehensive analytics
app.get('/api/analytics', (req, res) => {
  try {
    const shayriStats = PoetryRepository.getStatistics();
    const userStats = UserRepository.getUserStats();
    const allShayris = PoetryRepository.getAllShayri();
    const allUsers = UserRepository.getAllUsers();

    // Engagement metrics
    const totalEngagement = allShayris.reduce((acc, shayri) => ({
      views: acc.views + (shayri.metadata?.views || 0),
      shares: acc.shares + (shayri.metadata?.shares || 0),
      likes: acc.likes + Math.floor((shayri.metadata?.views || 0) * 0.1)
    }), { views: 0, shares: 0, likes: 0 });

    // Category distribution
    const categoryDistribution = Object.entries(shayriStats.byCategory).map(([category, count]) => ({
      category,
      count,
      percentage: ((count / shayriStats.total) * 100).toFixed(1)
    }));

    // Monthly trends (last 6 months)
    const monthlyTrends = generateMonthlyTrends(allShayris);

    // Top performing content
    const topShayris = allShayris
      .sort((a, b) => (b.metadata?.views || 0) - (a.metadata?.views || 0))
      .slice(0, 5);

    // User activity metrics
    const userActivity = {
      active: userStats.active,
      total: userStats.total,
      newThisMonth: allUsers.filter(user => {
        const joinDate = new Date(user.joinDate);
        const now = new Date();
        return joinDate.getMonth() === now.getMonth() && 
               joinDate.getFullYear() === now.getFullYear();
      }).length
    };

    const analyticsData = {
      overview: {
        totalShayris: shayriStats.total,
        totalUsers: userStats.total,
        totalViews: totalEngagement.views,
        totalShares: totalEngagement.shares,
        featuredShayris: shayriStats.featured
      },
      engagement: {
        ...totalEngagement,
        avgViewsPerShayri: Math.round(totalEngagement.views / shayriStats.total),
        avgSharesPerShayri: Math.round(totalEngagement.shares / shayriStats.total),
        engagementRate: ((totalEngagement.shares / totalEngagement.views) * 100).toFixed(2)
      },
      categories: categoryDistribution,
      trends: monthlyTrends,
      topContent: topShayris,
      userMetrics: userActivity
    };

    res.json({
      success: true,
      data: analyticsData
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to fetch analytics',
      message: error.message
    });
  }
});

// Get engagement analytics
app.get('/api/analytics/engagement', (req, res) => {
  try {
    const allShayris = PoetryRepository.getAllShayri();
    
    // Calculate engagement metrics
    const totalEngagement = allShayris.reduce((acc, shayri) => ({
      views: acc.views + (shayri.metadata?.views || 0),
      shares: acc.shares + (shayri.metadata?.shares || 0),
      likes: acc.likes + Math.floor((shayri.metadata?.views || 0) * 0.1)
    }), { views: 0, shares: 0, likes: 0 });

    const engagementData = {
      views: totalEngagement.views,
      shares: totalEngagement.shares,
      likes: totalEngagement.likes,
      avgViewsPerShayri: allShayris.length > 0 ? Math.round(totalEngagement.views / allShayris.length) : 0,
      avgSharesPerShayri: allShayris.length > 0 ? Math.round(totalEngagement.shares / allShayris.length) : 0,
      engagementRate: totalEngagement.views > 0 ? ((totalEngagement.shares / totalEngagement.views) * 100).toFixed(2) : "0.00"
    };

    res.json({
      success: true,
      data: engagementData
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to fetch engagement analytics',
      message: error.message
    });
  }
});

// Get trends analytics
app.get('/api/analytics/trends', (req, res) => {
  try {
    const allShayris = PoetryRepository.getAllShayri();
    
    // Generate monthly trends (last 6 months)
    const monthlyTrends = generateMonthlyTrends(allShayris);

    res.json({
      success: true,
      data: monthlyTrends
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to fetch trends analytics',
      message: error.message
    });
  }
});

// ====================
// CONFIGURATION ENDPOINTS
// ====================

// Get available categories
app.get('/api/config/categories', (req, res) => {
  try {
    res.json({
      success: true,
      data: POETRY_CATEGORIES
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to fetch categories',
      message: error.message
    });
  }
});

// ====================
// ERROR HANDLING
// ====================

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    error: 'Endpoint not found',
    path: req.originalUrl
  });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error('Global error:', err);
  res.status(err.status || 500).json({
    success: false,
    error: 'Internal server error',
    message: process.env.NODE_ENV === 'development' ? err.message : 'Something went wrong'
  });
});

// ====================
// SERVER START
// ====================

app.listen(PORT, () => {
  console.log(`🚀 Shayri Backend API Server running on port ${PORT}`);
  console.log(`📊 Health check: http://localhost:${PORT}/health`);
  console.log(`📚 API Documentation: http://localhost:${PORT}/api`);
  console.log(`🔍 Environment: ${process.env.NODE_ENV || 'development'}`);
});

// Helper function to generate monthly trends
function generateMonthlyTrends(shayris) {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
  const now = new Date();
  const trends = [];

  for (let i = 5; i >= 0; i--) {
    const monthDate = new Date(now.getFullYear(), now.getMonth() - i, 1);
    const monthShayris = shayris.filter(shayri => {
      const shayriDate = new Date(shayri.date);
      return shayriDate.getMonth() === monthDate.getMonth() && 
             shayriDate.getFullYear() === monthDate.getFullYear();
    });

    trends.push({
      month: months[monthDate.getMonth()],
      posts: monthShayris.length,
      views: monthShayris.reduce((acc, shayri) => acc + (shayri.metadata?.views || 0), 0),
      shares: monthShayris.reduce((acc, shayri) => acc + (shayri.metadata?.shares || 0), 0)
    });
  }

  return trends;
}

module.exports = app;
