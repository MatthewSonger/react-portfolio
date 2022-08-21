import { contact } from '../../portfolio'
import './Contact.css'
import emailjs from '@emailjs/browser';

import React, { useState } from 'react';

import { validateEmail } from '../../utils/helpers';

const Result = () => {
  return (
    <p>Your message has been successfully sent.</p>
  )
}

function Contact(props) {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;
  const [result,showResult] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_6hsqwzb', 'template_s8py2wi', e.target, 'aLK6E7x7b5hQeDQy3')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
      showResult(true);
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (!errorMessage) {
  //     console.log('Submit Form', formState);
  //   }
  // };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }
  };

  return (
    <section className='contact-section' id="contact">
      <h1 data-testid="h1tag">Contact me</h1>
      <form id="contact-form" onSubmit={sendEmail}>
        <div>
          <label htmlFor="name"></label>
          <input className="contact-field" type="text" name="name" defaultValue={name} onBlur={handleChange} placeholder="Name" />
        </div>
        <div>
          <label htmlFor="email"></label>
          <input className="contact-field" type="email" name="email" defaultValue={email} onBlur={handleChange} placeholder="Email Address" />
        </div>
        <div>
          <label htmlFor="message"></label>
          <textarea className="contact-field" name="message" rows="5" defaultValue={message} onBlur={handleChange} placeholder="Message"/>
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button data-testid="button" type="submit">Submit</button>
        <div className='row'>{result ? <Result/> : null}</div>
      </form>
    </section>
  );
}


// const Contact = () => {
//   if (!contact.email) return null

//   return (
//     <section className='section contact center' id='contact'>
//       <h2 className='section__title'>Contact</h2>
//       <a href={`mailto:${contact.email}`}>
//         <span type='button' className='btn btn--outline'>
//           Email me
//         </span>
//       </a>
//     </section>
//   )
// }

export default Contact
