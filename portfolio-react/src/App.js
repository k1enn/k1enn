import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Loading from "./components/Loading";
import ProjectPage from "./screens/ProjectPage";
import HomePage from "./screens/HomePage";

function App() {
  const [showOverlay, setShowOverlay] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if document and fonts are loaded
    if (document.readyState === "complete") {
      setTimeout(() => setIsLoading(false), 800);
    } else {
      window.addEventListener("load", () => {
        setTimeout(() => setIsLoading(false), 800);
      });
    }

    return () => {
      window.removeEventListener("load", () => {
        setIsLoading(false);
      });
    };
  }, []);

  useEffect(() => {
    // Hide overlay after 3 seconds
    if (!isLoading) {
      const timer = setTimeout(() => {
        setShowOverlay(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  // Prevent scrolling when overlay is visible or loading
  useEffect(() => {
    if (showOverlay || isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showOverlay, isLoading]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Routes>
      <Route path="/" element={<HomePage showOverlay={showOverlay} />} />
      <Route path="/projects" element={<ProjectPage />} />
    </Routes>
  );
}

export default App;
