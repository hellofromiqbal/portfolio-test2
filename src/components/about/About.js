import './about.css';
import ME from '../../assets/me2.jpg';

const About = () => {
  return (
    <section className="about__container" id="about">
      <div className="about__content">
        <div className="about__content-photo">
          <img src={ME} alt="me" />
        </div>
        <div className="about__content-textual">
          <h2>About <span>Me</span></h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem doloremque voluptas voluptate sed, corrupti fugit incidunt totam voluptates labore quibusdam.</p>
          <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum facere nihil fugiat mollitia sit itaque, odit debitis laboriosam consequuntur culpa?</small>
          <div className="content-textual-cta">
            <button className='btn btn-primary'>HIRE ME</button>
            <button className='btn'>DOWNLOAD CV</button>
          </div>
        </div>
      </div>
    </section>
  );
}
 
export default About;