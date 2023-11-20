export function useInterval(callback) {
  let intervalId = undefined;

  const stopInterval = () => {
    if (!intervalId) return;
    clearInterval(intervalId);
    intervalId = undefined;
  };

  const startInterval = (ms) => {
    stopInterval();
    if (!ms) {
      return false;
    }
    intervalId = setInterval(callback, ms);
    return true;
  };

  return { stopInterval, startInterval };
}
