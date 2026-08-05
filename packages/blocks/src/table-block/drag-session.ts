/**
 * Starts a transient "drag session" listening for mousemove / mouseup on
 * `window`.
 *
 * Why: table-block has 5+ places that all repeat the same
 * `addEventListener('mousemove', …) → mouseup removes both` boilerplate.
 * Using a single helper keeps the registration and the cleanup paired in
 * one place and lets the caller additionally register a `Disposable`-like
 * fallback so a component destroyed mid-drag does not leak window listeners.
 *
 * The returned `stop` handle is idempotent and may be invoked manually
 * (defensively) from `disconnectedCallback`; `onUp` is invoked at most once.
 */
export interface DragSession {
  /** Stop listening and run cleanup. Idempotent. */
  stop: () => void;
}

export interface DragSessionOptions {
  onMove: (event: MouseEvent) => void;
  onUp?: (event: MouseEvent) => void;
  /** Restore transient state when the session is stopped without mouseup. */
  onCancel?: () => void;
  /** Optional cleanup hook invoked from stop(). */
  onCleanup?: () => void;
}

export function startDragSession(options: DragSessionOptions): DragSession {
  const { onMove, onUp, onCancel, onCleanup } = options;
  let stopped = false;

  const handleMove = (event: MouseEvent) => {
    if (stopped) return;
    onMove(event);
  };

  const handleUp = (event: MouseEvent) => {
    if (stopped) return;
    try {
      onUp?.(event);
    } finally {
      finish(false);
    }
  };

  function finish(cancelled: boolean): void {
    if (stopped) return;
    stopped = true;
    window.removeEventListener('mousemove', handleMove);
    window.removeEventListener('mouseup', handleUp);
    try {
      if (cancelled) onCancel?.();
    } finally {
      onCleanup?.();
    }
  }

  function stop(): void {
    finish(true);
  }

  window.addEventListener('mousemove', handleMove);
  window.addEventListener('mouseup', handleUp);

  return { stop };
}
