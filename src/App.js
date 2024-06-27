import "./App.css";
import Head from "./head/head.tsx";
import Left from "./left/left.tsx";
import Center from "./center/center.tsx";
import Right from "./right/right.tsx";

function App() {
  return (
    <div>
      <Head />
      <div className="flex justify-between">
        <Left />
        <Center />
        <Right />
      </div>
    </div>
  );
}

export default App;
