import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
const Booking = () => {
  const navigate=useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    businessType: "",
    packageInterested: "",
    goal: "",
  });

  const [confirmed, setConfirmed] = useState(false);
  const [fieldErrors, setFieldErrors] = useState({});
  const [formErrors, setFormErrors] = useState("");
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit =async (e) => {
    e.preventDefault();
    console.log("Booking Data:", formData);
     try {
          const response = await axios.post(
            "/api/booking",
            formData,
            {
              headers: {
                "Content-Type": "application/json",
              },
            },
          );
          console.log(response.data.data);
         
          if (response) {
            setConfirmed(true);
          }
          navigate("/verifybooking");
        } catch (error) {
          console.log(error);
          //RESET ERRORS
          setFieldErrors({});
          setFormErrors("");
          if (!error.response) {
            setFormErrors("Network Error.Please try again");
             return;
          }
          const { status, data } = error.response;
          console.log("status of error is", status, "data of error is ", data);
          if (status == 400 && data.errors) {
            setFieldErrors(data.errors);
            return;
          }
          if (status == 409) {
            setFieldErrors({ phone: data.message });
            return;
          }
          setFormErrors(data.message || "Something went wrong");
        }
  };

  if (confirmed) {
    return (
      <div className="max-w-xl mx-auto mt-20 p-8 bg-neutral-900 border border-neutral-700 rounded-xl text-center">
        <h2 className="text-2xl font-semibold text-orange-500 mb-4">
          ✅ Call Requested Successfully
        </h2>
        <p className="text-neutral-300">
          Our Team will contact you in next <strong>24 hours</strong>.  
          
        </p>
      </div>
    );
  }

  return (
    <>
    <div className="max-w-xl mx-auto  p-8 bg-neutral-900 border border-neutral-700 rounded-xl">
      <h2 className="text-2xl font-semibold mb-6">
        Book a Free Strategy Call
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">

        {/* Name */}
        <input
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 bg-neutral-800 border border-neutral-600 rounded-md"
        />
          {fieldErrors.name && (
            <p className="mt-1 text-sm text-red-400">{fieldErrors.name}</p>
          )}
        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 bg-neutral-800 border border-neutral-600 rounded-md"
        />
   {fieldErrors.email && (
            <p className="mt-1 text-sm text-red-400">{fieldErrors.email}</p>
          )}
        {/* Phone */}
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 bg-neutral-800 border border-neutral-600 rounded-md"
        />
   {fieldErrors.phone && (
            <p className="mt-1 text-sm text-red-400">{fieldErrors.phone}</p>
          )}
        {/* Business Type */}
        <select
          name="businessType"
          value={formData.businessType}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 bg-neutral-800 border border-neutral-600 rounded-md"
        >
          <option value="">Business Type</option>
          <option>Coaching / Consulting</option>
          <option>Local Service</option>
          <option>Agency</option>
          <option>E-commerce</option>
          <option>Other</option>
        </select>
    {fieldErrors.businessType && (
            <p className="mt-1 text-sm text-red-400">{fieldErrors.businessType}</p>
          )}
        {/* Package */}
        <select
          name="packageInterested"
          value={formData.packageInterested}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 bg-neutral-800 border border-neutral-600 rounded-md"
        >
          <option value="">Interested Package</option>
          <option>Starter Funnel</option>
          <option>Growth Funnel (Recommended)</option>
          <option>Scale Funnel</option>
        </select>
{fieldErrors.packageInterested && (
            <p className="mt-1 text-sm text-red-400">{fieldErrors.packageInterested}</p>
          )}
        {/* Goal */}
        <textarea
          name="goal"
          placeholder="What’s your main goal right now?"
          value={formData.goal}
          onChange={handleChange}
          rows="3"
          className="w-full px-4 py-2 bg-neutral-800 border border-neutral-600 rounded-md"
        />
        <button
          type="submit"
          className="w-full mt-4 bg-linear-to-r from-orange-500 to-orange-600 py-2 rounded-md"
        >
          Confirm Booking
        </button>

      </form>
    </div>
    </>
  );
};

export default Booking;
