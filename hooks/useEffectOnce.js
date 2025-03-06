import { useEffect } from "react";

export function useEffectOnce(effect) {
  useEffect(effect, []);
}
