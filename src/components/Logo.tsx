"use client";

import { motion } from "framer-motion";

type LogoProps = {
  className?: string;
  showWordmark?: boolean;
  animated?: boolean;
};

/**
 * DeveloperHaseeb brand mark.
 * A hexagonal "code bracket + H" glyph rendered in the brand green gradient,
 * paired with the wordmark "developer<haseeb>".
 */
export default function Logo({
  className = "",
  showWordmark = true,
  animated = true,
}: LogoProps) {
  const MarkWrap = animated ? motion.span : "span";
  const markProps = animated
    ? {
        whileHover: { rotate: -6, scale: 1.05 },
        transition: { type: "spring" as const, stiffness: 300, damping: 18 },
      }
    : {};

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <MarkWrap className="inline-flex" {...markProps}>
        <svg
          width="34"
          height="34"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="dh-grad" x1="6" y1="4" x2="42" y2="44">
              <stop offset="0" stopColor="#32d583" />
              <stop offset="0.55" stopColor="#12b76a" />
              <stop offset="1" stopColor="#027a48" />
            </linearGradient>
          </defs>
          {/* hex container */}
          <path
            d="M24 2.5 42.5 13v22L24 45.5 5.5 35V13L24 2.5Z"
            fill="#0a0a0a"
          />
          <path
            d="M24 2.5 42.5 13v22L24 45.5 5.5 35V13L24 2.5Z"
            stroke="url(#dh-grad)"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          {/* left bracket */}
          <path
            d="M17.5 17 12 24l5.5 7"
            stroke="url(#dh-grad)"
            strokeWidth="2.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* right bracket */}
          <path
            d="M30.5 17 36 24l-5.5 7"
            stroke="url(#dh-grad)"
            strokeWidth="2.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* H slash */}
          <path
            d="M26.5 15.5 21.5 32.5"
            stroke="#ffffff"
            strokeWidth="2.6"
            strokeLinecap="round"
          />
        </svg>
      </MarkWrap>

      {showWordmark && (
        <span className="text-[1.05rem] font-semibold tracking-tight leading-none">
          developer
          <span className="text-brand-600">haseeb</span>
        </span>
      )}
    </span>
  );
}
