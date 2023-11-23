"use client"

import { useOnlineStatus } from './useOnlineStatus';


const UseDebugValueApp = () => {
  const isOnline = useOnlineStatus()
  return (
    <>
      <div className="wrapper">
        <h3 className="title">useCallBack Example</h3>
            <h3>{isOnline ? "✅ Online" : "❌ Disconnected"}</h3>
      </div>
    </>
  );
};

export default UseDebugValueApp;
