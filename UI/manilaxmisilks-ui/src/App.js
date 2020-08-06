import React from "react";
import "./App.css";
import { ToastContainer } from "react-toastify";
import Body from "./Components/Body";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <React.Fragment>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
      />
      <Body />
    </React.Fragment>
  );
}

export default App;
