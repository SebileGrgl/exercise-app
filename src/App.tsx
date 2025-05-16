import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ExerciseDetails from "./pages/ExerciseDetails";
import FavoritesPage from "./pages/FavoritesPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/exercise-details/:id" element={<ExerciseDetails />} />
      <Route path="/my-favorites" element={<FavoritesPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
    </Routes>
  );
}

export default App;
