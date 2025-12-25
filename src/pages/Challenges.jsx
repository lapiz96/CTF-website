import { useState } from 'react';
import './Challenges.css';

function Challenges() {
    const [selectedCategory, setSelectedCategory] = useState('All Sectors');
    const [searchQuery, setSearchQuery] = useState('');

    const categories = [
        'All Sectors',
        'Nebula Crypto',
        'Asteroid Web',
        'Black Hole Pwn',
        'Signal Forensics'
    ];

    const challenges = [
        {
            id: 1,
            title: 'Quantum Key',
            category: 'Nebula Crypto',
            difficulty: 'EASY',
            points: 500,
            solves: 342,
            description: 'The alien fleet is using a primitive rotating cipher. Decrypt their communications.',
            icon: '🔐',
            status: 'active'
        },
        {
            id: 2,
            title: 'Asteroid Injection',
            category: 'Asteroid Web',
            difficulty: 'MEDIUM',
            points: 850,
            solves: 89,
            description: 'A rogue asteroid mining bot has an exposed admin panel. Find the vulnerability.',
            icon: '🌐',
            status: 'active'
        },
        {
            id: 3,
            title: 'Buffer Overflow X',
            category: 'Black Hole Pwn',
            difficulty: 'HARD',
            points: 1200,
            solves: 12,
            description: 'Override the navigation system memory stack to redirect the ship.',
            icon: '💥',
            status: 'solved'
        },
        {
            id: 4,
            title: 'Engine Core',
            category: 'Black Hole Pwn',
            difficulty: 'INSANE',
            points: 2000,
            solves: 2,
            description: 'Reverse engineer the FTL drive controller binary. Warning: Anti-debug present.',
            icon: '⚙️',
            status: 'active'
        },
        {
            id: 5,
            title: 'Lost Signal',
            category: 'Signal Forensics',
            difficulty: 'EASY',
            points: 300,
            solves: 512,
            description: 'We intercepted a corrupt image file from a distant beacon. Recover the flag.',
            icon: '📡',
            status: 'active'
        },
        {
            id: 6,
            title: 'Star Map',
            category: 'Signal Forensics',
            difficulty: 'EASY',
            points: 100,
            solves: 1024,
            description: 'Identify the location of the enemy base from this photo taken from orbit.',
            icon: '🗺️',
            status: 'active'
        }
    ];

    const filteredChallenges = challenges.filter(challenge => {
        const matchesCategory = selectedCategory === 'All Sectors' || challenge.category === selectedCategory;
        const matchesSearch = challenge.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            challenge.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const getDifficultyColor = (difficulty) => {
        const colors = {
            'EASY': 'easy',
            'MEDIUM': 'medium',
            'HARD': 'hard',
            'INSANE': 'insane'
        };
        return colors[difficulty] || 'easy';
    };

    return (
        <div className="challenges">
            {/* Header */}
            <section className="challenges-header">
                <div className="container">
                    <div className="header-badge fade-in">
                        <span className="pulse-dot"></span>
                        LIVE EVENT
                    </div>

                    <h1 className="page-title slide-in-left">
                        Active Mission<br />
                        <span className="title-highlight">Directives</span>
                    </h1>

                    <p className="page-description slide-in-left">
                        Decrypt data packets, exploit black hole anomalies, and secure
                        the nebula network to earn interstellar credits.
                    </p>

                    {/* Timer */}
                    <div className="event-timer fade-in">
                        <div className="timer-label">TIME REMAINING</div>
                        <div className="timer-display">
                            <div className="timer-segment">
                                <span className="timer-value">02</span>
                                <span className="timer-unit">DAYS</span>
                            </div>
                            <span className="timer-separator">:</span>
                            <div className="timer-segment">
                                <span className="timer-value">14</span>
                                <span className="timer-unit">HOURS</span>
                            </div>
                            <span className="timer-separator">:</span>
                            <div className="timer-segment">
                                <span className="timer-value">35</span>
                                <span className="timer-unit">MINS</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Filters */}
            <section className="challenges-filters">
                <div className="container">
                    <div className="filter-bar">
                        <div className="category-filters">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                                    onClick={() => setSelectedCategory(category)}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>

                        <div className="search-box">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <circle cx="11" cy="11" r="8" strokeWidth="2" />
                                <path d="m21 21-4.35-4.35" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                            <input
                                type="text"
                                placeholder="Search mission lib..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Challenges Grid */}
            <section className="challenges-grid-section">
                <div className="container">
                    <div className="challenges-grid">
                        {filteredChallenges.map((challenge, index) => (
                            <div
                                key={challenge.id}
                                className={`challenge-card card ${challenge.status === 'solved' ? 'solved' : ''}`}
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                {challenge.status === 'solved' && (
                                    <div className="solved-badge">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                                        </svg>
                                        COMPLETE
                                    </div>
                                )}

                                <div className="challenge-header">
                                    <div className="challenge-icon">{challenge.icon}</div>
                                    <div className="challenge-meta">
                                        <span className={`difficulty-badge ${getDifficultyColor(challenge.difficulty)}`}>
                                            {challenge.difficulty}
                                        </span>
                                        <span className="points-badge">{challenge.points} POINTS</span>
                                    </div>
                                </div>

                                <h3 className="challenge-title">{challenge.title}</h3>
                                <p className="challenge-description">{challenge.description}</p>

                                <div className="challenge-footer">
                                    <div className="challenge-solves">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" strokeWidth="2" strokeLinecap="round" />
                                            <circle cx="9" cy="7" r="4" strokeWidth="2" />
                                            <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" strokeWidth="2" strokeLinecap="round" />
                                        </svg>
                                        <span>{challenge.solves} Solves</span>
                                    </div>

                                    <button className="challenge-action-btn">
                                        {challenge.status === 'solved' ? (
                                            <>
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" strokeWidth="2" />
                                                    <circle cx="12" cy="12" r="3" strokeWidth="2" />
                                                </svg>
                                                LOCATE
                                            </>
                                        ) : (
                                            <>
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                                {challenge.difficulty === 'EASY' ? 'DECRYPT' : challenge.difficulty === 'MEDIUM' ? 'HACK' : 'REVERSE'}
                                            </>
                                        )}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {filteredChallenges.length === 0 && (
                        <div className="no-results">
                            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <circle cx="12" cy="12" r="10" strokeWidth="2" />
                                <line x1="12" y1="8" x2="12" y2="12" strokeWidth="2" strokeLinecap="round" />
                                <line x1="12" y1="16" x2="12.01" y2="16" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                            <h3>No Transmissions Found</h3>
                            <p>Try adjusting your search parameters or filter selection.</p>
                        </div>
                    )}

                    <div className="load-more">
                        <button className="btn btn-secondary">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <circle cx="12" cy="12" r="1" fill="currentColor" />
                                <circle cx="12" cy="5" r="1" fill="currentColor" />
                                <circle cx="12" cy="19" r="1" fill="currentColor" />
                            </svg>
                            Load More Transmissions
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Challenges;
