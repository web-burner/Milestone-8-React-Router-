import { createContext } from "react";
import "./App.css";
// import HookForm from './HookForm'
import ProductManagement from "./ProductManagement";
// import { useInputField } from './Hooks'
// import ControlledField from './ControlledField'
// import Uncontrolled from './Uncontrolled'
// import FormAction from './FormAction'
export const AssetContext = createContext("");

function App() {
  const asset = "Diamond";

  return (
    <>
      <h2>React Form</h2>
      <AssetContext.Provider value={asset}>
        <ProductManagement></ProductManagement>
      </AssetContext.Provider>
    </>
  );
}

export default App;
