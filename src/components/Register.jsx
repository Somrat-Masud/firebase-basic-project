import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./providers/AuthProvider";
import { useContext } from "react";

const Register = () => {
  const navigate = useNavigate();
  const { createUser, signinWithGoogle } = useContext(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    // console.log(e);
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, email, password);

    //createUser
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        e.target.reset();
        navigate("/");
      })
      .catch((error) => {
        console.log("Error", error.message);
      });
  };

  const hadleGoogleLogin = () => {
    signinWithGoogle()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
    navigate("/");
  };
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
            <p className="ml-4 mb-4 mr-4">
              Already Have a account?please<Link to="/login">Login</Link>
            </p>
            <button onClick={hadleGoogleLogin} className="btn btn-ghost">
              Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
