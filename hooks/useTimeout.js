// Create a hook to easily use setTimeout(callback, delay).

// reset the timer if delay changes
// DO NOT reset the timer if only callback changes

import React, { useState, useEffect, useRef } from "react";
export function useTimeout(callback, delay) {
  const savedCallback = useRef(callback);

  // Update the callback ref if the callback changes
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the timeout and handle delay changes
  useEffect(() => {
    if (delay === null) return; // Don't set a timeout if delay is null

    const id = setTimeout(() => savedCallback.current(), delay);

    // Clean up the timeout if delay changes or component unmounts
    return () => clearTimeout(id);
  }, [delay]);
}
