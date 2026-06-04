import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ClerkProvider } from "@clerk/clerk-react";
import App from "./App";
import "./index.css";

const clerkPublishableKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY || "pk_test_bGlnaHQtcXVldHphbC03Mi5jbGVyay5hY2NvdW50cy5kZXYk";

// THEN SIGNUP HERE
// THEN YOU WILL GET YOUR KEY AFTER CREATING THE PROJECT.

ReactDOM.createRoot(document.getElementById("root")).render(
 <ClerkProvider publishableKey={clerkPublishableKey}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ClerkProvider>
);
