import SignIn from "../pages/SignIn";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUpController() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
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
      setLoading(true);
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        setLoading(false);
        setError(data.message);
        return;
      }
      setLoading(false);
      setError(null);
      navigate("/");
    } catch (error) {
      setLoading(error.message);
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
