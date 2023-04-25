import { useSyncExternalStore } from "react";
function getSnapshot() {
  return navigator.onLine;
}

function subscribe(
  callback: Parameters<(typeof window)["addEventListener"]>["1"]
) {
  window.addEventListener("online", callback);
  window.addEventListener("offline", callback);
  return () => {
    window.removeEventListener("online", callback);
    window.removeEventListener("offline", callback);
  };
}
export function useOnlineStatus() {
  const isOnline = useSyncExternalStore(subscribe, getSnapshot);
  return isOnline;
}
