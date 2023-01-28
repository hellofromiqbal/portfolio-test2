import './contact.css';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';

const Contact = () => {
  return (
    <section className="contact__container" id="contact">
      <h2>Contact <span>Me</span></h2>
      <div className="contact__content">
        <form action="">
          <input name='name' type="text" placeholder='Your Name' autoComplete='off' />
          <input name='email' type="email" placeholder='Your Email' autoComplete='off' />
          <textarea name="message" placeholder='Your Message'></textarea>
          <button className="btn btn-primary">SEND MESSAGE</button>
        </form>
        <div className="contact__card-list">
          <article className="card-item">
            <AiOutlineMail className='card-icon'/>
            <h3>Email</h3>
            <small>frankabagnale@email.com</small>
          </article>
          <article className="card-item">
            <AiOutlinePhone className='card-icon'/>
            <h3>Phone</h3>
            <small>+1 234 5678 9098</small>
          </article>
        </div>
      </div>
    </section>
  );
}
 
export default Contact;