import { Routes, Route, Navigate } from "react-router-dom";
import {
  Layout,
  Dashboard,
  Home,
  LearnerProfile,
  MentorProfile,
  Login,
  Signup,
} from "./pages/index.js";

function App() {
  return (
    <main>
      <Routes>
        <Route element={<Layout />}>
          <Route index path="/" element={<Navigate to="/dashboard" />} />
          {/* Default route for Layout */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/mentor" element={<MentorProfile />} />
          <Route path="/learner" element={<LearnerProfile />} />
          <Route path="*" element={<Dashboard />} />
        </Route>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </main>
  );
}

export default App;
