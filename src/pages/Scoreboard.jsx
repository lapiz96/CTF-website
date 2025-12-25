import { useState } from 'react';
import './Scoreboard.css';

function Scoreboard() {
    const [selectedTab, setSelectedTab] = useState('global');

    const leaderboard = [
        { rank: 1, team: 'CyberPhoenix', score: 8450, solves: 28, change: 'up', user: 'elite_hacker', avatar: '🔥' },
        { rank: 2, team: 'QuantumBreakers', score: 8120, solves: 26, change: 'down', user: 'quantum_dev', avatar: '⚡' },
        { rank: 3, team: 'NullPointers', score: 7890, solves: 25, change: 'same', user: 'null_master', avatar: '🎯' },
        { rank: 4, team: 'BinaryNinjas', score: 7650, solves: 24, change: 'up', user: 'binary_god', avatar: '🥷' },
        { rank: 5, team: 'HexDecoders', score: 7420, solves: 23, change: 'up', user: 'hex_wizard', avatar: '🔮' },
        { rank: 6, team: 'StackOverflow', score: 7200, solves: 22, change: 'down', user: 'stack_guru', avatar: '💻' },
        { rank: 7, team: 'RootAccess', score: 6980, solves: 21, change: 'same', user: 'root_admin', avatar: '👑' },
        { rank: 8, team: 'ShellShockers', score: 6750, solves: 20, change: 'up', user: 'shell_master', avatar: '💥' },
        { rank: 42, team: 'You', score: 1250, solves: 8, change: 'up', user: 'player_one', avatar: '👤', isCurrentUser: true }
    ];

    const getChangeBadge = (change) => {
        if (change === 'up') {
            return (
                <span className="rank-change up">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M7 14l5-5 5 5z" />
                    </svg>
                </span>
            );
        } else if (change === 'down') {
            return (
                <span className="rank-change down">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M7 10l5 5 5-5z" />
                    </svg>
                </span>
            );
        }
        return <span className="rank-change same">—</span>;
    };

    const getRankBadge = (rank) => {
        if (rank === 1) return '🥇';
        if (rank === 2) return '🥈';
        if (rank === 3) return '🥉';
        return `#${rank}`;
    };

    return (
        <div className="scoreboard">
            {/* Header */}
            <section className="scoreboard-header">
                <div className="container">
                    <div className="header-badge fade-in">
                        <span className="live-indicator"></span>
                        LIVE RANKINGS
                    </div>

                    <h1 className="page-title slide-in-left">
                        Mission<br />
                        <span className="title-highlight">Leaderboard</span>
                    </h1>

                    <p className="page-description slide-in-left">
                        Track the top commanders across the galaxy. Real-time rankings updated every 60 seconds.
                    </p>

                    {/* Stats Summary */}
                    <div className="stats-summary fade-in">
                        <div className="stat-card">
                            <div className="stat-icon">🏆</div>
                            <div className="stat-info">
                                <span className="stat-value">1,582</span>
                                <span className="stat-label">Total Teams</span>
                            </div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-icon">⭐</div>
                            <div className="stat-info">
                                <span className="stat-value">8,450</span>
                                <span className="stat-label">Top Score</span>
                            </div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-icon">🎯</div>
                            <div className="stat-info">
                                <span className="stat-value">28</span>
                                <span className="stat-label">Max Solves</span>
                            </div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-icon">🚀</div>
                            <div className="stat-info">
                                <span className="stat-value">#42</span>
                                <span className="stat-label">Your Rank</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Leaderboard Tabs */}
            <section className="leaderboard-section">
                <div className="container">
                    <div className="leaderboard-tabs">
                        <button
                            className={`tab-btn ${selectedTab === 'global' ? 'active' : ''}`}
                            onClick={() => setSelectedTab('global')}
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <circle cx="12" cy="12" r="10" strokeWidth="2" />
                                <line x1="2" y1="12" x2="22" y2="12" strokeWidth="2" />
                                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" strokeWidth="2" />
                            </svg>
                            Global Ranking
                        </button>
                        <button
                            className={`tab-btn ${selectedTab === 'regional' ? 'active' : ''}`}
                            onClick={() => setSelectedTab('regional')}
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" strokeWidth="2" />
                                <circle cx="12" cy="10" r="3" strokeWidth="2" />
                            </svg>
                            Regional
                        </button>
                        <button
                            className={`tab-btn ${selectedTab === 'friends' ? 'active' : ''}`}
                            onClick={() => setSelectedTab('friends')}
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" strokeWidth="2" />
                                <circle cx="9" cy="7" r="4" strokeWidth="2" />
                                <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" strokeWidth="2" />
                            </svg>
                            Friends
                        </button>
                    </div>

                    {/* Leaderboard Table */}
                    <div className="leaderboard-table card">
                        <div className="table-header">
                            <div className="header-cell rank-col">Rank</div>
                            <div className="header-cell team-col">Team / Player</div>
                            <div className="header-cell score-col">Score</div>
                            <div className="header-cell solves-col">Solves</div>
                            <div className="header-cell change-col">Trend</div>
                        </div>

                        <div className="table-body">
                            {leaderboard.map((entry, index) => (
                                <div
                                    key={entry.rank}
                                    className={`table-row ${entry.isCurrentUser ? 'current-user' : ''}`}
                                    style={{ animationDelay: `${index * 0.05}s` }}
                                >
                                    <div className="table-cell rank-col">
                                        <span className={`rank-badge ${entry.rank <= 3 ? 'top-rank' : ''}`}>
                                            {getRankBadge(entry.rank)}
                                        </span>
                                    </div>

                                    <div className="table-cell team-col">
                                        <div className="team-info">
                                            <span className="team-avatar">{entry.avatar}</span>
                                            <div className="team-details">
                                                <span className="team-name">{entry.team}</span>
                                                <span className="team-user">@{entry.user}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="table-cell score-col">
                                        <span className="score-value">{entry.score.toLocaleString()}</span>
                                        <span className="score-label">PTS</span>
                                    </div>

                                    <div className="table-cell solves-col">
                                        <div className="solves-badge">
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                                            </svg>
                                            {entry.solves}
                                        </div>
                                    </div>

                                    <div className="table-cell change-col">
                                        {getChangeBadge(entry.change)}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Current User Card */}
                    <div className="current-user-card card">
                        <div className="user-card-header">
                            <h3>Your Position</h3>
                            <span className="refresh-indicator">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                                Updated 12s ago
                            </span>
                        </div>
                        <div className="user-card-content">
                            <div className="user-rank-display">
                                <span className="large-rank">#42</span>
                                <div className="rank-info">
                                    <span className="rank-change-text up">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M7 14l5-5 5 5z" />
                                        </svg>
                                        +3 from yesterday
                                    </span>
                                    <span className="percentile">Top 2.7% of participants</span>
                                </div>
                            </div>
                            <div className="user-stats-grid">
                                <div className="user-stat">
                                    <span className="user-stat-value">1,250</span>
                                    <span className="user-stat-label">Points</span>
                                </div>
                                <div className="user-stat">
                                    <span className="user-stat-value">8/30</span>
                                    <span className="user-stat-label">Challenges</span>
                                </div>
                                <div className="user-stat">
                                    <span className="user-stat-value">4h 32m</span>
                                    <span className="user-stat-label">Time Played</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Scoreboard;
