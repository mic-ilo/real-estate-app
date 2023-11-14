import SignIn from "../pages/SignIn";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../redux/user/userSlice";

export default function SignInController() {
  const { loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    switch (e.target.id) {
      case "email":
        setFormData({
          ...formData,
          email: e.target.value,
        });

        break;
      case "password":
        setFormData({
          ...formData,
          password: e.target.value,
        });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(signInFailure(data.message));
        return;
      }
      dispatch(signInSuccess(data));
      navigate("/");
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };
  
  return (
    <div>
      <SignIn
        handleChange={handleChange}
        username={formData.username}
        email={formData.email}
        password={formData.password}
        handleSubmit={handleSubmit}
        loading={loading}
        error={error}
      />
    </div>
  );
}
