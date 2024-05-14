import { useContext } from "react"
import { useForm } from "react-hook-form"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { AuthContext } from "../../../firebase/Provider/AuthProvider"
import Swal from "sweetalert2"

const Login = () => {


  const { logInUser, googleSignIn } = useContext(AuthContext)
  const location = useLocation()
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => {
    const { email, password } = data;

    logInUser(email, password)
      .then(result => {
        console.log(result.user)
        Swal.fire({
          title: "Login Success!",
          text: "You have successfully login!",
          icon: "success"
        });
        navigate(location?.state ? location.state : '/')
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Your password or email address was wrong!",
          footer: 'Please provide a valid email and password'
        });
      })
  }
  
  // const handleGoogleLogin = () => {
  //   googleSignIn()
  //     .then((userCredential) => {
  //       console.log(userCredential.user)
  //       Swal.fire({
  //         title: "Awesome!",
  //         text: "You have successfully login!",
  //         icon: "success"
  //       });
  //     })
  //     .catch((error) => {
  //       console.error(error)
  //     })
  // }


  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="container flex items-center justify-center min-h-screen px-6 mx-auto">
          <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md">

            <h1 className="mt-3 text-center text-2xl font-semibold text-gray-800 capitalize sm:text-3xl dark:text-white">sign In</h1>

            <div className="relative flex items-center mt-8">
              <span className="absolute">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>

              <div className="w-full">
                <div className="w-full">
                  <input type="email" className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Email address" {...register("email", { required: true })} />
                </div>
                <div className="w-full">
                  {errors.email && <span>This field is required</span>}
                </div>
              </div>
            </div>

            <div className="relative flex items-center mt-4">
              <span className="absolute">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </span>

              <div className="w-full">
                <div className="w-full">
                  <input type="password" className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Password" {...register("password", { required: true })} />
                </div>
                <div className="w-full">
                  {errors.password && <span>This field is required</span>}
                </div>
              </div>
            </div>

            <div className="mt-6">
              <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                Sign in
              </button>
            </div>
            <div className="mt-6 text-center ">
              <Link to='/register'>
                <p className="text-sm text-blue-500 hover:underline dark:text-blue-400 hover:cursor-pointer">
                  Don’t have an account yet? Sign up
                </p>
              </Link>
            </div>
          </form>

        </div>
      </section>
    </div>
  )
}

export default Login
