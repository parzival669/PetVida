import React from 'react';

export default function Logo({ className = "h-14 w-auto" }: { className?: string }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 550 250" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      style={{ userSelect: 'none' }}
    >
      {/* Decorative stars / heart in the upper right workspace */}
      <g id="decorations">
        {/* Yellow star/sparkle */}
        <path 
          d="M 425 45 L 427 52 L 434 54 L 427 56 L 425 63 L 423 56 L 416 54 L 423 52 Z" 
          fill="#ffd15c" 
          opacity="0.9"
        />
        {/* Lavender sparkle */}
        <path 
          d="M 440 80 L 441 83.5 L 445 84.5 L 441 85.5 L 440 89 L 439 85.5 L 435 84.5 L 439 83.5 Z" 
          fill="#c3b2f9" 
          opacity="0.8"
        />
        {/* Tiny pink heart */}
        <path 
          d="M 458 65 C 458 61 454 59 451 62 C 448 59 444 61 444 65 C 444 70 451 74 451 74 C 451 74 458 70 458 65 Z" 
          fill="#ff9ebb" 
        />
      </g>

      {/* Heart-Shaped Stethoscope Cord Frame */}
      <g id="stethoscope-frame">
        {/* Left Stethoscope Side: Turquoise/Cyan Tube (#5cc5b7) with earpieces */}
        {/* Earpieces & Headset on the left boundary */}
        <path 
          d="M 102,110 C 95,110 88,114 88,124 C 88,134 94,136 102,136" 
          stroke="#5cc5b7" 
          strokeWidth="4" 
          strokeLinecap="round" 
        />
        {/* Green eartips */}
        <circle cx="102" cy="110" r="5" fill="#7ed9cc" />
        <circle cx="102" cy="136" r="5" fill="#7ed9cc" />
        {/* Core headset branch */}
        <path 
          d="M 102,123 C 114,123 124,128 124,142" 
          stroke="#5cc5b7" 
          strokeWidth="4.5" 
          strokeLinecap="round" 
        />
        
        {/* Main Left-Half Heart Tube */}
        {/* Starts from heart middle cleavage, sweeps left and down, forming a protective frame */}
        <path 
          d="M 275,70 C 210,50 142,65 124,142 C 114,185 170,225 275,260" 
          stroke="#5cc5b7" 
          strokeWidth="5" 
          strokeLinecap="round" 
          fill="none"
        />

        {/* Right Stethoscope Side: Lavender/Purple Tube (#b79deb) with chestpiece */}
        {/* Main Right-Half Heart Tube: loops at top-right and runs down to chestpiece */}
        <path 
          d="M 275,70 C 330,50 410,56 405,110 C 400,162 480,185 415,225" 
          stroke="#b79deb" 
          strokeWidth="5" 
          strokeLinecap="round" 
          fill="none"
        />
        
        {/* Floating extension wire to chestpiece */}
        <path 
          d="M 415,225 C 430,222 475,202 495,198" 
          stroke="#b79deb" 
          strokeWidth="4.5" 
          strokeLinecap="round" 
          fill="none"
        />

        {/* Outer casing base connector */}
        <path d="M 495,198 L 500,196" stroke="#b79deb" strokeWidth="6" strokeLinecap="round" />

        {/* Stethoscope Chestpiece (Diaphragm) - Lavender & Teal striped pill style */}
        <g id="chestpiece" transform="rotate(30, 510, 185)">
          <circle cx="510" cy="185" r="18" fill="#b79deb" />
          <circle cx="510" cy="185" r="13" fill="#ffffff" />
          <circle cx="510" cy="185" r="10" fill="#6adad0" />
          <circle cx="510" cy="185" r="5" fill="#f8f9fa" />
        </g>
      </g>

      {/* Decorative Paw Print inside Left Heart Lobe */}
      <g id="paw-print">
        {/* Large central pad */}
        <path 
          d="M 125,92 C 120,86 138,72 145,76 C 151,80 151,90 144,95 C 137,100 131,98 125,92 Z" 
          fill="#ff9ebb" 
        />
        {/* Toes */}
        <circle cx="118" cy="80" r="4.5" fill="#c3b2f9" />
        <circle cx="127" cy="71" r="5" fill="#ff9ebb" />
        <circle cx="138" cy="69" r="5" fill="#c3b2f9" />
        <circle cx="149" cy="76" r="4.5" fill="#ff9ebb" />
      </g>

      {/* Main Text branding */}
      <g id="brand-text">
        {/* "Pet" in soft rounded letters */}
        <text 
          x="250" 
          y="155" 
          fontFamily="'Fredoka', 'Plus Jakarta Sans', var(--font-display), sans-serif" 
          fontWeight="600" 
          fontSize="72" 
          fill="#75a5e3" 
          textAnchor="end"
          letterSpacing="-1"
        >
          Pet
        </text>

        {/* "Vida" in flowing elegant script */}
        <text 
          x="248" 
          y="155" 
          fontFamily="'Satisfy', 'Pacifico', cursive" 
          fontSize="84" 
          fill="#ff8199" 
          textAnchor="start"
        >
          Vida
        </text>

        {/* Subtitle "CLÍNICA & PET SHOP" centered below */}
        <text 
          x="254" 
          y="196" 
          fontFamily="'Plus Jakarta Sans', var(--font-display), sans-serif" 
          fontWeight="800" 
          fontSize="15.5" 
          fill="#2dbbad" 
          letterSpacing="4" 
          textAnchor="middle"
        >
          CLÍNICA & PET SHOP
        </text>
      </g>
    </svg>
  );
}
