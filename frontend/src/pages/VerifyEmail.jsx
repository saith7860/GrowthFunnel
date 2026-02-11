import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
const VerifyEmail = () => {
  const navigate=useNavigate()  
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!code.trim()) {
      setError("Please enter the verification code");
      return;
    }

    setLoading(true);
    setError("");
    setSuccess("");

    try {
      // 🔗 Backend POST route (adjust URL later)
      const res = await axios.post("http://localhost:3000/api/signup/verifyemail", {
        code,
      });
      if (res) {
         setSuccess("Email verified successfully 🎉 Check your inbox for free recourse!");
      }
      else{
        setSuccess("Email is not verified.")
      } 
    } catch (err) {
      if (err.response) {
        setError(err.response.data.message || "Invalid verification code");
      } else {
        setError("Network error. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-neutral-900 border border-neutral-700 rounded-2xl p-8 shadow-lg">
        
        {/* Heading */}
        <h1 className="text-2xl font-semibold text-white mb-2">
          Thanks for signing up 🎉
        </h1>

        {/* Sub text */}
        <p className="text-neutral-400 text-sm mb-6">
          We’ve sent a verification code to your email.  
          Please enter the code below to verify your email address.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Code Input */}
          <div>
            <label className="block text-sm mb-1 text-neutral-300">
              Verification Code
            </label>
            <input
              type="text"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="Enter 4-digit code"
              className={`w-full px-4 py-3 rounded-md bg-neutral-800 border 
                ${error ? "border-red-500" : "border-neutral-600"}
                text-white focus:outline-none focus:border-orange-500 tracking-widest text-center`}
            />
          </div>

          {/* Error Message */}
          {error && (
            <p className="text-sm text-red-400 bg-red-500/10 p-2 rounded">
              {error}
            </p>
          )}

          {/* Success Message */}
          {success && (
            <p className="text-sm text-green-400 bg-green-500/10 p-2 rounded">
              {success}
            </p>
          )}

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full mt-2 bg-linear-to-r from-orange-500 to-orange-700 
              hover:from-orange-600 hover:to-orange-800 
              py-3 rounded-md font-medium text-white transition disabled:opacity-60"
          >
            {loading ? "Verifying..." : "Verify Email"}
          </button>
        </form>

        {/* Helper text */}
        <p className="text-xs text-neutral-500 mt-6 text-center">
          Didn’t receive the email? Check spam or wait a minute.
        </p>
      </div>
    </div>
  );
};

export default VerifyEmail;
