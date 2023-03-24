import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Subjects, Notes, Deadlines, Todolits, Account } from "views";

const AuthenticatedApp = () => {
  return (
    <Routes>
      {true && (
        <>
          <Route path="/subjects" element={<Subjects />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/deadlines" element={<Deadlines />} />
          <Route path="/todolits" element={<Todolits />} />
        </>
      )}
      <Route path="/account" element={<Account />} />
      <Route path="*" element={<Navigate to="/account" />} />
    </Routes>
  );
};

export default AuthenticatedApp;
