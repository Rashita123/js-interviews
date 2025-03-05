// Create a hook to easily use setTimeout(callback, delay).

// reset the timer if delay changes
// DO NOT reset the timer if only callback changes

import React, { useState, useEffect, useRef } from "react";
export function useTimeout(callback, delay) {
  const savedCallback = useRef(callback);
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (delay === null) return;
    const id = setTimeout(() => savedCallback.current(), delay);
    return () => clearTimeout(id);
  }, [delay]);
}
