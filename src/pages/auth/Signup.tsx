import { useState } from "react";
import InputText from "../../components/input/InputText";
import { useNavigate } from "react-router-dom";

function Signup() {
  const nav = useNavigate();
  const INITIAL_LOGIN_OBJ = {
    username: "",
    email: "",
    phone: "",
    password: "",
    cpassword: "",
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
      <div className="card mx-auto w-full max-w-2xl  shadow-xl">
        <div className="py-24 px-10">
          <h2 className="text-2xl font-semibold mb-2 text-center">Sign Up</h2>
          <form onSubmit={(e) => submitForm(e)}>
            <div className="mb-4">
              <InputText
                type="username"
                defaultValue={loginObj.username}
                updateType="username"
                containerStyle="mt-4"
                labelTitle="Username"
                updateFormValue={updateFormValue}
              />
              <InputText
                type="email"
                defaultValue={loginObj.email}
                updateType="email"
                containerStyle="mt-4"
                labelTitle="Email"
                updateFormValue={updateFormValue}
              />
              <InputText
                type="phone"
                defaultValue={loginObj.phone}
                updateType="phone"
                containerStyle="mt-4"
                labelTitle="Phone No."
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
              <InputText
                defaultValue={loginObj.cpassword}
                type="cpassword"
                updateType="cpassword"
                containerStyle="mt-4"
                labelTitle="Confirm password"
                updateFormValue={updateFormValue}
              />
            </div>
            <button
              type="submit"
              className={
                "btn mt-5 w-full btn-accent" + (loading ? " loading" : "")
              }
            >
              {!loading && "Sign Up"}
            </button>
            <div className="d-flex align-items-center float-end mt-5">
              <div className="cursor-pointer" onClick={() => nav("/login")}>
                Have an account ? Login
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
