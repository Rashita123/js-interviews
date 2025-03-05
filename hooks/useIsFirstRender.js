import { useRef, useEffect } from "react";
export function useIsFirstRender() {
  const renderRef = useRef(0);
  useEffect(() => {
    renderRef.current = renderRef.current + 1;
  }, []);
  return renderRef.current === 0;
}
