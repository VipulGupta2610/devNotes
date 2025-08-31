import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setAuthUser } from "../../redux/authSlice";


export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    // formstate: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {

      email: data.email,
      password: data.password
    }
    await axios.post("http://localhost:4002/user/login", userInfo)
      .then((res) => {
        console.log(res.data)
        if (res.data.user.email === "vipulgupta92998@gmail.com") {
          toast.success("Admin functionality unlocked")

          setTimeout(() => {
            navigate('/Adminlayout')
          }, 1500);
        }
        else if (res.data) {
          toast.success("Logged In successfully")
          dispatch(setAuthUser(res.data))
          setTimeout(() => {
            navigate('/notes')
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
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-slate-900 dark:text-black">
      <Toaster />
      <div data-aos="zoom-in-up" data-aos-duration="1500" className="flex sm:w-full w-[95vw] mx-auto max-w-4xl bg-white rounded-2xl shadow-2xl dark:shadow-xl dark:shadow-gray-600 shadow-gray-400 overflow-hidden">
        {/* Left Panel */}
        <div className="w-1/2 bg-gradient-to-br from-purple-600 to-purple-800 text-white p-10 relative hidden sm:flex">
          <div className="absolute top-0 left-0 w-full h-full bg-opacity-20 z-0">
            {/* Background blobs and decorations */}
          </div>
          <div className="relative z-10 flex flex-col justify-center h-full">
            <h2 className="text-3xl font-bold mb-4">Welcome back!</h2>
            <p className="font-semibold">
              You can log in to access with your existing account.
            </p>
            {/* Decorative lines */}
            <div className="mt-10">
              <svg className="w-full h-20 opacity-30" viewBox="0 0 100 100">
                <path d="M10,30 Q40,5 70,30 T130,30" stroke="white" fill="none" />
              </svg>
            </div>
          </div>
        </div>

        {/* Right Panel (Form) */}
        <div className="sm:w-1/2 sm:p-10 w-[80vw] mx-auto">
          <h2 className="text-2xl font-bold text-purple-800 mb-6">Log In</h2>

          <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label className="block mb-1 text-sm font-medium">Username or email</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter username or email"
                {...register("email", { required: true })}
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">Password</label>
              <input
                type="password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter password"
                {...register("password", { required: true })}
              />
            </div>

            {/* <div className="flex items-center justify-between text-sm">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Remember me
              </label>
              <a href="#" className="text-purple-600 hover:underline">Forgot password?</a>
            </div> */}

            <button
              type="submit"
              className="w-full py-2 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-lg hover:opacity-90 transition"

            >
              Log In
            </button>


            <div className="text-sm text-center mt-4">
              New here? <Link to="/Signup"><p className="text-purple-600 hover:underline">Create new account</p></Link>
            </div>

          </form>
        </div>

      </div>
    </div>
  );
}
