import { useState } from "react";
import InputText from "../../components/input/InputText";
import { useNavigate } from "react-router-dom";
import Img from "../../assets/logo.png";
function Login() {
  const nav = useNavigate();
  const INITIAL_LOGIN_OBJ = {
    password: "",
    username: "",
  };

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loginObj, setLoginObj] = useState(INITIAL_LOGIN_OBJ);

  const submitForm = async (e: any) => {
    e.preventDefault();
    setErrorMessage("");
    if (loginObj.username.trim() === "")
      return setErrorMessage("Username is required!");
    if (loginObj.password.trim() === "")
      return setErrorMessage("Password is required!");
    else {
      console.log(loginObj);
      // setLoading(true);
      // await axios
      //   .post(`/auth`, {
      //     username: loginObj.username,
      //     password: loginObj.password,
      //   })
      //   .then((res) => {
      //     localStorage.setItem("token", res.data.token);
      //     axios.defaults.headers.common["x-auth-token"] =
      //       `${localStorage.getItem("token")}`;
      //     dispatch(setuser(res.data.data));
      //     nav("/app/dashboard");
      //     // console.log("res",res);
      //   })
      //   .catch((err) => {
      //     if (err.response) setErrorMessage(err.response.data.data);
      //     else setErrorMessage("Server Down ,Contact tech team");
      //     // console.log("error",err);
      //   });
      // setLoading(false);
    }
  };

  const updateFormValue = ({ updateType, value }: any) => {
    setErrorMessage("");
    setLoginObj({ ...loginObj, [updateType]: value });
  };

  return (
    <div className="min-h-screen bg-base-200 flex items-center">
      <div className="card mx-auto w-full max-w-5xl  shadow-xl">
        <div className="grid  md:grid-cols-2 grid-cols-1  bg-base-100 rounded-xl">
          <div className="p-3 max-md:hidden m-auto">
            <img src={Img} className="w-[250px]" alt="img" />
          </div>
          <div className="py-24 px-10">
            <h2 className="text-2xl font-semibold mb-2 text-center">Login</h2>
            <form onSubmit={(e) => submitForm(e)}>
              <div className="mb-4">
                <InputText
                  type="username"
                  defaultValue={loginObj.username}
                  updateType="username"
                  containerStyle="mt-4"
                  labelTitle="username"
                  updateFormValue={updateFormValue}
                />

                <InputText
                  defaultValue={loginObj.password}
                  type="password"
                  updateType="password"
                  containerStyle="mt-4"
                  labelTitle="Password"
                  updateFormValue={updateFormValue}
                />
              </div>
              <button
                type="submit"
                className={
                  "btn mt-5 w-full btn-accent" + (loading ? " loading" : "")
                }
              >
                {!loading && "Login"}
              </button>
              <div className="d-flex align-items-center float-end mt-5">
                <div className="cursor-pointer" onClick={() => nav("/signup")}>
                  Don't have an account ? Sign up
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
