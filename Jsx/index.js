// Here the intial two commands are basic fro any react index page as thisis the connecting point to the html page.
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
// Below Feature is to import the function from the app function.
import App from "./App";

const root = createRoot(document.getElementById("root"));
// root is the connection link btw this file and the html file .
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
