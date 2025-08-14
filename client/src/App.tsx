import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Pages/Home";
import Flagship from "./components/Pages/Flagship";
import Training from "./components/Pages/Training";
import Wellness from "./components/Pages/Wellness";
import Resources from "./components/Pages/Resources";
import Contact from "./components/Pages/Contact";
// Uncomment when ready

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
        <Route path="/about" element={<Flagship />} />
        <Route path="/training" element={<Training />} />
        <Route path="/wellness" element={<Wellness />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/contact" element={<Contact />} />

        {/* Admin Routes */}
        {/* Uncomment when ready */}
        {/* <Route path="/admin" element={<Dashboard />} /> */}

        {/* Protected Routes */}
        {/* Uncomment when ready */}

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
