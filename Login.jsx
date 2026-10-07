import React, { useState } from "react";

export default function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phoneNumber: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [bgColor, setBgColor] = useState("#f3f4f6");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      setError("Please enter your name, phone number, email and password.");
      setSuccess("");
      setBgColor("#fee2e2");
      return;
    }

    setError("");
    setSuccess("Login successful!");
    setBgColor("#dcfce7");
    console.log("Login data:", formData);
    setTimeout(() => setBgColor("#f3f4f6"), 3000);
  };

  return (
    <>
      <style>{`
        @keyframes slideInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.02);
          }
        }

        .form-container {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: ${bgColor};
          font-family: "Arial, sans-serif";
          transition: background 0.5s ease-in-out;
        }

        .form {
          animation: slideInUp 0.6s ease-out;
          background: #fff;
          padding: 30px;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          width: 100%;
          max-width: 400px;
        }

        .title {
          animation: slideInDown 0.6s ease-out;
          margin-bottom: 20px;
          text-align: right;
          color: #333;
          font-size: 28px;
        }

        .label {
          display: block;
          margin-bottom: 8px;
          font-weight: bold;
          color: #555;
          text-align: right;
          animation: fadeIn 0.6s ease-out;
        }

        .input {
          animation: fadeIn 0.6s ease-out;
          width: 100%;
          padding: 10px 12px;
          margin-bottom: 16px;
          border-radius: 8px;
          border: 2px solid #ccc;
          box-sizing: border-box;
          transition: all 0.3s ease;
          direction: rtl;
          text-align: right;
        }

        .input:focus {
          outline: none;
          border-color: #2563eb;
          box-shadow: 0 0 8px rgba(37, 99, 235, 0.3);
          transform: scale(1.02);
        }

        .button {
          animation: slideInUp 0.8s ease-out;
          width: 100%;
          padding: 12px;
          border: none;
          border-radius: 8px;
          background: linear-gradient(135deg, #2563eb, #1d4ed8);
          color: #fff;
          font-size: 16px;
          font-weight: bold;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .button:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 16px rgba(37, 99, 235, 0.4);
          animation: pulse 0.6s ease-in-out;
        }

        .button:active {
          transform: translateY(-1px);
        }

        .error {
          animation: slideInDown 0.4s ease-out;
          color: #dc2626;
          background-color: #fee2e2;
          padding: 12px;
          border-radius: 8px;
          margin-bottom: 16px;
          border-left: 4px solid #dc2626;
          text-align: right;
        }

        .success {
          animation: slideInDown 0.4s ease-out;
          color: #16a34a;
          background-color: #dcfce7;
          padding: 12px;
          border-radius: 8px;
          margin-bottom: 16px;
          border-left: 4px solid #16a34a;
          text-align: right;
        }
      `}</style>

      <div className="form-container">
        <form onSubmit={handleSubmit} className="form">
          <h2 className="title">Login Form</h2>

          {error && <p className="error">{error}</p>}
          {success && <p className="success">{success}</p>}

          <label className="label">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="input"
          />

          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="input"
          />

          <label className="label">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            className="input"
          />

          <label className="label">Mobile Number</label>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={(e) => {
              const value = e.target.value.replace(/\D/g, "");
              setFormData((prev) => ({
                ...prev,
                phoneNumber: value,
              }));
            }}
            placeholder="Enter your mobile number"
            maxLength="10"
            className="input"
          />

          <button type="submit" className="button">Login</button>
        </form>
      </div>
    </>
  );
}
