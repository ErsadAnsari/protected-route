import { useRef, useState, useEffect} from "react";
import useAuth from "./hooks/useAuth";
import { Link,Navigate, useNavigate} from "react-router-dom";



const Login = () => {
    const navigate = useNavigate();
  const { setAuth,auth} = useAuth();
  console.log("auth000 ",auth)
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

//   useEffect(() => {
//     userRef.current.focus();
//     alert("hii")
//   }, []);

//   useEffect(() => {
//     setErrMsg("");
//   }, [user, pwd]);

  const handleSubmit = async (e) => {
    const accessToken = "token123abc";
    localStorage.setItem("token", accessToken);
    e.preventDefault();
    setAuth({ user, pwd, accessToken });
    navigate("dashboard");



  };


  return (
    <>
      {success ? (
        <section>
          <h1>You are logged in!</h1>
          <br />
          <p>
            <a href="#">Go to Home</a>
          </p>
        </section>
      ) : (
        <section>
          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              value={user}
              required
            />

            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required
            />
            <button >Sign In</button>
          </form>
          <p>
            Need an Account?
            <br />
            <span className="line">
              {/*put router link here*/}
              <Link to="home">Sign up</Link>
            </span>
          </p>
        </section>
      )}
    </>
  );
};

export default Login;
