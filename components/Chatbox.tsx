"use client";
import { useEffect } from "react";

const Chatbot = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://code.tidio.co/YOUR_TIDIO_UNIQUE_ID.js"; // Replace with actual chatbot script
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return null; // No UI needed, just loads the script
};

export default Chatbot;
