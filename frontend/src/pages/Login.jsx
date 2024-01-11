import { useState } from "react";
function Login({ }) {
  const [isLogin, setIsLogin] = useState(true);
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    const jsonData = JSON.stringify(data);
    console.log(jsonData);
  }

  function handleToggle() {
    setIsLogin((prevLogin) => !prevLogin);
  }
  return (
    <form onSubmit={handleSubmit} className="login-form">
      <h1 className="main-title">{isLogin ? 'Login' : 'Sign up'}</h1>
      {
        !isLogin &&
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
        </div>
      }
      <div className="input-group">
        <label htmlFor="username">Username</label>
        <input type="text" name="username" id="username" />
      </div>
      <div className="input-group">
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
      </div>
      <button className="text-only" type='button' onClick={handleToggle}>{isLogin ? 'Sign up' : 'Login'}</button>
      <div>
        <button className="button" type="submit">Submit</button>
        <button className="button" type="reset">Cancel</button>
      </div>
    </form>
  );
}

export default Login;