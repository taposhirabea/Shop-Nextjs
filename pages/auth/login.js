import React, {useState} from 'react';
import { useAuth } from '@/context/AuthContext';
import Link from "next/link";

export default function login() {
  //const {name, email, password, onSubmit, handleChange, values,logout, toggleMember} = useAuthContext()
  const {user, login, toggleMember} = useAuth()
   const [data, setData] = useState({ name: " ", email: " ", password: " " });

     async function handleSubmitData(e) {
    e.preventDefault();

    try {
      await login(data.name, data.email, data.password);
      router.push("/");
      console.log(user);
    } catch (err) {
      setError(err);
      console.error(err);
    }
  }
  
  return (
    <section className='full-page'>
      <form className='form' >
        
        {/* <h3>{values.isMember ? 'Login' : 'Register'}</h3> */}
        {/* name field */}
        <div className='form-row'>
        {!user && (
          <div className='form-row'>
          
            <label className='form-label'>Name</label>
            <input className='form-input'
              type='text'
              name='name'
              //value={name}
              //onChange={handleChange}
              onChange={(e) => setData({ ...data, name: e.target.value })}
            />
          </div>
        )}
        </div>
        {/* email field */}
        <div className='form-row'>
           <label className='form-label'>Email</label>
        <input className='form-input'
          type='email'
          name='email'
          //value={email}
          //onChange={handleChange}
           onChange={(e) => setData({ ...data, email: e.target.value })}
        />
        </div>
        
        {/* password field */}
        <div className='form-row'>
        <label className='form-label'>Password</label>
        <input className='form-input'
          type='password'
          name='password'
          //value={password}          
          //onChange={handleChange}
           onChange={(e) => setData({ ...data, password: e.target.value })}
        />
        </div>
        <div className='form-row'>
        <button type='submit' className='submit-btn btn-block' onClick={handleSubmitData} >
          {/* {isLoading ? 'loading...' : 'submit'} */}
          submit
        </button>
        </div>
        <div className='form-row'>
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
        </div>
      </form>
    </section>

  );
}


