import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Auth } from "views";

const UnAuthenticatedApp = () => {
  return (
    <Routes>
      <Route path="/auth" element={<Auth />} />
      <Route path="/*" element={<Navigate to="/auth" />} />
    </Routes>
  );
};
export default UnAuthenticatedApp;
