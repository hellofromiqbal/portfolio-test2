import './services.css';
import { FiCamera, FiVideo } from 'react-icons/fi';
import { RiScissorsCutLine } from 'react-icons/ri';

const Services = () => {
  return (
    <section className="services__container" id="services">
      <h2>My <span>Services</span></h2>
      <div className="services__list">
        <article className="service-item">
          <FiCamera className='service-icon'/>
          <h3>Photography</h3>
          <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia repellendus iusto cum id temporibus ipsum non. Alias autem nulla ipsa.</small>
          <a href="/">Learn More <span>&gt;</span></a>
        </article>
        <article className="service-item">
          <FiVideo className='service-icon'/>
          <h3>Videography</h3>
          <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia repellendus iusto cum id temporibus ipsum non. Alias autem nulla ipsa.</small>
          <a href="/">Learn More <span>&gt;</span></a>
        </article>
        <article className="service-item">
          <RiScissorsCutLine className='service-icon'/>
          <h3>Editing</h3>
          <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia repellendus iusto cum id temporibus ipsum non. Alias autem nulla ipsa.</small>
          <a href="/">Learn More <span>&gt;</span></a>
        </article>
      </div>
    </section>
  );
}
 
export default Services;