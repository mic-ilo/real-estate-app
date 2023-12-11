import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import SignInController from "./controller/SignInController";
import SignUpController from "./controller/SignUpController";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Header from "./components/Header";
import PrivateRoute from "./components/PrivateRoute";
import CreateListing from "./pages/CreateListing";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/sign-in" element={<SignInController />} />

        <Route path="/sign-up" element={<SignUpController />} />

        <Route path="/about" element={<About />} />

        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/create-listing" element={<CreateListing />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
