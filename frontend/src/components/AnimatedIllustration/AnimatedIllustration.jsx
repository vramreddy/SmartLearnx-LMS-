import React from "react";

// Reusable animated SVG illustrations — no external URLs needed
const AnimatedIllustration = ({ type = "mission" }) => {
  const illustrations = {
    mission: <MissionIllustration />,
    vision: <VisionIllustration />,
    values: <ValuesIllustration />,
    contact: <ContactIllustration />,
  };

  return (
    <div style={{ width: "100%", maxWidth: 480, margin: "0 auto", position: "relative" }}>
      <style>{animationCSS}</style>
      {illustrations[type] || illustrations.mission}
    </div>
  );
};

/* ─── MISSION: Globe with orbiting elements ─── */
const MissionIllustration = () => (
  <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="ilu-svg">
    <defs>
      <linearGradient id="mGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3B82F6" />
        <stop offset="100%" stopColor="#06B6D4" />
      </linearGradient>
      <linearGradient id="mGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#60A5FA" />
        <stop offset="100%" stopColor="#34D399" />
      </linearGradient>
      <radialGradient id="mGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.25" />
        <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
      </radialGradient>
    </defs>

    {/* Background glow */}
    <circle cx="200" cy="200" r="180" fill="url(#mGlow)" className="ilu-pulse" />

    {/* Globe */}
    <circle cx="200" cy="200" r="90" fill="url(#mGrad1)" opacity="0.15" className="ilu-pulse" />
    <circle cx="200" cy="200" r="90" stroke="url(#mGrad1)" strokeWidth="3" fill="none" />
    {/* Globe lines */}
    <ellipse cx="200" cy="200" rx="90" ry="40" stroke="#3B82F6" strokeWidth="1.5" fill="none" opacity="0.5" />
    <ellipse cx="200" cy="200" rx="40" ry="90" stroke="#3B82F6" strokeWidth="1.5" fill="none" opacity="0.5" />
    <line x1="110" y1="200" x2="290" y2="200" stroke="#3B82F6" strokeWidth="1" opacity="0.3" />
    <line x1="200" y1="110" x2="200" y2="290" stroke="#3B82F6" strokeWidth="1" opacity="0.3" />

    {/* Orbiting book */}
    <g className="ilu-orbit">
      <rect x="180" y="80" width="40" height="30" rx="4" fill="url(#mGrad2)" />
      <line x1="200" y1="82" x2="200" y2="108" stroke="white" strokeWidth="1.5" opacity="0.6" />
      <rect x="184" y="84" width="12" height="2" rx="1" fill="white" opacity="0.8" />
      <rect x="184" y="89" width="10" height="2" rx="1" fill="white" opacity="0.6" />
    </g>

    {/* Floating graduation cap */}
    <g className="ilu-float-1" transform="translate(300, 150)">
      <polygon points="0,-12 20,0 0,8 -20,0" fill="#3B82F6" opacity="0.9" />
      <line x1="0" y1="0" x2="0" y2="16" stroke="#3B82F6" strokeWidth="1.5" />
      <circle cx="0" cy="17" r="2.5" fill="#06B6D4" />
    </g>

    {/* Floating star */}
    <g className="ilu-float-2" transform="translate(100, 140)">
      <polygon points="0,-15 4,-5 15,-5 6,2 9,13 0,7 -9,13 -6,2 -15,-5 -4,-5" fill="#60A5FA" opacity="0.7" />
    </g>

    {/* Floating dots */}
    <circle cx="320" cy="280" r="6" fill="#06B6D4" opacity="0.5" className="ilu-float-3" />
    <circle cx="80" cy="260" r="4" fill="#3B82F6" opacity="0.4" className="ilu-float-1" />
    <circle cx="130" cy="320" r="5" fill="#60A5FA" opacity="0.3" className="ilu-float-2" />
    <circle cx="280" cy="100" r="3" fill="#34D399" opacity="0.5" className="ilu-float-3" />

    {/* Connection lines (people connecting) */}
    <g opacity="0.3">
      <line x1="120" y1="300" x2="200" y2="290" stroke="#3B82F6" strokeWidth="1" strokeDasharray="4,4" className="ilu-dash" />
      <line x1="280" y1="300" x2="200" y2="290" stroke="#06B6D4" strokeWidth="1" strokeDasharray="4,4" className="ilu-dash" />
    </g>

    {/* People icons */}
    <g transform="translate(110, 310)" className="ilu-float-1" opacity="0.8">
      <circle cx="0" cy="-6" r="6" fill="#3B82F6" />
      <path d="M-10,8 Q0,-2 10,8" fill="#3B82F6" />
    </g>
    <g transform="translate(200, 320)" className="ilu-float-2" opacity="0.8">
      <circle cx="0" cy="-6" r="6" fill="#06B6D4" />
      <path d="M-10,8 Q0,-2 10,8" fill="#06B6D4" />
    </g>
    <g transform="translate(290, 310)" className="ilu-float-3" opacity="0.8">
      <circle cx="0" cy="-6" r="6" fill="#60A5FA" />
      <path d="M-10,8 Q0,-2 10,8" fill="#60A5FA" />
    </g>
  </svg>
);

/* ─── VISION: Rocket / Telescope ─── */
const VisionIllustration = () => (
  <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="ilu-svg">
    <defs>
      <linearGradient id="vGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#8B5CF6" />
        <stop offset="100%" stopColor="#EC4899" />
      </linearGradient>
      <linearGradient id="vGrad2" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#A855F7" />
        <stop offset="100%" stopColor="#F472B6" />
      </linearGradient>
      <radialGradient id="vGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.2" />
        <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
      </radialGradient>
    </defs>

    {/* Background glow */}
    <circle cx="200" cy="200" r="180" fill="url(#vGlow)" className="ilu-pulse" />

    {/* Rocket body */}
    <g className="ilu-rocket">
      <path d="M200,100 Q220,140 220,200 L200,220 L180,200 Q180,140 200,100Z" fill="url(#vGrad1)" />
      {/* Rocket window */}
      <circle cx="200" cy="160" r="14" fill="white" opacity="0.3" />
      <circle cx="200" cy="160" r="10" fill="white" opacity="0.5" />
      {/* Rocket fins */}
      <path d="M180,195 L160,225 L180,210Z" fill="#A855F7" opacity="0.8" />
      <path d="M220,195 L240,225 L220,210Z" fill="#A855F7" opacity="0.8" />
      {/* Rocket nose */}
      <circle cx="200" cy="108" r="5" fill="#F472B6" opacity="0.8" />
    </g>

    {/* Flame */}
    <g className="ilu-flame">
      <ellipse cx="200" cy="240" rx="12" ry="25" fill="#F59E0B" opacity="0.8" />
      <ellipse cx="200" cy="245" rx="8" ry="18" fill="#F97316" opacity="0.9" />
      <ellipse cx="200" cy="248" rx="4" ry="12" fill="#FCD34D" />
    </g>

    {/* Stars */}
    <g className="ilu-twinkle-1">
      <polygon points="320,100 323,108 331,108 325,113 327,121 320,116 313,121 315,113 309,108 317,108" fill="#F472B6" opacity="0.6" />
    </g>
    <g className="ilu-twinkle-2">
      <polygon points="90,130 92,136 98,136 93,139 95,145 90,142 85,145 87,139 82,136 88,136" fill="#A855F7" opacity="0.5" />
    </g>
    <g className="ilu-twinkle-3">
      <polygon points="340,250 342,255 347,255 343,258 345,263 340,260 335,263 337,258 332,255 338,255" fill="#8B5CF6" opacity="0.4" />
    </g>

    {/* Floating clouds / smoke */}
    <circle cx="185" cy="270" r="10" fill="#E9D5FF" opacity="0.5" className="ilu-float-3" />
    <circle cx="215" cy="275" r="8" fill="#FBCFE8" opacity="0.4" className="ilu-float-1" />
    <circle cx="195" cy="285" r="12" fill="#E9D5FF" opacity="0.3" className="ilu-float-2" />

    {/* Orbit rings */}
    <ellipse cx="200" cy="200" rx="150" ry="50" stroke="#8B5CF6" strokeWidth="1" fill="none" opacity="0.15" transform="rotate(-20, 200, 200)" />
    <ellipse cx="200" cy="200" rx="160" ry="55" stroke="#EC4899" strokeWidth="0.8" fill="none" opacity="0.1" transform="rotate(-20, 200, 200)" />

    {/* Orbiting planet */}
    <g className="ilu-orbit-slow">
      <circle cx="200" cy="80" r="12" fill="url(#vGrad2)" opacity="0.7" />
      <circle cx="200" cy="80" r="5" fill="white" opacity="0.3" />
    </g>

    {/* Floating dots */}
    <circle cx="75" cy="280" r="4" fill="#EC4899" opacity="0.4" className="ilu-float-1" />
    <circle cx="330" cy="310" r="3" fill="#8B5CF6" opacity="0.3" className="ilu-float-2" />
    <circle cx="110" cy="80" r="3" fill="#F472B6" opacity="0.3" className="ilu-float-3" />

    {/* Lightbulb icon (idea) */}
    <g transform="translate(310, 170)" className="ilu-float-2" opacity="0.6">
      <path d="M0,-18 Q12,-10 8,4 L-8,4 Q-12,-10 0,-18Z" fill="#FCD34D" />
      <rect x="-5" y="4" width="10" height="6" rx="2" fill="#F59E0B" />
      <line x1="-3" y1="12" x2="3" y2="12" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" />
    </g>
  </svg>
);

/* ─── VALUES: Heart with connected elements ─── */
const ValuesIllustration = () => (
  <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="ilu-svg">
    <defs>
      <linearGradient id="valGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#10B981" />
        <stop offset="100%" stopColor="#059669" />
      </linearGradient>
      <linearGradient id="valGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#34D399" />
        <stop offset="100%" stopColor="#6EE7B7" />
      </linearGradient>
      <radialGradient id="valGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#10B981" stopOpacity="0.2" />
        <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
      </radialGradient>
    </defs>

    {/* Background glow */}
    <circle cx="200" cy="200" r="180" fill="url(#valGlow)" className="ilu-pulse" />

    {/* Central heart */}
    <g className="ilu-heartbeat" transform="translate(200, 190)">
      <path d="M0,-45 C-25,-70 -70,-50 -70,-20 C-70,20 -10,55 0,70 C10,55 70,20 70,-20 C70,-50 25,-70 0,-45Z"
        fill="url(#valGrad1)" opacity="0.2" />
      <path d="M0,-45 C-25,-70 -70,-50 -70,-20 C-70,20 -10,55 0,70 C10,55 70,20 70,-20 C70,-50 25,-70 0,-45Z"
        stroke="url(#valGrad1)" strokeWidth="3" fill="none" />
    </g>

    {/* Shield check inside heart */}
    <g transform="translate(185, 175)" opacity="0.7">
      <path d="M15,0 L30,8 L30,22 Q30,35 15,40 Q0,35 0,22 L0,8Z" fill="url(#valGrad2)" opacity="0.3" />
      <polyline points="8,20 14,26 24,14" stroke="#059669" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </g>

    {/* Surrounding value nodes */}
    {/* Quality */}
    <g className="ilu-float-1" transform="translate(100, 110)">
      <circle r="24" fill="white" stroke="#10B981" strokeWidth="2" filter="drop-shadow(0 2px 8px rgba(16,185,129,0.2))" />
      <rect x="-10" y="-10" width="20" height="16" rx="2" fill="#10B981" opacity="0.8" />
      <rect x="-7" y="-6" width="8" height="2" rx="1" fill="white" opacity="0.9" />
      <rect x="-7" y="-2" width="12" height="2" rx="1" fill="white" opacity="0.7" />
      <rect x="-7" y="2" width="6" height="2" rx="1" fill="white" opacity="0.5" />
      <polygon points="0,8 3,14 -3,14" fill="#059669" opacity="0.6" />
    </g>

    {/* Innovation */}
    <g className="ilu-float-2" transform="translate(300, 110)">
      <circle r="24" fill="white" stroke="#34D399" strokeWidth="2" filter="drop-shadow(0 2px 8px rgba(52,211,153,0.2))" />
      <circle cx="0" cy="-3" r="10" fill="none" stroke="#10B981" strokeWidth="2" />
      <line x1="-4" y1="-3" x2="4" y2="-3" stroke="#10B981" strokeWidth="1.5" />
      <line x1="0" y1="-7" x2="0" y2="1" stroke="#10B981" strokeWidth="1.5" />
      <line x1="0" y1="7" x2="0" y2="12" stroke="#10B981" strokeWidth="2" strokeLinecap="round" />
    </g>

    {/* Community */}
    <g className="ilu-float-3" transform="translate(80, 290)">
      <circle r="24" fill="white" stroke="#059669" strokeWidth="2" filter="drop-shadow(0 2px 8px rgba(5,150,105,0.2))" />
      <circle cx="-6" cy="-6" r="5" fill="#10B981" opacity="0.8" />
      <circle cx="6" cy="-6" r="5" fill="#34D399" opacity="0.8" />
      <circle cx="0" cy="4" r="5" fill="#059669" opacity="0.8" />
    </g>

    {/* Growth */}
    <g className="ilu-float-1" transform="translate(320, 290)">
      <circle r="24" fill="white" stroke="#6EE7B7" strokeWidth="2" filter="drop-shadow(0 2px 8px rgba(110,231,183,0.2))" />
      <polyline points="-10,8 -3,0 3,4 10,-8" stroke="#10B981" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <polygon points="8,-10 14,-8 10,-4" fill="#10B981" opacity="0.8" />
    </g>

    {/* Connection lines (dashed) */}
    <g opacity="0.25">
      <line x1="120" y1="130" x2="170" y2="170" stroke="#10B981" strokeWidth="1.5" strokeDasharray="6,4" className="ilu-dash" />
      <line x1="280" y1="130" x2="230" y2="170" stroke="#34D399" strokeWidth="1.5" strokeDasharray="6,4" className="ilu-dash" />
      <line x1="100" y1="270" x2="170" y2="230" stroke="#059669" strokeWidth="1.5" strokeDasharray="6,4" className="ilu-dash" />
      <line x1="300" y1="270" x2="230" y2="230" stroke="#6EE7B7" strokeWidth="1.5" strokeDasharray="6,4" className="ilu-dash" />
    </g>

    {/* Floating particles */}
    <circle cx="160" cy="80" r="3" fill="#34D399" opacity="0.4" className="ilu-float-2" />
    <circle cx="250" cy="340" r="4" fill="#10B981" opacity="0.3" className="ilu-float-1" />
    <circle cx="50" cy="200" r="3" fill="#6EE7B7" opacity="0.4" className="ilu-float-3" />
    <circle cx="350" cy="200" r="3.5" fill="#059669" opacity="0.3" className="ilu-float-2" />
  </svg>
);

/* ─── CONTACT: Envelope / Message ─── */
const ContactIllustration = () => (
  <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="ilu-svg">
    <defs>
      <linearGradient id="cGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#8B5CF6" />
        <stop offset="100%" stopColor="#3B82F6" />
      </linearGradient>
      <linearGradient id="cGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#A855F7" />
        <stop offset="100%" stopColor="#6366F1" />
      </linearGradient>
      <radialGradient id="cGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.2" />
        <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
      </radialGradient>
    </defs>

    {/* Background glow */}
    <circle cx="200" cy="200" r="180" fill="url(#cGlow)" className="ilu-pulse" />

    {/* Main envelope */}
    <g className="ilu-float-gentle">
      {/* Envelope body */}
      <rect x="110" y="150" width="180" height="120" rx="12" fill="white" stroke="url(#cGrad1)" strokeWidth="2.5"
        filter="drop-shadow(0 8px 24px rgba(139,92,246,0.15))" />
      {/* Envelope flap */}
      <path d="M112,152 L200,210 L288,152" stroke="url(#cGrad1)" strokeWidth="2.5" fill="none" strokeLinejoin="round" />
      {/* Bottom fold lines */}
      <path d="M112,268 L170,220" stroke="#8B5CF6" strokeWidth="1" opacity="0.2" />
      <path d="M288,268 L230,220" stroke="#8B5CF6" strokeWidth="1" opacity="0.2" />
      {/* Content lines inside */}
      <rect x="140" y="215" width="80" height="4" rx="2" fill="#8B5CF6" opacity="0.12" />
      <rect x="140" y="225" width="60" height="4" rx="2" fill="#8B5CF6" opacity="0.08" />
    </g>

    {/* Floating paper plane */}
    <g className="ilu-fly" transform="translate(290, 100)">
      <path d="M0,0 L25,-10 L8,5Z" fill="url(#cGrad2)" opacity="0.8" />
      <path d="M8,5 L25,-10 L15,10Z" fill="#A855F7" opacity="0.5" />
      {/* Trail */}
      <line x1="-5" y1="3" x2="-25" y2="13" stroke="#A855F7" strokeWidth="1" opacity="0.3" strokeDasharray="3,3" />
      <line x1="-8" y1="8" x2="-30" y2="20" stroke="#6366F1" strokeWidth="0.8" opacity="0.2" strokeDasharray="3,3" />
    </g>

    {/* Chat bubbles */}
    <g className="ilu-float-1" transform="translate(85, 110)">
      <rect x="-25" y="-15" width="50" height="30" rx="15" fill="url(#cGrad2)" opacity="0.8" />
      <rect x="-15" y="-5" width="20" height="3" rx="1.5" fill="white" opacity="0.7" />
      <rect x="-15" y="1" width="14" height="3" rx="1.5" fill="white" opacity="0.5" />
      <polygon points="-10,15 -5,15 -15,25" fill="url(#cGrad2)" opacity="0.8" />
    </g>

    <g className="ilu-float-2" transform="translate(320, 240)">
      <rect x="-22" y="-12" width="44" height="24" rx="12" fill="#6366F1" opacity="0.15" stroke="#6366F1" strokeWidth="1.5" />
      <circle cx="-8" cy="0" r="2.5" fill="#6366F1" opacity="0.6" />
      <circle cx="0" cy="0" r="2.5" fill="#8B5CF6" opacity="0.6" />
      <circle cx="8" cy="0" r="2.5" fill="#A855F7" opacity="0.6" />
    </g>

    {/* Notification bell */}
    <g className="ilu-ring" transform="translate(310, 150)">
      <path d="M0,-16 Q-12,-8 -12,4 L12,4 Q12,-8 0,-16Z" fill="#FCD34D" opacity="0.8" />
      <rect x="-14" y="4" width="28" height="4" rx="2" fill="#F59E0B" opacity="0.7" />
      <circle cx="0" cy="-17" r="3" fill="#F97316" />
      {/* Notification dot */}
      <circle cx="10" cy="-12" r="5" fill="#EF4444" opacity="0.9" />
      <text x="10" y="-9" textAnchor="middle" fill="white" fontSize="7" fontWeight="bold">1</text>
    </g>

    {/* @ symbol */}
    <g className="ilu-float-3" transform="translate(90, 280)" opacity="0.5">
      <circle cx="0" cy="0" r="16" stroke="#8B5CF6" strokeWidth="2" fill="none" />
      <path d="M8,-2 A8,8 0 1,0 8,6 L12,6 L12,-2 A12,12 0 1,1 -2,12" stroke="#A855F7" strokeWidth="1.5" fill="none" />
    </g>

    {/* Floating hearts (love messages) */}
    <g className="ilu-float-1" transform="translate(140, 90)" opacity="0.4">
      <path d="M0,-6 C-4,-12 -12,-8 -12,-3 C-12,4 -2,9 0,12 C2,9 12,4 12,-3 C12,-8 4,-12 0,-6Z" fill="#EC4899" />
    </g>
    <g className="ilu-float-2" transform="translate(270, 310)" opacity="0.3">
      <path d="M0,-5 C-3,-9 -9,-7 -9,-3 C-9,3 -1,7 0,9 C1,7 9,3 9,-3 C9,-7 3,-9 0,-5Z" fill="#F472B6" />
    </g>

    {/* Floating dots */}
    <circle cx="55" cy="180" r="4" fill="#3B82F6" opacity="0.3" className="ilu-float-3" />
    <circle cx="350" cy="310" r="3" fill="#8B5CF6" opacity="0.3" className="ilu-float-1" />
    <circle cx="160" cy="340" r="5" fill="#6366F1" opacity="0.2" className="ilu-float-2" />
    <circle cx="250" cy="80" r="3.5" fill="#A855F7" opacity="0.3" className="ilu-float-3" />

    {/* Wi-Fi / signal arcs */}
    <g transform="translate(200, 130)" opacity="0.15">
      <path d="M-30,-10 Q0,-30 30,-10" stroke="#8B5CF6" strokeWidth="2" fill="none" />
      <path d="M-20,-5 Q0,-20 20,-5" stroke="#8B5CF6" strokeWidth="2" fill="none" />
      <path d="M-10,0 Q0,-10 10,0" stroke="#8B5CF6" strokeWidth="2" fill="none" />
    </g>
  </svg>
);

/* ─── CSS ANIMATIONS ─── */
const animationCSS = `
  .ilu-svg {
    width: 100%;
    height: auto;
    overflow: visible;
  }

  @keyframes ilu-pulse-kf {
    0%, 100% { transform: scale(1); opacity: 1; }
    50% { transform: scale(1.05); opacity: 0.8; }
  }
  .ilu-pulse {
    animation: ilu-pulse-kf 4s ease-in-out infinite;
    transform-origin: center;
  }

  @keyframes ilu-float-kf-1 {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-12px) rotate(3deg); }
  }
  .ilu-float-1 {
    animation: ilu-float-kf-1 4s ease-in-out infinite;
  }

  @keyframes ilu-float-kf-2 {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-10px) rotate(-3deg); }
  }
  .ilu-float-2 {
    animation: ilu-float-kf-2 5s ease-in-out infinite;
    animation-delay: 0.5s;
  }

  @keyframes ilu-float-kf-3 {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-8px) rotate(2deg); }
  }
  .ilu-float-3 {
    animation: ilu-float-kf-3 6s ease-in-out infinite;
    animation-delay: 1s;
  }

  @keyframes ilu-float-gentle-kf {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-6px); }
  }
  .ilu-float-gentle {
    animation: ilu-float-gentle-kf 5s ease-in-out infinite;
  }

  @keyframes ilu-orbit-kf {
    0% { transform: rotate(0deg) translateX(120px) rotate(0deg); }
    100% { transform: rotate(360deg) translateX(120px) rotate(-360deg); }
  }
  .ilu-orbit {
    animation: ilu-orbit-kf 12s linear infinite;
    transform-origin: 200px 200px;
  }

  @keyframes ilu-orbit-slow-kf {
    0% { transform: rotate(0deg) translateX(130px) rotate(0deg); }
    100% { transform: rotate(-360deg) translateX(130px) rotate(360deg); }
  }
  .ilu-orbit-slow {
    animation: ilu-orbit-slow-kf 18s linear infinite;
    transform-origin: 200px 200px;
  }

  @keyframes ilu-rocket-kf {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }
  .ilu-rocket {
    animation: ilu-rocket-kf 3s ease-in-out infinite;
  }

  @keyframes ilu-flame-kf {
    0%, 100% { transform: scaleY(1); opacity: 0.8; }
    25% { transform: scaleY(1.3); opacity: 1; }
    50% { transform: scaleY(0.85); opacity: 0.7; }
    75% { transform: scaleY(1.15); opacity: 0.9; }
  }
  .ilu-flame {
    animation: ilu-flame-kf 0.6s ease-in-out infinite;
    transform-origin: center top;
  }

  @keyframes ilu-twinkle-kf {
    0%, 100% { opacity: 0.6; transform: scale(1); }
    50% { opacity: 0.2; transform: scale(0.7); }
  }
  .ilu-twinkle-1 { animation: ilu-twinkle-kf 2s ease-in-out infinite; }
  .ilu-twinkle-2 { animation: ilu-twinkle-kf 2.5s ease-in-out infinite; animation-delay: 0.8s; }
  .ilu-twinkle-3 { animation: ilu-twinkle-kf 3s ease-in-out infinite; animation-delay: 1.5s; }

  @keyframes ilu-heartbeat-kf {
    0%, 100% { transform: translate(200px, 190px) scale(1); }
    15% { transform: translate(200px, 190px) scale(1.08); }
    30% { transform: translate(200px, 190px) scale(1); }
    45% { transform: translate(200px, 190px) scale(1.05); }
    60% { transform: translate(200px, 190px) scale(1); }
  }
  .ilu-heartbeat {
    animation: ilu-heartbeat-kf 2s ease-in-out infinite;
    transform-origin: 0 0;
  }

  @keyframes ilu-fly-kf {
    0%, 100% { transform: translate(290px, 100px) rotate(-5deg); }
    25% { transform: translate(280px, 90px) rotate(0deg); }
    50% { transform: translate(295px, 85px) rotate(-8deg); }
    75% { transform: translate(285px, 95px) rotate(-3deg); }
  }
  .ilu-fly {
    animation: ilu-fly-kf 4s ease-in-out infinite;
  }

  @keyframes ilu-ring-kf {
    0%, 90%, 100% { transform: translate(310px, 150px) rotate(0deg); }
    92% { transform: translate(310px, 150px) rotate(8deg); }
    94% { transform: translate(310px, 150px) rotate(-8deg); }
    96% { transform: translate(310px, 150px) rotate(5deg); }
    98% { transform: translate(310px, 150px) rotate(-5deg); }
  }
  .ilu-ring {
    animation: ilu-ring-kf 4s ease-in-out infinite;
    transform-origin: 0 0;
  }

  @keyframes ilu-dash-kf {
    0% { stroke-dashoffset: 0; }
    100% { stroke-dashoffset: 20; }
  }
  .ilu-dash {
    animation: ilu-dash-kf 2s linear infinite;
  }
`;

export default AnimatedIllustration;
