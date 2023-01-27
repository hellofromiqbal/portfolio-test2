import './contact.css';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';

const Contact = () => {
  return (
    <section className="contact__container" id="contact">
      <h2>Contact <span>Me</span></h2>
      <div className="contact__content">
        <div className="contact__content-left">
          <form action="">
            <input name='name' type="text" placeholder='Your Name' autoComplete='off' />
            <input name='email' type="email" placeholder='Your Email' autoComplete='off' />
            <textarea name="message" cols="30" placeholder='Your Message'></textarea>
            <button className="btn btn-primary">SEND MESSAGE</button>
          </form>
        </div>
        <div className="contact__content-right">
          <article className="contact-card">
            <AiOutlineMail className='contact-icon'/>
            <h3>Email</h3>
            <small>frankabagnale@email.com</small>
          </article>
          <article className="contact-card">
            <AiOutlinePhone className='contact-icon'/>
            <h3>Phone</h3>
            <small>+1 234 5678 9098</small>
          </article>
        </div>
      </div>
    </section>
  );
}
 
export default Contact;