function safeSetTimeout(callback, delay, ...args) {
  if (typeof callback !== 'function') {
    throw new Error('Callback must be a function');
  }

  const timerId = setTimeout(() => {
    try {
      callback(...args);
    } catch (error) {
      console.error('Error during setTimeout callback execution:', error);
    }
  }, delay);

  return () => {
    clearTimeout(timerId);
  };
}
