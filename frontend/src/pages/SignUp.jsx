import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
const SignUp = () => {
  const navigate=useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [fieldErrors, setFieldErrors] = useState({});
  const [formErrors, setFormErrors] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Signup Data:", formData);
    try {
      const response = await axios.post(
        "/api/signup",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
      console.log(response.data.data);
     
      if (response) {
        setSubmitted(true);
      }
      navigate("/verifyemail");
    } catch (error) {
      console.log(error);
      //RESET ERRORS
      setFieldErrors({});
      setFormErrors("");
      if (!error.response) {
        setFormErrors("Network Error.Please try again");
        a;
        return;
      }
      const { status, data } = error.response;
      console.log("status of error is", status, "data of error is ", data);
      if (status == 400 && data.errors) {
        setFieldErrors(data.errors);
        return;
      }
      if (status == 409) {
        setFieldErrors({ email: data.message });
        return;
      }
      setFormErrors(data.message || "Something went wrong");
    }
  };
  console.log("field errros are", fieldErrors);
  console.log("form errors are", formErrors);

  if (submitted) {
    return (
      <div className="max-w-md mx-auto mt-20 p-8 bg-neutral-900 rounded-xl border border-neutral-700 text-center">
        <h2 className="text-2xl font-semibold mb-4 text-orange-500">
          🎉 You’re In!
        </h2>
        <p className="text-neutral-300">
          Thanks for signing up. We’ve sent a free resource to your email.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto  p-8 bg-neutral-900 rounded-xl border border-neutral-700">
      <h2 className="text-2xl font-semibold mb-2">Get the Free Resource</h2>
      <p className="text-neutral-400 mb-6">
        Sign up below and we’ll send it straight to your inbox.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name */}
        <div>
          <label className="block mb-1 text-sm">Name</label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md bg-neutral-800 border border-neutral-600 focus:outline-none focus:border-orange-500"
            placeholder="Your name"
          />
          {fieldErrors.name && (
            <p className="mt-1 text-sm text-red-400">{fieldErrors.name}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block mb-1 text-sm">Email</label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md bg-neutral-800 border border-neutral-600 focus:outline-none focus:border-orange-500"
            placeholder="you@example.com"
          />

          {fieldErrors.email && (
            <p className="mt-1 text-sm text-red-400">{fieldErrors.email}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label className="block mb-1 text-sm">Phone</label>
          <input
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md bg-neutral-800 border border-neutral-600 focus:outline-none focus:border-orange-500"
            placeholder="0300 1234567"
          />
          {fieldErrors.phone && (
            <p className="mt-1 text-sm text-red-400">{fieldErrors.phone}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full mt-4 bg-linear-to-r from-orange-500 to-orange-800 py-2 rounded-md font-medium"
        >
          Get Free Access
        </button>
      </form>
    </div>
  );
};

export default SignUp;
