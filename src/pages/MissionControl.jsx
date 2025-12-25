import { useState } from 'react';
import './MissionControl.css';

function MissionControl() {
    const [openPhase, setOpenPhase] = useState(1);
    const [openFaq, setOpenFaq] = useState(null);

    const phases = [
        {
            id: 1,
            title: 'PHASE 1: DEPLOYMENT',
            status: 'ACTIVE',
            description: 'Begin the mission deployment. "Begin here, consists of 3-5 operations. Create account on the system."',
            objectives: [
                'Map 1: Starfleet',
                'No build artifacts'
            ]
        },
        {
            id: 2,
            title: 'PHASE 2: ENGAGEMENT',
            status: 'LOCKED',
            description: 'Decode packets, locate the Andromeda constellation and engage enemy forces via enigmatic error reports.',
            objectives: [
                'Contact: HTTP',
                'Establish: TCP/IP [TCP: 3569-EAL1]'
            ]
        },
        {
            id: 3,
            title: 'PHASE 3: EVALUATION',
            status: 'COMING SOON',
            description: 'Puzzles are generated in perpetual based on active results. Final battle for rank in the real "War Net Plan" is to likely acknowledge.',
            objectives: [
                'SQL',
                'Log',
                'IO'
            ]
        }
    ];

    const faqs = [
        {
            id: 1,
            question: 'What hardware specifications are required?',
            answer: 'A modern web browser with JavaScript enabled is all you need. No special hardware required. However, for reverse engineering challenges, a 64-bit system is recommended.'
        },
        {
            id: 2,
            question: 'Is this simulation suitable for experts (beginners)?',
            answer: 'Absolutely! We have challenges ranging from beginner to expert level. Start with the "EASY" tagged missions and work your way up through the difficulty levels.'
        },
        {
            id: 3,
            question: 'What is the duration of the operation?',
            answer: 'The CTF event runs for 72 hours straight. However, you can participate at any time during this window and work at your own pace.'
        }
    ];

    return (
        <div className="mission-control">
            {/* Header */}
            <section className="mc-header">
                <div className="container">
                    <div className="header-badge fade-in">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                        </svg>
                        MISSION PROTOCOL
                    </div>

                    <h1 className="page-title slide-in-left">
                        MISSION PROTOCOL
                    </h1>

                    <p className="page-description slide-in-left">
                        Your briefing for Interstellar deployment. Analyze the operational
                        phases below to execute successful flag capture and secure transmissions.
                    </p>

                    <div className="protocol-actions fade-in">
                        <button className="btn btn-primary">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <circle cx="12" cy="12" r="10" strokeWidth="2" />
                                <polygon points="10 8 16 12 10 16 10 8" fill="currentColor" />
                            </svg>
                            INITIATE SEQUENCE
                        </button>
                        <button className="btn btn-secondary">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            DOWNLOAD MANUAL
                        </button>
                    </div>
                </div>
            </section>

            {/* Operational Phases */}
            <section className="operational-phases">
                <div className="container">
                    <h2 className="section-title">OPERATIONAL PHASES</h2>

                    <div className="phases-grid">
                        {phases.map((phase) => (
                            <div
                                key={phase.id}
                                className={`phase-card card ${openPhase === phase.id ? 'active' : ''}`}
                                onClick={() => setOpenPhase(openPhase === phase.id ? null : phase.id)}
                            >
                                <div className="phase-header">
                                    <div className="phase-info">
                                        <span className="phase-number">PHASE {phase.id}</span>
                                        <h3 className="phase-title">{phase.title}</h3>
                                    </div>
                                    <span className={`phase-status ${phase.status.toLowerCase().replace(' ', '-')}`}>
                                        {phase.status}
                                    </span>
                                </div>

                                <p className="phase-description">{phase.description}</p>

                                {openPhase === phase.id && (
                                    <div className="phase-details">
                                        <h4 className="details-title">Objectives:</h4>
                                        <ul className="objectives-list">
                                            {phase.objectives.map((objective, idx) => (
                                                <li key={idx}>
                                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                                                    </svg>
                                                    {objective}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                <button className="expand-btn">
                                    <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        style={{
                                            transform: openPhase === phase.id ? 'rotate(180deg)' : 'rotate(0)',
                                            transition: 'transform 0.3s ease'
                                        }}
                                    >
                                        <path d="M6 9l6 6 6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tactical Data Bank */}
            <section className="tactical-data">
                <div className="container">
                    <h2 className="section-title">TACTICAL DATA BANK</h2>
                    <p className="section-subtitle">Frequently requested intelligence parameters.</p>

                    <div className="faq-list">
                        {faqs.map((faq) => (
                            <div
                                key={faq.id}
                                className={`faq-item card ${openFaq === faq.id ? 'active' : ''}`}
                                onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
                            >
                                <div className="faq-question">
                                    <span>{faq.question}</span>
                                    <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        style={{
                                            transform: openFaq === faq.id ? 'rotate(180deg)' : 'rotate(0)',
                                            transition: 'transform 0.3s ease'
                                        }}
                                    >
                                        <path d="M6 9l6 6 6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                {openFaq === faq.id && (
                                    <div className="faq-answer">
                                        {faq.answer}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="mc-cta">
                <div className="container">
                    <div className="cta-content card">
                        <h2 className="cta-title">Ready to Breach the System?</h2>
                        <p className="cta-description">
                            Registration is open. Suit up and be recognized for excellence.
                        </p>
                        <div className="cta-buttons">
                            <button className="btn btn-primary">Register Now</button>
                            <button className="btn btn-secondary">Join Discord</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default MissionControl;
