import CallBackApp from "./Component/UseCallBack/CallBackApp";
import UseDebugValueApp from "./Component/UseDebug/UseDebugValueApp";
import UseDeferredValueApp from './Component/useDeferredValue/UseDeferredValueApp';

export default function Home() {
  return (
    <main className="container px-10">
      <CallBackApp />
      <UseDebugValueApp/>
      <UseDeferredValueApp/>
    </main>
  )
}
