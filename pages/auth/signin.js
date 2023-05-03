import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useRouter } from "next/router";

const Signin = () => {
  const { signin, user, toggleMember } = useAuth();
  const router = useRouter();

  const [data, setData] = useState({ email: " ", password: " " });
  const [error, setError] = useState(false);

  const timer = setTimeout(() => {
    setError(false);
  }, 9000);

  function timeout() {
    clearTimeout(timer);
  }

  async function handleSubmitData(e) {
    e.preventDefault();

    try {
      await signin(data.email, data.password);
      router.push("/");
      console.log(user);
    } catch (err) {
        alert('Information not valid')
    //   setError(err);
    //   console.error(err);
    }
  }

  return (
    <div className="">
      <Head>
        <title>Login here</title>
      </Head>
      <>
        {error && (
          <div
            onErrorCapture={timeout}
            className="main"
          >
            <Link className=" mainn">
              {" "}
              {error.message}
            </Link>
          </div>
        )}
        <form className='signin-form' 
          onSubmit={handleSubmitData}
          //className="max-w-2xl mx-auto grid place-content-center h-screen"
        >
          {/* email field */}
        <div className='form-row'>
           <label className='form-label'>Email</label>
        <input className='form-input'
          type='email'
          aria-describedby="emailHelp"
                placeholder="Enter email"
          // onChange={handleChange}
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />
        {error.email && <p style={{ color: "red"}}>{error.email}</p>} 
        </div>
        
        {/* password field */}
        <div className='form-row'>
        <label className='form-label'>Password</label>
        <input className='form-input'
          type='password'
          placeholder="Password"         
          // onChange={handleChange}
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />
        {error.password && <p style={{ color: "red"}}>{error.password}</p>} 
        </div>
        <div className='form-row'>
        <button type='submit' className='submit-btn btn-block' >
          {/* {isLoading ? 'loading...' : 'submit'} */}
          submit
        </button>
        </div>
        <div className='form-row'>
        <p className='new'>
            <span>Not a member yet?</span>
          <button type='button' className='member-btn' >
            <Link href='/auth/signup' className='auth-btn' >
                      Register
            </Link> 
          </button>
        
        </p>
        </div>

         {/* <div className='form-row'>
        <p className='new'>
          {user ? 'Not a member yet? ' : 'Already a member? '}
          <button type='button' className='member-btn' > 
            {user ? (
               <Link href='/auth/login' className='auth-btn' onClick={toggleMember}>
                 Register
              </Link> 
            ) : (
               <Link href='/auth/login' className='auth-btn' onClick={toggleMember}>
                Login
              </Link> 
            )}
            
          </button>
        </p>
        </div> */}
          
        </form>
      </>
    </div>
  );
};

export default Signin;
