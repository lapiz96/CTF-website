import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './Home.css';

function Home() {
    const [stats, setStats] = useState({
        teams: 1582,
        challenges: 138,
        activePlayers: 1402,
        nextEvent: '02:12:18'
    });

    useEffect(() => {
        // Simulate live stats updates
        const interval = setInterval(() => {
            setStats(prev => ({
                ...prev,
                activePlayers: prev.activePlayers + Math.floor(Math.random() * 3) - 1
            }));
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="home">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-background">
                    <div className="stars"></div>
                    <div className="stars2"></div>
                    <div className="stars3"></div>
                </div>

                <div className="hero-content container">
                    <div className="hero-text">
                        <div className="hero-badge fade-in">
                            <span className="badge-icon">🚀</span>
                            OPERATION: APT | CTF 2.2
                        </div>

                        <h1 className="hero-title slide-in-left">
                            OPERATION:<br />
                            <span className="hero-title-highlight">INTERSTELLAR</span>
                        </h1>

                        <p className="hero-description slide-in-left">
                            Join the ultimate cybersecurity competition. Deploy into the galaxy,
                            solve universe-shattering challenges and compete against hackers from across the cosmos.
                        </p>

                        <div className="hero-actions slide-in-left">
                            <Link to="/challenges" className="btn btn-primary">
                                <span>Join The Mission</span>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </Link>
                            <Link to="/scoreboard" className="btn btn-secondary">
                                View Ranking
                            </Link>
                        </div>

                        <div className="hero-stats">
                            <div className="stat-item">
                                <span className="stat-label">Active Teams</span>
                                <span className="stat-value">{stats.teams}</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-label">Total Challenges</span>
                                <span className="stat-value">{stats.challenges}</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-label">Players Online</span>
                                <span className="stat-value">{stats.activePlayers}</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-label">Next Event In</span>
                                <span className="stat-value event-time">{stats.nextEvent}</span>
                            </div>
                        </div>
                    </div>

                    <div className="hero-visual slide-in-right">
                        <div className="planet-container">
                            <div className="planet-glow"></div>
                            <div className="planet">
                                <div className="planet-surface"></div>
                                <div className="planet-ring"></div>
                            </div>
                            <div className="orbit-ring orbit-1"></div>
                            <div className="orbit-ring orbit-2"></div>
                            <div className="orbit-ring orbit-3"></div>
                        </div>

                        <div className="mission-card">
                            <div className="mission-header">
                                <span className="mission-status">EXPERT - HARD</span>
                            </div>
                            <h3 className="mission-title">Sector 70 Raze</h3>
                            <div className="mission-meta">
                                <span className="mission-solves">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                                    </svg>
                                    342 Solves
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="scroll-indicator">
                    <span>SCROLL</span>
                    <div className="scroll-arrow"></div>
                </div>
            </section>

            {/* Mission Parameters Section */}
            <section className="mission-parameters">
                <div className="container">
                    <div className="section-header fade-in">
                        <h2 className="section-title">MISSION PARAMETERS</h2>
                        <p className="section-description">
                            Prepare for a series of challenges designed to test your skills in
                            cybersecurity, reverse engineering, web exploitation. Only the elite will succeed.
                        </p>
                    </div>

                    <div className="parameters-grid">
                        <div className="parameter-card card fade-in">
                            <div className="parameter-icon">
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="2" />
                                    <path d="M9 9h6v6H9z" fill="currentColor" opacity="0.3" />
                                </svg>
                            </div>
                            <h3 className="parameter-title">Cryptography</h3>
                            <p className="parameter-description">
                                Decode encrypted messages using cutting-edge cryptographic techniques and
                                break into secure systems. Master the art of ciphers.
                            </p>
                        </div>

                        <div className="parameter-card card fade-in">
                            <div className="parameter-icon" style={{ color: '#3b82f6' }}>
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <circle cx="12" cy="12" r="3" strokeWidth="2" />
                                    <path d="M12 1v6m0 6v6M23 12h-6m-6 0H1" strokeWidth="2" />
                                </svg>
                            </div>
                            <h3 className="parameter-title">Reverse Engineering</h3>
                            <p className="parameter-description">
                                Disassemble binaries, analyze malware and uncover hidden functionalities.
                                See through the matrix of compiled code.
                            </p>
                        </div>

                        <div className="parameter-card card fade-in">
                            <div className="parameter-icon" style={{ color: '#a855f7' }}>
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" strokeWidth="2" />
                                    <polyline points="3.27 6.96 12 12.01 20.73 6.96" strokeWidth="2" />
                                    <line x1="12" y1="22.08" x2="12" y2="12" strokeWidth="2" />
                                </svg>
                            </div>
                            <h3 className="parameter-title">Web Exploitation</h3>
                            <p className="parameter-description">
                                Exploit web vulnerabilities, inject payloads and manipulate databases.
                                Prove the web isn't as secure as it seems.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Live Telemetry Section */}
            <section className="telemetry">
                <div className="container">
                    <div className="telemetry-content">
                        <div className="telemetry-info">
                            <h2 className="section-title fade-in">LIVE TELEMETRY</h2>
                            <div className="telemetry-metrics">
                                <div className="metric-item">
                                    <span className="metric-label">LEVEL SEVERITY</span>
                                    <div className="metric-bar">
                                        <div className="metric-fill" style={{ width: '75%' }}></div>
                                    </div>
                                    <span className="metric-value">Level 5</span>
                                </div>

                                <div className="metric-item">
                                    <span className="metric-label">THREAT INDEX</span>
                                    <div className="metric-bar">
                                        <div className="metric-fill critical" style={{ width: '92%' }}></div>
                                    </div>
                                    <span className="metric-value critical">4.082</span>
                                </div>

                                <div className="metric-item">
                                    <span className="metric-label">SIGNAL STATUS</span>
                                    <div className="metric-bar">
                                        <div className="metric-fill warning" style={{ width: '58%' }}></div>
                                    </div>
                                    <span className="metric-value">CRITICAL</span>
                                </div>
                            </div>
                        </div>

                        <div className="telemetry-visual">
                            <div className="galaxy-container">
                                <div className="galaxy-image"></div>
                                <div className="data-points">
                                    <div className="data-point" style={{ top: '20%', left: '30%' }}></div>
                                    <div className="data-point" style={{ top: '60%', left: '70%' }}></div>
                                    <div className="data-point" style={{ top: '45%', left: '15%' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="cta">
                <div className="container">
                    <div className="cta-content">
                        <h2 className="cta-title fade-in">
                            READY FOR <span className="highlight">LAUNCH?</span>
                        </h2>
                        <p className="cta-description fade-in">
                            Register now to secure your place on the leaderboard. The portal closes soon,
                            and the galaxy awaits the next commander.
                        </p>
                        <div className="cta-actions fade-in">
                            <Link to="/challenges" className="btn btn-primary btn-large">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                                </svg>
                                INITIATE SEQUENCE
                            </Link>
                        </div>
                        <p className="cta-note">
                            No credit card required • Free to participate • Join 1,500+ hackers
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;
