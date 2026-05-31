"use client";

import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { useEffect, useRef } from "react";

type CounterProps = {
  to: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  decimals?: number;
};

/** Counts up from 0 to `to` when scrolled into view. */
export default function Counter({
  to,
  suffix = "",
  prefix = "",
  duration = 1.6,
  decimals = 0,
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => v.toFixed(decimals));

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, to, {
      duration,
      ease: [0.21, 0.47, 0.32, 0.98],
    });
    return controls.stop;
  }, [inView, to, count, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}
