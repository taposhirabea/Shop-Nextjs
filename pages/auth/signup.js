import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import {useRouter} from 'next/router'

import { signInWithEmailAndPassword, GoogleAuthProvider, createUserWithEmailAndPassword, signOut} from 'firebase/auth'
import {auth} from '../../firebase/firebase'
import { toast } from 'react-toastify';

export default function Signup() {
  const router = useRouter()
  const {user} = useAuth();
  const [data, setData] = useState({ name: '', email: " ", password: " " });
 const [error, setError] = useState(false);

  const timer = setTimeout(() => {
    setError(false);
  }, 9000);

  function timeout() {
    clearTimeout(timer);
  }
  const handleSubmitData = (e) => {
    e.preventDefault();
    if (!data.email || !data.password || (!user && !data.name)) {
      toast.error('Please fill out all fields');
      return;
    }
    if (!user) {

          createUserWithEmailAndPassword(auth, data.email, data.password)
            .then((response) => {
                console.log(response.user)
                localStorage.setItem('Token', response.user.accessToken);
                router.push('/')
            })
            .catch(err => {
                alert(`Email already exists. Please try to another Email`)
            })
    }
      
  };
//   async function handleSubmitData(e) {
//     e.preventDefault();

//     try {
//       await signup(data.name, data.email, data.password);
//       router.push("/auth/signin")


//     } catch (err) {
//       console.error(err);
//     }
//   }
  return (
    <>
      <Head>
        <title>Sign up with your Email</title>
      </Head>
      <Link href="/">
        <span className="auth-btn"> Go back to homepage</span>
      </Link>
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
      <form className="form"
        onSubmit={handleSubmitData}
      >
        <div className='form-row'>
            <div className='form-row'>
          
            <label className='form-label'>Name</label>
            <input className='form-input'
              type='text'
              name='name'
              placeholder="Name"
              //value={name}
              //onChange={handleChange}
              onChange={(e) => setData({ ...data, name: e.target.value })}
            />
            {error.name && <p style={{ color: "red"}}>{error.name}</p>} 
          </div>
        </div>
        {/* email field */}
        <div className='form-row'>
           <label className='form-label'>Email</label>
        <input className='form-input'
          type='email'
          aria-describedby="emailHelp"
              placeholder="Enter email"
              required
          // onChange={handleChange}
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />
        {error.email && <p style={{ color: "red"}}>{error.email}</p>} 
        </div>
        
        {/* password field */}
        <div className='form-row'>
        <label className='form-label'>Password</label>
        <input className='form-input'
          type="password"
              placeholder="Password"
              required        
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
            <span>Already a member?</span>
          <button type='button' className='member-btn'>
            <Link href='/auth/signin' className='auth-btn' >
                      Login
            </Link> 
          </button>
        
        </p>
        </div>
  
          {/* <Link href="/auth/signup">
            Create your account with email
   
          </Link> */}
      </form>
    </>
  );
}
