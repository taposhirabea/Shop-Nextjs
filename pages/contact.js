import {useState} from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import styles from '@/styles/Home.module.css'
import { FormControl, Button } from '@mui/material'
import { sendContactForm } from "../lib/api";
import { useRouter } from 'next/router'
import { toast } from 'react-toastify';

const initValues = { name: "", email: "", subject: "", message: "" };

const initState = { values: initValues };

export default function Contact() {
    const [ state, setState ] = useState(initState);
    const { values } = state;
    const router = useRouter()
    
    const handleChange = ({ target }) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));

  const onSubmit = async () => {
    setState((prev) => ({
      ...prev,
      
    }));
     try {
      await sendContactForm(values);
      
      setState(initState);
      toast.success({
        title: "Message sent.",
        status: "success",
        duration: 2000,
        position: "top",
      });
      router.push('./contact')
    } catch (error) {
      setState((prev) => ({
        ...prev,
        
        error: error.message,
      }));
    }
  };
  return (
    <section className={styles.contactCenter}>
    <div className={styles.contactCenter}>
        <form required className={styles.container} onClick={onSubmit}>
      <h1 className={styles.text}>Hello there, how can we help you?</h1>

      <input  value={values.name}
          onChange={handleChange} placeholder='Name' type="text" name="name" className={styles.infoType} />
        <div className={styles.line}></div>
      <input  value={values.email}
          onChange={handleChange} placeholder='Email' type="email" name="email" className={styles.infoType} />
<div className={styles.line}></div>
     <input  value={values.subject}
          onChange={handleChange} placeholder='Subject' type="text" name="subject" className={styles.infoType} />
<div className={styles.line}></div>
     <textarea value={values.message}
          onChange={handleChange}  placeholder='Message' name="message" className={styles.infoType}></textarea>
      
      <div className={styles.line}></div>
      <div className={styles.btnCenter}>
        <Button className={styles.contactBtn} type='submit'>
          Submit
        </Button>
      </div>
    </form>
    </div>
    <div className={styles.imgCenter}
      disabled={
          !values.name || !values.email || !values.subject || !values.message
        }>
        <Image alt='' className={styles.img} src='https://cdn.pixabay.com/photo/2015/09/28/07/23/thread-961671__340.jpg' width={400} height={400} />
    </div>
    </section>
  )
}

