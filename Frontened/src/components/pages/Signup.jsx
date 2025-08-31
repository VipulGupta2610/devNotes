import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast'
import { useNavigate } from "react-router-dom";
export default function Signup() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    // formstate: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password
    }
    await axios.post("https://dev-notes-e58e.vercel.app/user/signup", userInfo)
      .then((res) => {
        console.log(res.data)
        if (res.data) {
          toast.success("Signup successfully")
          localStorage.setItem("Users", JSON.stringify(res.data.user));
          setTimeout(() => {
            navigate('/')
          }, 1500);
        }
      }).catch((err) => {
        if (err.response) {
          console.log(err);
          toast.error("Error : " + err.response.data.message)
        }
      })
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 dark:bg-slate-900 dark:text-black">
      <div data-aos="zoom-in-down" data-aos-duration="1500" className="flex w-full max-w-5xl bg-white rounded-2xl shadow-xl shadow-gray-400 overflow-hidden dark:shadow-xl dark:shadow-gray-600">
        <Toaster />

        {/* Left Side - Purple Info Section */}
        <div className="w-1/2 bg-gradient-to-br from-purple-600 to-purple-800 text-white p-10 sm:flex sm:flex-col sm:justify-center hidden">
          <div className="mb-6">
            <h1 className="text-3xl font-bold mb-4">Discover the best way to speed up your work</h1>
            <p className="font-semibold">
              Our advantage is the most extensive notes system, which makes notes accessible and takes only a moment.
            </p>
          </div>
          {/* <a href="#" className="text-white underline text-sm mt-4">See the latest reviews →</a> */}
        </div>

        {/* Right Side - Sign Up Form */}
        <div className="sm:w-1/2 sm:p-10 w-[80vw] mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Create your account</h2>
          <div className="text-sm text-gray-500 mb-6 flex gap-1">
            <p> Let's get started with </p> <p className="text-pink-600"> devNotes</p>.
          </div>

          <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                {...register("fullname", { required: true })}
              />
              {/* <br />
              {errors.fullname && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )} */}
            </div>
            <div>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                {...register("email", { required: true })}
              />
              {/* <br />
              {errors.email && (
                <span className="text-sm text-red-500">
                  This field is required
                </span> */}
              {/* )} */}
            </div>
            <div>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                {...register("password", { required: true })}
              />
              <br />
              {/* {errors.password && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )} */}
              <p className="text-xs text-gray-400 mt-1">
                The password must be at least 8 characters long
              </p>
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition"
            >
              Sign up
            </button>

            <div className="flex items-center justify-center space-x-2 text-sm text-gray-400">
              <span>or</span>
            </div>

            {/* <button
              type="button"
              className="w-full py-2 border border-gray-300 rounded-lg flex items-center justify-center space-x-2 hover:bg-gray-50 transition"
            >
              <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
              <span>Sign up with Google</span>
            </button> */}

            <div className="text-sm text-center mt-4">
              Already have an account? <Link to="/Login"><p className="text-purple-600 hover:underline">Log In</p></Link>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
}