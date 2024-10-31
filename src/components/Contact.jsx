import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from "@emailjs/browser"
import { styles } from '../styles'
import { EarthCanvas } from "./canvas"
import { SectionWrapper } from '../HOC'
import { slideIn } from '../utils/motins'
import Swal from 'sweetalert2'


const Contact = () => {

  const formRef = useRef()
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        "service_6zdk2lq",
        "template_j207fee",
        {
          form_name: form.name,
          to_name: "Saleem",
          from_email: form.email,
          to_email: "saleemtg0203@gmail.com",
          message: form.message,
        },
        "GI_45EKTY94LJk9Xk"
      )
      .then(() => {
        setLoading(false);
        setForm({
          name: "",
          email: "",
          message: "",
        });

        // Success notification
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Thank you. I will get back to you as soon as possible.",
          showConfirmButton: false,
          timer: 1500,
          background: '#151030',
          customClass: {
            popup: 'custom-height',
            title: 'swal2-title-custom',
            htmlContainer: 'swal2-text-custom'
          }


        });
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);

        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong. Please try again.",
        });
      });
  };



  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div
        variants={slideIn('left', "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={`${styles.sectionSubText}`}>Get in Touch</p>
        <h3 className={`${styles.sectionHeadText}`}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white mb-4 font-medium'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg  border-none '
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white mb-4 font-medium'>Your Email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg  border-none '
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white mb-4 font-medium'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg  border-none '
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'
          >
            {loading ? "Sending..." : 'Send'}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn('right', "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, 'contact')
