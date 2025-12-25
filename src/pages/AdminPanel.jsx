import { useState } from 'react';
import './AdminPanel.css';

function AdminPanel() {
    const [activeTab, setActiveTab] = useState('overview');

    const stats = {
        totalUsers: 1582,
        activeChallenges: 138,
        submissions: 24567,
        avgSolveTime: '2.4h'
    };

    const recentActivity = [
        { user: 'elite_hacker', action: 'Solved Challenge', challenge: 'Quantum Key', time: '2 min ago' },
        { user: 'quantum_dev', action: 'Failed Attempt', challenge: 'Buffer Overflow X', time: '5 min ago' },
        { user: 'null_master', action: 'Registered', challenge: '-', time: '12 min ago' },
        { user: 'binary_god', action: 'Solved Challenge', challenge: 'Lost Signal', time: '18 min ago' },
    ];

    const challenges = [
        { id: 1, title: 'Quantum Key', category: 'Crypto', difficulty: 'EASY', solves: 342, status: 'Active' },
        { id: 2, title: 'Asteroid Injection', category: 'Web', difficulty: 'MEDIUM', solves: 89, status: 'Active' },
        { id: 3, title: 'Buffer Overflow X', category: 'Pwn', difficulty: 'HARD', solves: 12, status: 'Active' },
        { id: 4, title: 'Engine Core', category: 'Pwn', difficulty: 'INSANE', solves: 2, status: 'Draft' },
    ];

    return (
        <div className="admin-panel">
            <div className="admin-header">
                <div className="container">
                    <div className="header-content">
                        <div>
                            <div className="admin-badge">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
                                </svg>
                                ADMIN ACCESS
                            </div>
                            <h1 className="admin-title">
                                Command Center
                            </h1>
                            <p className="admin-desc">
                                Full control over CTF Interstellar platform
                            </p>
                        </div>
                        <button className="btn btn-secondary">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4M10 17l5-5-5-5M13.8 12H3" strokeWidth="2" />
                            </svg>
                            Logout
                        </button>
                    </div>
                </div>
            </div>

            <div className="admin-content container">
                {/* Quick Stats */}
                <div className="stats-grid">
                    <div className="stat-card card">
                        <div className="stat-header">
                            <span className="stat-label">Total Users</span>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" strokeWidth="2" />
                                <circle cx="9" cy="7" r="4" strokeWidth="2" />
                                <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" strokeWidth="2" />
                            </svg>
                        </div>
                        <div className="stat-value">{stats.totalUsers.toLocaleString()}</div>
                        <div className="stat-change positive">+12% from last week</div>
                    </div>

                    <div className="stat-card card">
                        <div className="stat-header">
                            <span className="stat-label">Active Challenges</span>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" strokeWidth="2" />
                            </svg>
                        </div>
                        <div className="stat-value">{stats.activeChallenges}</div>
                        <div className="stat-change neutral">4 pending review</div>
                    </div>

                    <div className="stat-card card">
                        <div className="stat-header">
                            <span className="stat-label">Total Submissions</span>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" strokeWidth="2" />
                            </svg>
                        </div>
                        <div className="stat-value">{stats.submissions.toLocaleString()}</div>
                        <div className="stat-change positive">+342 today</div>
                    </div>

                    <div className="stat-card card">
                        <div className="stat-header">
                            <span className="stat-label">Avg Solve Time</span>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <circle cx="12" cy="12" r="10" strokeWidth="2" />
                                <polyline points="12 6 12 12 16 14" strokeWidth="2" />
                            </svg>
                        </div>
                        <div className="stat-value">{stats.avgSolveTime}</div>
                        <div className="stat-change positive">-15min improvement</div>
                    </div>
                </div>

                {/* Navigation Tabs */}
                <div className="admin-tabs">
                    <button
                        className={`admin-tab ${activeTab === 'overview' ? 'active' : ''}`}
                        onClick={() => setActiveTab('overview')}
                    >
                        Overview
                    </button>
                    <button
                        className={`admin-tab ${activeTab === 'challenges' ? 'active' : ''}`}
                        onClick={() => setActiveTab('challenges')}
                    >
                        Challenges
                    </button>
                    <button
                        className={`admin-tab ${activeTab === 'users' ? 'active' : ''}`}
                        onClick={() => setActiveTab('users')}
                    >
                        Users
                    </button>
                    <button
                        className={`admin-tab ${activeTab === 'settings' ? 'active' : ''}`}
                        onClick={() => setActiveTab('settings')}
                    >
                        Settings
                    </button>
                </div>

                {/* Content Based on Active Tab */}
                {activeTab === 'overview' && (
                    <div className="tab-content">
                        <div className="content-grid">
                            {/* Recent Activity */}
                            <div className="activity-card card">
                                <h2 className="section-title">Recent Activity</h2>
                                <div className="activity-list">
                                    {recentActivity.map((activity, idx) => (
                                        <div key={idx} className="activity-item">
                                            <div className="activity-icon">
                                                {activity.action === 'Solved Challenge' ? '✅' :
                                                    activity.action === 'Failed Attempt' ? '❌' : '👤'}
                                            </div>
                                            <div className="activity-details">
                                                <div className="activity-main">
                                                    <span className="activity-user">{activity.user}</span>
                                                    <span className="activity-action">{activity.action}</span>
                                                    {activity.challenge !== '-' && (
                                                        <span className="activity-challenge">"{activity.challenge}"</span>
                                                    )}
                                                </div>
                                                <span className="activity-time">{activity.time}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* System Status */}
                            <div className="system-card card">
                                <h2 className="section-title">System Status</h2>
                                <div className="system-metrics">
                                    <div className="metric">
                                        <span className="metric-label">Server Status</span>
                                        <span className="metric-value status-online">● Online</span>
                                    </div>
                                    <div className="metric">
                                        <span className="metric-label">Database</span>
                                        <span className="metric-value status-online">● Connected</span>
                                    </div>
                                    <div className="metric">
                                        <span className="metric-label">API Response</span>
                                        <span className="metric-value">42ms</span>
                                    </div>
                                    <div className="metric">
                                        <span className="metric-label">Uptime</span>
                                        <span className="metric-value">99.98%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'challenges' && (
                    <div className="tab-content">
                        <div className="challenges-management card">
                            <div className="section-header">
                                <h2 className="section-title">Challenge Management</h2>
                                <button className="btn btn-primary">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                        <line x1="12" y1="5" x2="12" y2="19" strokeWidth="2" />
                                        <line x1="5" y1="12" x2="19" y2="12" strokeWidth="2" />
                                    </svg>
                                    New Challenge
                                </button>
                            </div>

                            <div className="challenges-table">
                                <div className="table-header">
                                    <div>Title</div>
                                    <div>Category</div>
                                    <div>Difficulty</div>
                                    <div>Solves</div>
                                    <div>Status</div>
                                    <div>Actions</div>
                                </div>
                                <div className="table-body">
                                    {challenges.map((challenge) => (
                                        <div key={challenge.id} className="table-row">
                                            <div className="cell-title">{challenge.title}</div>
                                            <div>{challenge.category}</div>
                                            <div>
                                                <span className={`difficulty-badge ${challenge.difficulty.toLowerCase()}`}>
                                                    {challenge.difficulty}
                                                </span>
                                            </div>
                                            <div>{challenge.solves}</div>
                                            <div>
                                                <span className={`status-badge ${challenge.status.toLowerCase()}`}>
                                                    {challenge.status}
                                                </span>
                                            </div>
                                            <div className="cell-actions">
                                                <button className="action-btn edit">Edit</button>
                                                <button className="action-btn delete">Delete</button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'users' && (
                    <div className="tab-content">
                        <div className="users-management card">
                            <h2 className="section-title">User Management</h2>
                            <p className="placeholder-text">User management interface - Coming soon</p>
                        </div>
                    </div>
                )}

                {activeTab === 'settings' && (
                    <div className="tab-content">
                        <div className="settings-panel card">
                            <h2 className="section-title">Platform Settings</h2>
                            <div className="settings-grid">
                                <div className="setting-item">
                                    <label className="setting-label">Platform Name</label>
                                    <input type="text" className="setting-input" value="CTF Interstellar" readOnly />
                                </div>
                                <div className="setting-item">
                                    <label className="setting-label">Maintenance Mode</label>
                                    <input type="checkbox" className="setting-toggle" />
                                </div>
                                <div className="setting-item">
                                    <label className="setting-label">Registration Enabled</label>
                                    <input type="checkbox" className="setting-toggle" defaultChecked />
                                </div>
                                <div className="setting-item">
                                    <label className="setting-label">Max Team Size</label>
                                    <input type="number" className="setting-input" defaultValue="4" />
                                </div>
                            </div>
                            <button className="btn btn-primary">Save Changes</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default AdminPanel;
