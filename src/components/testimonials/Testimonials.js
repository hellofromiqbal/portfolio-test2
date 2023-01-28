import './testimonials.css';
import Client1 from '../../assets/avatar1.jpg';
import Client2 from '../../assets/avatar2.jpg';
import Client3 from '../../assets/avatar3.jpg';
import Client4 from '../../assets/avatar4.jpg';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
  const data = [
    { img: Client1, name: 'Elijah Knott', testimonial: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti earum totam, nisi omnis possimus corporis.' },
    { img: Client2, name: 'Juan Carlos', testimonial: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti earum totam, nisi omnis possimus corporis.' },
    { img: Client3, name: 'Brian Ottis', testimonial: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti earum totam, nisi omnis possimus corporis.' },
    { img: Client4, name: 'Shivania Noor', testimonial: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti earum totam, nisi omnis possimus corporis.' },
  ];

  return (
    <section className="testimonials__container" id="testimonials">
      <h2>Clients <span>Testimonials</span></h2>
      <Swiper
      modules={[Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      className="testimonials__content"
      >
        {data.map((datum, index) => (
          <SwiperSlide className="testimonial-card" key={index}>
            <img src={datum.img} alt={datum.name} />
            <h3>{datum.name}</h3>
            <small>{datum.testimonial}</small>
        </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
 
export default Testimonials;