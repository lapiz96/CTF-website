import './About.css';

function About() {
    const teamMembers = [
        { name: 'Commander Atlas', role: 'Lead Architect', avatar: '🚀', bio: 'Expert in challenge design and platform security' },
        { name: 'Lt. Nova', role: 'Web Security Specialist', avatar: '💻', bio: 'Master of web exploitation and defense' },
        { name: 'Admiral Cipher', role: 'Cryptography Lead', avatar: '🔐', bio: 'Specialist in encryption and code breaking' },
        { name: 'Captain Binary', role: 'Reverse Engineering', avatar: '⚙️', bio: 'Binary analysis and exploit development expert' }
    ];

    return (
        <div className="about">
            {/* Hero */}
            <section className="about-hero">
                <div className="container">
                    <div className="hero-badge fade-in">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                        </svg>
                        ABOUT THE MISSION
                    </div>

                    <h1 className="page-title slide-in-left">
                        Welcome to<br />
                        <span className="title-highlight">CTF Interstellar</span>
                    </h1>

                    <p className="page-description slide-in-left">
                        The premier cybersecurity challenge platform where hackers, security enthusiasts, and
                        problem solvers unite to test their skills across the digital universe.
                    </p>
                </div>
            </section>

            {/* Mission Statement */}
            <section className="mission-section">
                <div className="container">
                    <div className="mission-grid">
                        <div className="mission-content slide-in-left">
                            <h2 className="section-title">Our Mission</h2>
                            <p>
                                CTF Interstellar is dedicated to advancing cybersecurity education through hands-on,
                                real-world challenges. We believe that the best way to learn security is by doing,
                                and our platform provides a safe, legal environment to practice offensive and defensive
                                security techniques.
                            </p>
                            <p>
                                Whether you're a complete beginner or a seasoned security professional, our challenges
                                are designed to push your boundaries and expand your knowledge across multiple domains
                                including cryptography, web exploitation, binary analysis, and forensics.
                            </p>
                        </div>

                        <div className="mission-stats slide-in-right">
                            <div className="stat-box card">
                                <div className="stat-number">1,500+</div>
                                <div className="stat-label">Active Participants</div>
                            </div>
                            <div className="stat-box card">
                                <div className="stat-number">138</div>
                                <div className="stat-label">Total Challenges</div>
                            </div>
                            <div className="stat-box card">
                                <div className="stat-number">24/7</div>
                                <div className="stat-label">Platform Availability</div>
                            </div>
                            <div className="stat-box card">
                                <div className="stat-number">50+</div>
                                <div className="stat-label">Countries Represented</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What We Offer */}
            <section className="features-section">
                <div className="container">
                    <h2 className="section-title text-center fade-in">What We Offer</h2>

                    <div className="features-grid">
                        <div className="feature-card card fade-in">
                            <div className="feature-icon">🎯</div>
                            <h3>Diverse Challenges</h3>
                            <p>From beginner-friendly puzzles to advanced exploitation tasks across multiple security domains.</p>
                        </div>

                        <div className="feature-card card fade-in">
                            <div className="feature-icon">🏆</div>
                            <h3>Competitive Rankings</h3>
                            <p>Climb the leaderboard and prove your skills against the best hackers worldwide.</p>
                        </div>

                        <div className="feature-card card fade-in">
                            <div className="feature-icon">🌐</div>
                            <h3>Global Community</h3>
                            <p>Connect with like-minded security enthusiasts and learn from each other.</p>
                        </div>

                        <div className="feature-card card fade-in">
                            <div className="feature-icon">📚</div>
                            <h3>Learning Resources</h3>
                            <p>Access writeups, hints, and educational materials to accelerate your growth.</p>
                        </div>

                        <div className="feature-card card fade-in">
                            <div className="feature-icon">⚡</div>
                            <h3>Real-World Skills</h3>
                            <p>Practice techniques used by actual security professionals and penetration testers.</p>
                        </div>

                        <div className="feature-card card fade-in">
                            <div className="feature-icon">🔒</div>
                            <h3>Safe Environment</h3>
                            <p>Legal and controlled platform to practice hacking without crossing ethical boundaries.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="team-section">
                <div className="container">
                    <h2 className="section-title text-center fade-in">Command Crew</h2>
                    <p className="section-subtitle">Meet the experts behind CTF Interstellar</p>

                    <div className="team-grid">
                        {teamMembers.map((member, idx) => (
                            <div key={idx} className="team-card card fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                                <div className="team-avatar">{member.avatar}</div>
                                <h3 className="team-name">{member.name}</h3>
                                <p className="team-role">{member.role}</p>
                                <p className="team-bio">{member.bio}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="values-section">
                <div className="container">
                    <h2 className="section-title text-center fade-in">Our Values</h2>

                    <div className="values-grid">
                        <div className="value-item fade-in">
                            <div className="value-number">01</div>
                            <h3>Education First</h3>
                            <p>We prioritize learning and skill development over competition.</p>
                        </div>

                        <div className="value-item fade-in">
                            <div className="value-number">02</div>
                            <h3>Ethical Hacking</h3>
                            <p>All challenges promote responsible disclosure and ethical practices.</p>
                        </div>

                        <div className="value-item fade-in">
                            <div className="value-number">03</div>
                            <h3>Community Driven</h3>
                            <p>We grow and improve through feedback and collaboration.</p>
                        </div>

                        <div className="value-item fade-in">
                            <div className="value-number">04</div>
                            <h3>Inclusive Environment</h3>
                            <p>Everyone is welcome regardless of skill level or background.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="about-cta">
                <div className="container">
                    <div className="cta-card card">
                        <h2>Ready to Begin Your Journey?</h2>
                        <p>Join thousands of hackers improving their cybersecurity skills</p>
                        <div className="cta-buttons">
                            <a href="/challenges" className="btn btn-primary">
                                Start Hacking
                            </a>
                            <a href="/profile" className="btn btn-secondary">
                                Create Account
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;
