type ScrollTarget = string | number;

interface ButterScrollOptions {
  offset?: number;
}

type ScrollToHandler = (target: ScrollTarget, options?: ButterScrollOptions) => void;

let activeScrollHandler: ScrollToHandler | null = null;

export function registerButterScroll(handler: ScrollToHandler) {
  activeScrollHandler = handler;

  return () => {
    if (activeScrollHandler === handler) {
      activeScrollHandler = null;
    }
  };
}

export function butterScrollTo(target: ScrollTarget, options?: ButterScrollOptions) {
  activeScrollHandler?.(target, options);
}
