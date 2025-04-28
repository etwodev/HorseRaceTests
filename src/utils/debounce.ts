/**
 * Debounce helper util
 *
 * This method will debounce calls made to the callback using the timeout
 * provided. Set immediate to `true` to run the function immediately, then
 * debounce further calls.
 */
export const debounce = <T extends (...args: unknown[]) => unknown>(
  callBack: T,
  wait: number,
  immediate = false,
): VoidFunction => {
  let timeout: NodeJS.Timeout | null;

  return (...params: unknown[]): void => {
    const args = params;
    const later = (): void => {
      timeout = null;
      if (!immediate) callBack(...args);
    };
    const callNow = immediate && !timeout;
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) callBack(...args);
  };
};
