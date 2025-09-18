"use client";
import { motion } from "framer-motion";
import styled from "styled-components";

// Wrapper
const MarqueeWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  background: transparent;
  padding: 2rem 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

// Track
const MarqueeTrack = styled(motion.div)`
  display: flex;
  gap: 4rem;
  white-space: nowrap;
  flex-shrink: 0;
`;

// Solid white text
const SolidText = styled.span<{ $hoverColor: string }>`
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  font-weight: 900;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: white;
  transition: color 0.3s ease;

  &:hover {
    color: ${(props) => props.$hoverColor};
  }
`;

// Outlined stroke text
const OutlineText = styled.span<{ $hoverColor: string }>`
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  font-weight: 800;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 0.75rem;

  color: transparent;
  -webkit-text-stroke: 2px white;
  transition: -webkit-text-stroke 0.3s ease, color 0.3s ease;

  &:hover {
    -webkit-text-stroke: 2px ${(props) => props.$hoverColor};
    color: ${(props) => props.$hoverColor};
  }
`;

// Arrow inherits the parent style
const Arrow = styled.span`
  font-weight: 900;
  color: inherit;
`;

export default function Services() {
  // Each row with its own texts
  const row1 = ["Creative Design", "Innovative Strategy", "Futuristic Branding"];
  const row2 = ["Custom Development", "Digital Marketing", "SEO Optimization"];
  const row3 = ["UI/UX Experience", "Brand Growth", "Smart Solutions"];

  return (
    <section className="relative w-full">
      <MarqueeWrapper>
        {/* Row 1 - Solid White (hover pink) */}
        <MarqueeTrack
          animate={{ x: ["0%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 120, ease: "linear" }}
        >
          {row1.concat(row1).map((item, i) => (
            <SolidText key={i} $hoverColor="#ec4899">
              {item} <Arrow>➔</Arrow>
            </SolidText>
          ))}
        </MarqueeTrack>

        {/* Row 2 - Outline White (hover purple) */}
        <MarqueeTrack
          animate={{ x: ["-100%", "0%"] }}
          transition={{ repeat: Infinity, duration: 130, ease: "linear" }}
        >
          {row2.concat(row2).map((item, i) => (
            <OutlineText key={i} $hoverColor="#a855f7">
              {item} <Arrow>➔</Arrow>
            </OutlineText>
          ))}
        </MarqueeTrack>

        {/* Row 3 - Solid White (hover pink) */}
        <MarqueeTrack
          animate={{ x: ["0%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 125, ease: "linear" }}
        >
          {row3.concat(row3).map((item, i) => (
            <SolidText key={i} $hoverColor="#ec4899">
              {item} <Arrow>➔</Arrow>
            </SolidText>
          ))}
        </MarqueeTrack>
      </MarqueeWrapper>
    </section>
  );
}
