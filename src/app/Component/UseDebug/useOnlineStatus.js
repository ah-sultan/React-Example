import React, { useDebugValue, useSyncExternalStore } from "react";

export const useOnlineStatus = () => {
  const isOnline = useSyncExternalStore(
    subscribe,
    () => navigator.onLine,
    () => true
  );
  useDebugValue(isOnline ? "online" : "offline");

  return isOnline;
};

const subscribe = (callback) => {
  window.addEventListener("online", callback);
  window.addEventListener("offline", callback);
  return () => {
    window.removeEventListener("online", callback),
      window.removeEventListener("offline", callback);
  };
};
