/**
 * Backend Poetry Data - CommonJS Compatible
 * Copy of frontend data for backend API
 */

// Copy from frontend
const POETRY_CATEGORIES = {
  ALL: 'All',
  ROMANTIC: 'Ishq',
  MELANCHOLY: 'Dard', 
  LIFE: 'Zindagi',
  JOY: 'Khushi',
  SEPARATION: 'Judai',
  MOTIVATIONAL: 'Motivational',
  HEARTBREAK: 'Heartbreak',
  ATTITUDE: 'Attitude'
};

const MASTER_POETRY_COLLECTION = [
  {
    id: 'shayri-001',
    text: 'तेरी मुस्कुराहट से रोशन मेरी शाम होती है,\nइश्क़ के इस सफ़र में हर रात गुलज़ार होती है।',
    category: POETRY_CATEGORIES.ROMANTIC,
    author: 'आरिज़ खान',
    date: '2026-01-07',
    imageUrl: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=1200&q=80',
    metadata: {
      views: 1250,
      shares: 89,
      featured: true
    },
    user: {
      id: 1,
      name: ' आरिज़ खान',
      author: 'आरिज़ खान',
      email: 'admin@shayri.com',
      role: 'admin',
      status: 'active',
      joinDate: '2024-01-15',
      lastActive: '2024-04-25',
      postsCount: 45,
      permissions: ['read', 'write', 'delete', 'manage_users']
    }
  },
  {
    id: 'shayri-002',
    text: 'दर्द इतना था कि अल्फाज़ भी खामोश रहे,\nदिल के शहर में बस आँसुओं के मौसम रहे।',
    category: POETRY_CATEGORIES.MELANCHOLY,
    author: 'नूर फातिमा',
    date: '2026-01-12',
    imageUrl: 'https://images.unsplash.com/photo-1473186578172-c141e6798cf4?auto=format&fit=crop&w=1200&q=80',
    metadata: {
      views: 980,
      shares: 67,
      featured: false
    },
    user: {
      id: 2,
      name: 'नूर फातिमा',
      author: 'नूर फातिमा',
      email: 'guest@example.com',
      role: 'guest',
      status: 'active',
      joinDate: '2024-02-20',
      lastActive: '2024-04-24',
      postsCount: 12,
      permissions: ['read', 'write']
    }
  },
  {
    id: 'shayri-003',
    text: 'ज़िन्दगी ने हर मोड़ पर नई दास्ताँ लिख दी,\nकभी जीत का गीत, कभी इम्तिहाँ लिख दी।',
    category: POETRY_CATEGORIES.LIFE,
    author: 'रिज़वान अली',
    date: '2026-01-16',
    imageUrl: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
    metadata: {
      views: 1450,
      shares: 112,
      featured: true
    },
    user: {
      id: 3,
      name: 'रिज़वान अली',
      author: 'रिज़वान अली',
      email: 'test@example.com',
      role: 'user',
      status: 'suspended',
      joinDate: '2024-03-10',
      lastActive: '2024-04-20',
      postsCount: 8,
      permissions: ['read']
    }
  },
  {
    id: 'shayri-004',
    text: 'खुशी की बारिश में भीगता रहा दिल आज,\nदुआओं ने सजाया हर ख़्वाब का महफ़िल आज।',
    category: POETRY_CATEGORIES.JOY,
    author: 'सना परवीन',
    date: '2026-01-20',
    imageUrl: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80',
    metadata: {
      views: 1100,
      shares: 78,
      featured: false
    },
    user: {
      id: 4,
      name: 'सना परवीन',
      author: 'सना परवीन',
      email: 'sana@shayri.com',
      role: 'user',
      status: 'active',
      joinDate: '2024-01-20',
      lastActive: '2024-04-25',
      postsCount: 12,
      permissions: ['read', 'write']
    }
  },
  {
    id: 'shayri-005',
    text: 'जुदाई का पल था मगर उम्मीद ज़िंदा रही,\nतेरी याद की रोशनी से रात भी चमकती रही।',
    category: POETRY_CATEGORIES.SEPARATION,
    author: 'फ़ैज़ान कुरैशी',
    date: '2026-01-24',
    imageUrl: 'https://images.unsplash.com/photo-1496307653780-42ee777d4833?auto=format&fit=crop&w=1200&q=80',
    metadata: {
      views: 890,
      shares: 56,
      featured: false
    },
    user: {
      id: 5,
      name: 'फ़ैज़ान कुरैशी',
      author: 'फ़ैज़ान कुरैशी',
      email: 'faizan@shayri.com',
      role: 'user',
      status: 'active',
      joinDate: '2024-01-24',
      lastActive: '2024-04-25',
      postsCount: 8,
      permissions: ['read', 'write']
    }
  },
  {
    id: 'shayri-006',
    text: 'इश्क़ में हर लम्हा एक नई कहानी होती है,\nदिल की धड़कन भी जैसे ज़ुबानी होती है।',
    category: POETRY_CATEGORIES.ROMANTIC,
    author: 'अली रज़ा',
    date: '2026-01-26',
    imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
    metadata: {
      views: 1320,
      shares: 95,
      featured: true
    },
    user: {
      id: 6,
      name: 'अली रज़ा',
      author: 'अली रज़ा',
      email: 'ali@shayri.com',
      role: 'user',
      status: 'active',
      joinDate: '2024-01-26',
      lastActive: '2024-04-25',
      postsCount: 10,
      permissions: ['read', 'write']
    }
  },
  {
    id: 'shayri-007',
    text: 'दर्द को छुपा के मुस्कुराना सीख लिया,\nहर ग़म को दिल में बसाना सीख लिया।',
    category: POETRY_CATEGORIES.MELANCHOLY,
    author: 'ज़ोया खान',
    date: '2026-01-28',
    imageUrl: 'https://images.unsplash.com/photo-1519681393784-d120267933ba',
    metadata: {
      views: 760,
      shares: 43,
      featured: false
    },
    user: {
      id: 7,
      name: 'ज़ोया खान',
      author: 'ज़ोया खान',
      email: 'zoya@shayri.com',
      role: 'user',
      status: 'active',
      joinDate: '2024-01-28',
      lastActive: '2024-04-25',
      postsCount: 6,
      permissions: ['read', 'write']
    }
  },
  {
    id: 'shayri-008',
    text: 'ज़िन्दगी एक किताब है, हर दिन नया पन्ना,\nकभी खुशी लिखी, कभी ग़म का फ़साना।',
    category: POETRY_CATEGORIES.LIFE,
    author: 'इमरान शेख',
    date: '2026-01-30',
    imageUrl: 'https://images.unsplash.com/photo-1492724441997-5dc865305da7',
    metadata: {
      views: 1180,
      shares: 87,
      featured: false
    },
    user: {
      id: 8,
      name: 'इमरान शेख',
      author: 'इमरान शेख',
      email: 'imran@shayri.com',
      role: 'user',
      status: 'active',
      joinDate: '2024-01-30',
      lastActive: '2024-04-25',
      postsCount: 7,
      permissions: ['read', 'write']
    }
  },
  {
    id: 'shayri-009',
    text: 'खुशी के पल भी कितने अजीब होते हैं,\nआते हैं चुपके से और याद बन जाते हैं।',
    category: POETRY_CATEGORIES.JOY,
    author: 'मेहक अली',
    date: '2026-02-01',
    imageUrl: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470',
    metadata: {
      views: 920,
      shares: 61,
      featured: false
    },
    user: {
      id: 9,
      name: 'मेहक अली',
      author: 'मेहक अली',
      email: 'mehak@shayri.com',
      role: 'user',
      status: 'active',
      joinDate: '2024-02-01',
      lastActive: '2024-04-25',
      postsCount: 5,
      permissions: ['read', 'write']
    }
  },
  {
    id: 'shayri-010',
    text: 'जुदाई का दर्द दिल में बस गया है,\nतेरा नाम ही अब दुआ बन गया है।',
    category: POETRY_CATEGORIES.SEPARATION,
    author: 'अरमान मलिक',
    date: '2026-02-03',
    imageUrl: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429',
    metadata: {
      views: 1050,
      shares: 72,
      featured: false
    },
    user: {
      id: 10,
      name: 'अरमान मलिक',
      author: 'अरमान मलिक',
      email: 'arman@shayri.com',
      role: 'user',
      status: 'active',
      joinDate: '2024-02-03',
      lastActive: '2024-04-25',
      postsCount: 4,
      permissions: ['read', 'write']
    }
  },
  {
    id: 'shayri-011',
    text: 'तेरी आँखों में जो नशा है,\nवही मेरी ज़िन्दगी का सहारा है।',
    category: POETRY_CATEGORIES.ROMANTIC,
    author: 'आरिज़ खान',
    date: '2026-02-05',
    imageUrl: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee',
    metadata: {
      views: 1680,
      shares: 134,
      featured: true
    },
    user: {
      id: 1,
      name: ' आरिज़ खान',
      author: 'आरिज़ खान',
      email: 'admin@shayri.com',
      role: 'admin',
      status: 'active',
      joinDate: '2024-01-15',
      lastActive: '2024-04-25',
      postsCount: 45,
      permissions: ['read', 'write', 'delete', 'manage_users']
    }
  },
  {
    id: 'shayri-012',
    text: 'दर्द भी एक अजीब मेहमान है,\nआता है बिना बुलाए और रुक जाता है।',
    category: POETRY_CATEGORIES.MELANCHOLY,
    author: 'नूर फातिमा',
    date: '2026-02-07',
    imageUrl: 'https://images.unsplash.com/photo-1473186578172-c141e6798cf4',
    metadata: {
      views: 840,
      shares: 58,
      featured: false
    },
    user: {
      id: 2,
      name: 'नूर फातिमा',
      author: 'नूर फातिमा',
      email: 'guest@example.com',
      role: 'guest',
      status: 'active',
      joinDate: '2024-02-20',
      lastActive: '2024-04-24',
      postsCount: 12,
      permissions: ['read', 'write']
    }
  },
  {
    id: 'shayri-013',
    text: 'ज़िन्दगी का सफ़र कभी आसान नहीं होता,\nहर मोड़ पर एक इम्तिहाँ होता है।',
    category: POETRY_CATEGORIES.LIFE,
    author: 'रिज़वान अली',
    date: '2026-02-09',
    imageUrl: 'https://images.unsplash.com/photo-1496307653780-42ee777d4833',
    metadata: {
      views: 1290,
      shares: 98,
      featured: false
    },
    user: {
      id: 3,
      name: 'रिज़वान अली',
      author: 'रिज़वान अली',
      email: 'test@example.com',
      role: 'user',
      status: 'suspended',
      joinDate: '2024-03-10',
      lastActive: '2024-04-20',
      postsCount: 8,
      permissions: ['read']
    }
  },
  {
    id: 'shayri-014',
    text: 'ज़िन्दगी का सफ़र कभी आसान नहीं होता,\nहर मोड़ पर एक इम्तिहाँ होता है।',
    category: POETRY_CATEGORIES.LIFE,
     author: 'Avinash',
    date: '2026-02-09',
    imageUrl: 'https://images.unsplash.com/photo-1496307653780-42ee777d4833',
    metadata: {
      views: 1290,
      shares: 98,
      featured: false
    },
    user: {
      id: 11,
      name: 'Avinash',
      author: 'Avinash',
      email: 'avinash@example.com',
      role: 'user',
      status: 'active',
      joinDate: '2024-04-25',
      lastActive: '2024-04-25',
      postsCount: 1,
      permissions: ['read', 'write']
    }
  }
];

// Poetry Repository Functions
const PoetryRepository = {
  getAllShayri(filters = {}) {
    let filtered = [...MASTER_POETRY_COLLECTION];
    
    if (filters.category && filters.category !== 'All') {
      filtered = filtered.filter(shayri => shayri.category === filters.category);
    }
    
    if (filters.author) {
      filtered = filtered.filter(shayri => 
        shayri.author.toLowerCase().includes(filters.author.toLowerCase())
      );
    }
    
    if (filters.featured) {
      filtered = filtered.filter(shayri => shayri.metadata?.featured);
    }
    
    return filtered;
  },

  getShayriById(id) {
    return MASTER_POETRY_COLLECTION.find(shayri => shayri.id === id);
  },

  getShayriByCategory(category) {
    return MASTER_POETRY_COLLECTION.filter(shayri => shayri.category === category);
  },

  getFeaturedShayri() {
    return MASTER_POETRY_COLLECTION.filter(shayri => shayri.metadata?.featured);
  },

  searchShayri(query) {
    const lowercaseQuery = query.toLowerCase();
    return MASTER_POETRY_COLLECTION.filter(shayri => 
      shayri.text.toLowerCase().includes(lowercaseQuery) ||
      shayri.author.toLowerCase().includes(lowercaseQuery)
    );
  },

  getStatistics() {
    const stats = {
      total: MASTER_POETRY_COLLECTION.length,
      featured: 0,
      totalViews: 0,
      totalShares: 0,
      byCategory: {}
    };
    
    MASTER_POETRY_COLLECTION.forEach(shayri => {
      // Category stats
      stats.byCategory[shayri.category] = (stats.byCategory[shayri.category] || 0) + 1;
      
      // Engagement stats
      stats.totalViews += shayri.metadata?.views || 0;
      stats.totalShares += shayri.metadata?.shares || 0;
      
      // Featured count
      if (shayri.metadata?.featured) stats.featured++;
    });
    
    return stats;
  }
};

module.exports = {
  POETRY_CATEGORIES,
  MASTER_POETRY_COLLECTION,
  PoetryRepository
};
