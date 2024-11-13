import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

const PORT = process.env.PORT || 3000; // Default port for CRA
console.log(`React app is running on http://localhost:${PORT}`);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
