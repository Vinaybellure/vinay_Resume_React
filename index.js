import { render } from "react-dom";
import ReactDOM from "react-dom/client";
import App from "./src/App";
import { ThemeProvider } from "./src/contexts/theme";
import "./index.css";

// render(
//   <ThemeProvider>
//     <App />
//   </ThemeProvider>,
//   document.getElementById("root")

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
// );
