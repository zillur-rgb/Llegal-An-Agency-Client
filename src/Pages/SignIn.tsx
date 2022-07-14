const SignIn = () => {
  return (
    <>
      <h1>Login</h1>

      <form>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" placeholder="Email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Email</label>
          <input type="password" name="password" placeholder="password" />
        </div>
      </form>
    </>
  );
};

export default SignIn;
