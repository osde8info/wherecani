"use client";

export function event(action: string, params: Record<string, unknown> = {}) {
  // Safely call gtag if it's available
  if (typeof window === "undefined") return;
  // @ts-ignore
  if (typeof window.gtag === "function") {
    // @ts-ignore
    window.gtag("event", action, params);
  }
}

export default { event };
