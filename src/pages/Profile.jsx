import { useState } from 'react';
import './Profile.css';

function Profile() {
    const [activeTab, setActiveTab] = useState('login');

    return (
        <div className="profile">
            <section className="profile-section">
                <div className="container">
                    <div className="profile-container">
                        <div className="profile-card card">
                            <div className="card-header">
                                <h2 className="card-title">
                                    {activeTab === 'login' ? 'Mission Login' : 'Register Fleet'}
                                </h2>
                                <p className="card-subtitle">
                                    {activeTab === 'login'
                                        ? 'Access your command center'
                                        : 'Join the interstellar defense force'}
                                </p>
                            </div>

                            <div className="tab-switcher">
                                <button
                                    className={`tab ${activeTab === 'login' ? 'active' : ''}`}
                                    onClick={() => setActiveTab('login')}
                                >
                                    Login
                                </button>
                                <button
                                    className={`tab ${activeTab === 'register' ? 'active' : ''}`}
                                    onClick={() => setActiveTab('register')}
                                >
                                    Register
                                </button>
                            </div>

                            {activeTab === 'login' ? (
                                <form className="auth-form">
                                    <div className="form-group">
                                        <label htmlFor="email">Email or Username</label>
                                        <input
                                            type="text"
                                            id="email"
                                            placeholder="commander@interstellar.ctf"
                                            className="form-input"
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="password">Password</label>
                                        <input
                                            type="password"
                                            id="password"
                                            placeholder="Enter your password"
                                            className="form-input"
                                        />
                                    </div>

                                    <div className="form-options">
                                        <label className="checkbox-label">
                                            <input type="checkbox" />
                                            <span>Remember me</span>
                                        </label>
                                        <a href="#" className="forgot-link">Forgot password?</a>
                                    </div>

                                    <button type="submit" className="btn btn-primary btn-full">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                            <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4M10 17l5-5-5-5M13.8 12H3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        Launch Mission
                                    </button>

                                    <div className="divider">
                                        <span>or continue with</span>
                                    </div>

                                    <div className="social-login">
                                        <button type="button" className="social-btn">
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                            </svg>
                                            GitHub
                                        </button>
                                        <button type="button" className="social-btn">
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
                                            </svg>
                                            Discord
                                        </button>
                                    </div>
                                </form>
                            ) : (
                                <form className="auth-form">
                                    <div className="form-group">
                                        <label htmlFor="username">Username</label>
                                        <input
                                            type="text"
                                            id="username"
                                            placeholder="Choose your callsign"
                                            className="form-input"
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="reg-email">Email</label>
                                        <input
                                            type="email"
                                            id="reg-email"
                                            placeholder="commander@interstellar.ctf"
                                            className="form-input"
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="reg-password">Password</label>
                                        <input
                                            type="password"
                                            id="reg-password"
                                            placeholder="Create a strong password"
                                            className="form-input"
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="confirm-password">Confirm Password</label>
                                        <input
                                            type="password"
                                            id="confirm-password"
                                            placeholder="Confirm your password"
                                            className="form-input"
                                        />
                                    </div>

                                    <div className="form-options">
                                        <label className="checkbox-label">
                                            <input type="checkbox" />
                                            <span>I agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a></span>
                                        </label>
                                    </div>

                                    <button type="submit" className="btn btn-primary btn-full">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                            <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <circle cx="8.5" cy="7" r="4" strokeWidth="2" />
                                            <line x1="20" y1="8" x2="20" y2="14" strokeWidth="2" strokeLinecap="round" />
                                            <line x1="23" y1="11" x2="17" y2="11" strokeWidth="2" strokeLinecap="round" />
                                        </svg>
                                        Create Account
                                    </button>
                                </form>
                            )}
                        </div>

                        <div className="profile-info">
                            <div className="info-card card">
                                <div className="info-icon">
                                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                        <path d="M12 2L2 7l10 5 10-5-10-5z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M2 17l10 5 10-5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M2 12l10 5 10-5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <h3>Join 1,500+ Hackers</h3>
                                <p>Connect with cybersecurity enthusiasts from around the galaxy</p>
                            </div>

                            <div className="info-card card">
                                <div className="info-icon">
                                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <h3>Earn Recognition</h3>
                                <p>Climb the leaderboard and prove your skills</p>
                            </div>

                            <div className="info-card card">
                                <div className="info-icon">
                                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                        <circle cx="12" cy="12" r="10" strokeWidth="2" />
                                        <polyline points="12 6 12 12 16 14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <h3>24/7 Access</h3>
                                <p>Play at your own pace, anytime, anywhere</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Profile;
