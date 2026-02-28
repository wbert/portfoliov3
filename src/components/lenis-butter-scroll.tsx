"use client";

import { useEffect } from "react";
import { registerButterScroll } from "@/lib/butter-scroll";

const KEYBOARD_SCROLL: Record<string, number> = {
  ArrowDown: 120,
  ArrowUp: -120,
  PageDown: 680,
  PageUp: -680,
  " ": 680,
};

const WHEEL_DRAG = 0.86;
const TOUCH_DRAG = 1.05;
const SCROLL_EASING = 0.075;

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

function resolveTarget(target: string | number, offset: number) {
  if (typeof target === "number") {
    return target;
  }

  if (!target.startsWith("#")) {
    return window.scrollY;
  }

  const section = document.getElementById(target.slice(1));
  if (!section) {
    return window.scrollY;
  }

  const top = section.getBoundingClientRect().top + window.scrollY - offset;
  return Math.max(0, top);
}

function isEditableTarget(target: EventTarget | null) {
  if (!(target instanceof HTMLElement)) {
    return false;
  }

  const tag = target.tagName.toLowerCase();
  return (
    tag === "input" ||
    tag === "textarea" ||
    tag === "select" ||
    target.isContentEditable
  );
}

export function LenisButterScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let current = window.scrollY;
    let target = window.scrollY;
    let frameId = 0;
    let touchY = 0;
    let lastProgrammaticScroll = 0;

    const maxScroll = () =>
      Math.max(0, document.documentElement.scrollHeight - window.innerHeight);

    const setTarget = (value: number) => {
      target = clamp(value, 0, maxScroll());
    };

    const onWheel = (event: WheelEvent) => {
      event.preventDefault();
      setTarget(target + event.deltaY * WHEEL_DRAG);
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.metaKey || event.ctrlKey || event.altKey || isEditableTarget(event.target)) {
        return;
      }

      if (event.key === "Home") {
        event.preventDefault();
        setTarget(0);
        return;
      }

      if (event.key === "End") {
        event.preventDefault();
        setTarget(maxScroll());
        return;
      }

      const delta = KEYBOARD_SCROLL[event.key];
      if (!delta) {
        return;
      }

      const keyDirection = event.shiftKey && event.key === " " ? -1 : 1;
      event.preventDefault();
      setTarget(target + delta * keyDirection);
    };

    const onTouchStart = (event: TouchEvent) => {
      touchY = event.touches[0]?.clientY ?? 0;
    };

    const onTouchMove = (event: TouchEvent) => {
      if (event.touches.length > 1) {
        return;
      }

      const nextY = event.touches[0]?.clientY ?? touchY;
      const delta = (touchY - nextY) * TOUCH_DRAG;
      touchY = nextY;
      setTarget(target + delta);
      event.preventDefault();
    };

    const onResize = () => {
      setTarget(target);
    };

    const onScroll = () => {
      if (performance.now() - lastProgrammaticScroll < 48) {
        return;
      }

      current = window.scrollY;
      target = window.scrollY;
    };

    const unregister = registerButterScroll((nextTarget, options) => {
      setTarget(resolveTarget(nextTarget, options?.offset ?? 0));
    });

    const animate = () => {
      target = clamp(target, 0, maxScroll());
      current += (target - current) * SCROLL_EASING;

      if (Math.abs(target - current) < 0.25) {
        current = target;
      }

      lastProgrammaticScroll = performance.now();
      window.scrollTo(0, current);
      frameId = window.requestAnimationFrame(animate);
    };

    frameId = window.requestAnimationFrame(animate);
    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("keydown", onKeyDown, { passive: false });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: false });
    window.addEventListener("resize", onResize, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      unregister();
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return null;
}
