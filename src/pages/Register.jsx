import React, { useState } from "react";
import IndividualRegister from "../components/Registration/IndividualRegister";
import CorporateRegister from "../components/Registration/CorporateRegister";
import NgoRegister from "../components/Registration/NgoRegister";
import Navbar  from "../components/Navbar";
import Footer  from "../components/Footer";
import { Link } from "react-router-dom";

// const Register = () => {

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2">
//             Select Form
//           </label>
//           <div className="relative">
//             <select
//               value={activeForm}
//               onChange={handleFormChange}
//               className="appearance-none w-full bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
//             >
//               {forms.map((form) => (
//                 <option key={form} value={form}>
//                   {form}
//                 </option>
//               ))}
//             </select>
//             <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
//               <svg
//                 className="fill-current h-4 w-4"
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 20 20"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M8.293 11.293a1 1 0 011.414 0L12 13.586V7a1 1 0 112 0v6.586l2.293-2.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
//                   clipRule="evenodd"
//                 />
//               </svg>
//             </div>
//           </div>
//         </div>
//         <div>
//           {activeForm === "individual" && <IndividualForm />}
//           {activeForm === "corporate" && <CorporateForm />}
//           {activeForm === "ngo" && <NGOForm />}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;



const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const [activeForm, setActiveForm] = useState("individual");

  const handleFormChange = (event) => {
    setActiveForm(event.target.value);
  };

  const forms = ["individual", "corporate", "ngo"];

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${server}/auth/login`, { email, password });
      localStorage.setItem("email", email);
      // Handle successful login response
      console.log(response.data);
    } catch (error) {
      // Handle error
      setError("Failed to log in. Please check your credentials.");
      console.error("Login error:", error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Register</h1>
        <hr />
        <div class="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form onSubmit={handleSubmit}>
              <div class="my-3">
                <label for="display-4">Select the type of User</label>
                <select
                  value={activeForm}
                  onChange={handleFormChange}
                  className="form-control"
                >
                  {forms.map((form) => (
                    <option key={form} value={form}>
                      {form}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                {activeForm === "individual" && <IndividualRegister />}
                {activeForm === "corporate" && <CorporateRegister />}
                {activeForm === "ngo" && <NgoRegister />}
              </div>
              {error && <p className="text-danger">{error}</p>}
              <div className="my-3">
                <p>
                  Already have an account?{" "}
                  <Link to="/login" className="text-decoration-underline text-info">
                    Login
                  </Link>{" "}
                </p>
              </div>
              <div className="text-center">
                <button class="my-2 mx-auto btn btn-dark" type="submit">
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
