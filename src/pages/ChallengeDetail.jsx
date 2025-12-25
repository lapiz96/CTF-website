import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import './ChallengeDetail.css';

function ChallengeDetail() {
    const { id } = useParams();
    const [flag, setFlag] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [result, setResult] = useState(null);

    // Mock challenge data (in real app, fetch from API)
    const challenges = {
        1: {
            id: 1,
            title: 'Quantum Key',
            category: 'Nebula Crypto',
            difficulty: 'EASY',
            points: 500,
            solves: 342,
            description: 'The alien fleet is using a primitive rotating cipher. Decrypt their communications to intercept their strategic plans.',
            longDescription: `The enemy has intercepted our communications and is using a rotating cipher to encrypt their messages. 
      We've managed to capture one of their encrypted messages, but we need your help to decrypt it.
      
      The cipher appears to be a variant of the Caesar cipher, but with a twist - the rotation key changes based on the position in the message.
      
      Your mission is to decrypt the message and extract the flag.`,
            icon: '🔐',
            author: 'Commander Atlas',
            files: [
                { name: 'encrypted_message.txt', size: '2.4 KB', url: '#' },
                { name: 'cipher_hints.pdf', size: '156 KB', url: '#' }
            ],
            hints: [
                'The key rotates every 3 characters',
                'The initial rotation is 13',
                'Special characters and spaces are not encrypted'
            ],
            tags: ['cryptography', 'caesar', 'rotation'],
            correctFlag: 'CTF{r0t4t1ng_c1ph3r_cr4ck3d}'
        },
        2: {
            id: 2,
            title: 'Asteroid Injection',
            category: 'Asteroid Web',
            difficulty: 'MEDIUM',
            points: 850,
            solves: 89,
            description: 'A rogue asteroid mining bot has an exposed admin panel. Find and exploit the vulnerability.',
            longDescription: `We've detected a rogue asteroid mining bot with an exposed admin interface. 
      The bot appears to have a SQL injection vulnerability in its authentication system.
      
      Your task is to exploit this vulnerability to gain admin access and retrieve the flag from the database.`,
            icon: '🌐',
            author: 'Lt. Nova',
            files: [
                { name: 'target_url.txt', size: '1.1 KB', url: '#' }
            ],
            hints: [
                'Try common SQL injection payloads',
                'The admin username might be predictable',
                'Look for the flags table in the database'
            ],
            tags: ['web', 'sql-injection', 'authentication'],
            correctFlag: 'CTF{sql_1nj3ct10n_m4st3r}'
        },
        3: {
            id: 3,
            title: 'Buffer Overflow X',
            category: 'Black Hole Pwn',
            difficulty: 'HARD',
            points: 1200,
            solves: 12,
            description: 'Override the navigation system memory stack to redirect the ship and capture the flag.',
            longDescription: `The ship's navigation system has a critical buffer overflow vulnerability in its input validation routine.
      
      You need to craft a payload that will overflow the buffer and overwrite the return address to redirect execution to the hidden flag function.
      
      This challenge requires knowledge of x86-64 assembly, stack layout, and exploit development.`,
            icon: '💥',
            author: 'Admiral Cipher',
            files: [
                { name: 'nav_system', size: '24.8 KB', url: '#' },
                { name: 'nav_system.c', size: '3.2 KB', url: '#' },
                { name: 'libc.so.6', size: '1.9 MB', url: '#' }
            ],
            hints: [
                'Check the buffer size in the source code',
                'ASLR is disabled for this challenge',
                'The flag function is at address 0x40123a'
            ],
            tags: ['binary', 'pwn', 'buffer-overflow', 'x86-64'],
            correctFlag: 'CTF{buff3r_0v3rfl0w_pwn3d}'
        }
    };

    const challenge = challenges[id] || challenges[1];

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);

        if (flag.trim() === challenge.correctFlag) {
            setResult('correct');
        } else {
            setResult('incorrect');
        }
    };

    return (
        <div className="challenge-detail">
            <div className="container">
                {/* Breadcrumb */}
                <div className="breadcrumb fade-in">
                    <Link to="/challenges">← Back to Challenges</Link>
                </div>

                {/* Challenge Header */}
                <div className="challenge-hero card slide-in-left">
                    <div className="challenge-hero-content">
                        <div className="challenge-icon-large">{challenge.icon}</div>
                        <div className="challenge-info">
                            <div className="challenge-badges">
                                <span className={`difficulty-badge ${challenge.difficulty.toLowerCase()}`}>
                                    {challenge.difficulty}
                                </span>
                                <span className="category-badge">{challenge.category}</span>
                            </div>
                            <h1 className="challenge-hero-title">{challenge.title}</h1>
                            <p className="challenge-short-desc">{challenge.description}</p>
                            <div className="challenge-stats">
                                <div className="stat">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                    </svg>
                                    <span>{challenge.points} points</span>
                                </div>
                                <div className="stat">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" strokeWidth="2" />
                                        <circle cx="9" cy="7" r="4" strokeWidth="2" />
                                        <path d="M23 21v-2a4 4 0 0 0-3-3.87" strokeWidth="2" />
                                    </svg>
                                    <span>{challenge.solves} solves</span>
                                </div>
                                <div className="stat">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" strokeWidth="2" />
                                        <circle cx="12" cy="7" r="4" strokeWidth="2" />
                                    </svg>
                                    <span>{challenge.author}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="challenge-content">
                    {/* Main Content */}
                    <div className="main-column">
                        {/* Description */}
                        <div className="content-card card fade-in">
                            <h2 className="section-title">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" strokeWidth="2" />
                                    <polyline points="14 2 14 8 20 8" strokeWidth="2" />
                                    <line x1="16" y1="13" x2="8" y2="13" strokeWidth="2" />
                                    <line x1="16" y1="17" x2="8" y2="17" strokeWidth="2" />
                                    <polyline points="10 9 9 9 8 9" strokeWidth="2" />
                                </svg>
                                Mission Briefing
                            </h2>
                            <div className="description-content">
                                {challenge.longDescription.split('\n').map((paragraph, idx) => (
                                    <p key={idx}>{paragraph.trim()}</p>
                                ))}
                            </div>
                        </div>

                        {/* Files */}
                        <div className="content-card card fade-in">
                            <h2 className="section-title">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" strokeWidth="2" />
                                    <polyline points="13 2 13 9 20 9" strokeWidth="2" />
                                </svg>
                                Attached Files
                            </h2>
                            <div className="files-list">
                                {challenge.files.map((file, idx) => (
                                    <a key={idx} href={file.url} className="file-item">
                                        <div className="file-icon">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" strokeWidth="2" />
                                                <polyline points="14 2 14 8 20 8" strokeWidth="2" />
                                            </svg>
                                        </div>
                                        <div className="file-details">
                                            <span className="file-name">{file.name}</span>
                                            <span className="file-size">{file.size}</span>
                                        </div>
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" strokeWidth="2" />
                                        </svg>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Hints */}
                        <div className="content-card card fade-in">
                            <h2 className="section-title">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" strokeWidth="2" />
                                </svg>
                                Intelligence Hints
                            </h2>
                            <div className="hints-list">
                                {challenge.hints.map((hint, idx) => (
                                    <div key={idx} className="hint-item">
                                        <span className="hint-number">{idx + 1}</span>
                                        <span className="hint-text">{hint}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="sidebar-column">
                        {/* Submit Flag */}
                        <div className="content-card card fade-in sticky-card">
                            <h2 className="section-title">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" strokeWidth="2" />
                                    <line x1="4" y1="22" x2="4" y2="15" strokeWidth="2" />
                                </svg>
                                Submit Flag
                            </h2>
                            <form onSubmit={handleSubmit} className="flag-form">
                                <input
                                    type="text"
                                    value={flag}
                                    onChange={(e) => setFlag(e.target.value)}
                                    placeholder="CTF{...}"
                                    className="flag-input"
                                    required
                                />
                                <button type="submit" className="btn btn-primary btn-full">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                        <polyline points="20 6 9 17 4 12" strokeWidth="2" strokeLinecap="round" />
                                    </svg>
                                    Submit Flag
                                </button>
                            </form>

                            {submitted && result && (
                                <div className={`result-message ${result}`}>
                                    {result === 'correct' ? (
                                        <>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                                <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
                                                <path d="M9 12l2 2 4-4" />
                                            </svg>
                                            <div>
                                                <strong>Correct!</strong>
                                                <p>Challenge completed! +{challenge.points} points</p>
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                                <circle cx="12" cy="12" r="10" strokeWidth="2" />
                                                <line x1="15" y1="9" x2="9" y2="15" strokeWidth="2" />
                                                <line x1="9" y1="9" x2="15" y2="15" strokeWidth="2" />
                                            </svg>
                                            <div>
                                                <strong>Incorrect</strong>
                                                <p>That's not the correct flag. Try again!</p>
                                            </div>
                                        </>
                                    )}
                                </div>
                            )}
                        </div>

                        {/* Tags */}
                        <div className="content-card card fade-in">
                            <h2 className="section-title">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" strokeWidth="2" />
                                    <line x1="7" y1="7" x2="7.01" y2="7" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                                Tags
                            </h2>
                            <div className="tags-list">
                                {challenge.tags.map((tag, idx) => (
                                    <span key={idx} className="tag">{tag}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChallengeDetail;
