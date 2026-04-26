/**
 * Backend User Data - CommonJS Compatible
 * Copy of frontend user data for backend API
 */

const USER_ROLES = {
  ADMIN: 'admin',
  USER: 'user',
  GUEST: 'guest'
};

const USER_STATUS = {
  ACTIVE: 'active',
  SUSPENDED: 'suspended',
  INACTIVE: 'inactive'
};

// Extract users from poetry data
const { MASTER_POETRY_COLLECTION } = require('./poetryData');

const MOCK_USERS = (() => {
  const uniqueUsers = new Map();
  const userPostCounts = new Map();
  
  // Count posts per user
  MASTER_POETRY_COLLECTION
    .filter(shayri => shayri.user)
    .forEach(shayri => {
      const userId = shayri.user.id;
      userPostCounts.set(userId, (userPostCounts.get(userId) || 0) + 1);
    });
  
  // Create unique users with correct post counts
  MASTER_POETRY_COLLECTION
    .filter(shayri => shayri.user)
    .forEach(shayri => {
      const user = shayri.user;
      if (!uniqueUsers.has(user.id)) {
        uniqueUsers.set(user.id, {
          ...user,
          postsCount: userPostCounts.get(user.id)
        });
      }
    });
  
  return Array.from(uniqueUsers.values());
})();

// User Repository Class
class UserRepository {
  static getAllUsers() {
    return MOCK_USERS;
  }

  static getUserById(id) {
    return MOCK_USERS.find(user => user.id === id);
  }

  static getUsersByRole(role) {
    return MOCK_USERS.filter(user => user.role === role);
  }

  static getUsersByStatus(status) {
    return MOCK_USERS.filter(user => user.status === status);
  }

  static getUserStats() {
    const stats = {
      total: MOCK_USERS.length,
      active: MOCK_USERS.filter(u => u.status === USER_STATUS.ACTIVE).length,
      admins: MOCK_USERS.filter(u => u.role === USER_ROLES.ADMIN).length,
      suspended: MOCK_USERS.filter(u => u.status === USER_STATUS.SUSPENDED).length,
      byRole: {},
      byStatus: {}
    };

    // Calculate role stats
    MOCK_USERS.forEach(user => {
      stats.byRole[user.role] = (stats.byRole[user.role] || 0) + 1;
      stats.byStatus[user.status] = (stats.byStatus[user.status] || 0) + 1;
    });

    return stats;
  }

  static searchUsers(query) {
    const lowercaseQuery = query.toLowerCase();
    return MOCK_USERS.filter(user => 
      user.name.toLowerCase().includes(lowercaseQuery) ||
      user.email.toLowerCase().includes(lowercaseQuery)
    );
  }

  static updateUser(id, updates) {
    const userIndex = MOCK_USERS.findIndex(user => user.id === id);
    if (userIndex !== -1) {
      MOCK_USERS[userIndex] = { ...MOCK_USERS[userIndex], ...updates };
      return MOCK_USERS[userIndex];
    }
    return null;
  }

  static deleteUser(id) {
    const userIndex = MOCK_USERS.findIndex(user => user.id === id);
    if (userIndex !== -1) {
      return MOCK_USERS.splice(userIndex, 1)[0];
    }
    return null;
  }

  static createUser(userData) {
    const newUser = {
      id: Math.max(...MOCK_USERS.map(u => u.id)) + 1,
      ...userData,
      joinDate: new Date().toISOString().split('T')[0],
      lastActive: new Date().toISOString().split('T')[0],
      postsCount: 0
    };
    MOCK_USERS.push(newUser);
    return newUser;
  }
}

module.exports = {
  USER_ROLES,
  USER_STATUS,
  MOCK_USERS,
  UserRepository
};
