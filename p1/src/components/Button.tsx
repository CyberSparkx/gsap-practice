import { useRef, useCallback } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
 
gsap.registerPlugin(TextPlugin);
 
// ─── Types ───────────────────────────────────────────────────────────────────
 
type ButtonVariant = "dark" | "outline" | "ghost";
type ButtonSize    = "sm" | "md" | "lg";
 
export interface ButtonProps {
  /** Button label text */
  label: string;
  /** Click handler */
  onClick?: () => void;
  /** Visual style variant */
  variant?: ButtonVariant;
  /** Size preset */
  size?: ButtonSize;
  /** Override background color (CSS value) */
  bg?: string;
  /** Override text color (CSS value) */
  color?: string;
  /** Override border color (CSS value) */
  borderColor?: string;
  /** Override font-family (CSS value) */
  fontFamily?: string;
  /** Override font-size (CSS value) */
  fontSize?: string;
  /** Override letter-spacing (CSS value) */
  letterSpacing?: string;
  /** Override font-weight (CSS value) */
  fontWeight?: string | number;
  /** Override padding (CSS value) */
  padding?: string;
  /** Override border-width (CSS value) */
  borderWidth?: string;
  /** Extra class names */
  className?: string;
  /** Scramble characters used during animation */
  scrambleChars?: string;
  /** Duration of the scramble animation in seconds */
  animDuration?: number;
  /** Disabled state */
  disabled?: boolean;
  /** HTML button type */
  type?: "button" | "submit" | "reset";
}
 
// ─── Variant / Size presets ──────────────────────────────────────────────────
 
const VARIANT_STYLES: Record<ButtonVariant, React.CSSProperties> = {
  dark: {
    backgroundColor: "#2b2b2b",
    color:           "#ffffff",
    border:          "2px solid #2b2b2b",
  },
  outline: {
    backgroundColor: "transparent",
    color:           "#ffffff",
    border:          "2px solid #ffffff",
  },
  ghost: {
    backgroundColor: "transparent",
    color:           "#ffffff",
    border:          "2px solid transparent",
  },
};
 
const SIZE_STYLES: Record<ButtonSize, React.CSSProperties> = {
  sm: { padding: "6px 16px",  fontSize: "11px", letterSpacing: "0.1em" },
  md: { padding: "10px 28px", fontSize: "13px", letterSpacing: "0.15em" },
  lg: { padding: "14px 40px", fontSize: "16px", letterSpacing: "0.2em" },
};
 
// ─── GSAP scramble chars fallback (no ScrambleText plugin needed) ─────────────
// Uses a lightweight custom scramble built on TextPlugin + random chars.
 
const DEFAULT_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&";
 
function scrambleText(
  el: HTMLElement,
  finalText: string,
  duration: number,
  chars: string
) {
  const steps   = Math.max(8, Math.round(duration * 30));
  const stepDur = duration / steps;
 
  // Kill any running tl on the element
  gsap.killTweensOf(el);
 
  const tl = gsap.timeline();
  for (let i = 0; i < steps; i++) {
    const progress = i / steps;
    // How many chars from the final string to lock in
    const locked   = Math.floor(progress * finalText.length);
    tl.call(
      () => {
        let display = finalText.slice(0, locked);
        for (let j = locked; j < finalText.length; j++) {
          display += chars[Math.floor(Math.random() * chars.length)];
        }
        el.textContent = display;
      },
      undefined,
      i * stepDur
    );
  }
  // Lock final text
  tl.call(() => { el.textContent = finalText; }, undefined, duration);
}
 
// ─── Component ───────────────────────────────────────────────────────────────
 
export default function Button({
  label,
  onClick,
  variant       = "dark",
  size          = "md",
  bg,
  color,
  borderColor,
  fontFamily    = "'Courier New', Courier, monospace",
  fontSize,
  letterSpacing,
  fontWeight    = 700,
  padding,
  borderWidth,
  scrambleChars = DEFAULT_CHARS,
  animDuration  = 0.55,
  disabled      = false,
  type          = "button",
  className     = "",
}: ButtonProps) {
  const textRef = useRef<HTMLSpanElement>(null);
 
  // Merge preset → prop overrides
  const baseStyle: React.CSSProperties = {
    // Variant base
    ...VARIANT_STYLES[variant],
    // Size base
    ...SIZE_STYLES[size],
    // Typography
    fontFamily,
    fontWeight,
    textTransform: "uppercase" as const,
    // Prop overrides
    ...(bg           && { backgroundColor: bg }),
    ...(color        && { color }),
    ...(borderColor  && { borderColor }),
    ...(fontSize     && { fontSize }),
    ...(letterSpacing && { letterSpacing }),
    ...(padding      && { padding }),
    ...(borderWidth  && { borderWidth }),
    // Base chrome
    cursor:         disabled ? "not-allowed" : "pointer",
    opacity:        disabled ? 0.5 : 1,
    display:        "inline-flex",
    alignItems:     "center",
    justifyContent: "center",
    position:       "relative" as const,
    overflow:       "hidden",
    outline:        "none",
    transition:     "opacity 0.2s",
    userSelect:     "none" as const,
  };
 
  const handleMouseEnter = useCallback(() => {
    if (disabled || !textRef.current) return;
    scrambleText(textRef.current, label, animDuration, scrambleChars);
  }, [disabled, label, animDuration, scrambleChars]);
 
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      className={className}
      style={baseStyle}
    >
      <span ref={textRef}>{label}</span>
    </button>
  );
}
 