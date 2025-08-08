import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
// import Dashboard from "./components/Admin/Dashboard";
// import Signup from "./components/SignUp";
// import ResetPasswordForm from "./components/user/ResetPasswordForm";
// import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Home />} />

        {/* Coming Soon */}
        {/*
        <Route path="/signup" element={<Signup />} />
        <Route path="/reset-password/:token" element={<ResetPasswordForm />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        */}
      </Routes>
    </Router>
  );
}
