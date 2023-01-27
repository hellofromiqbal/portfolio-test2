import { useState } from 'react';
import './portfolio.css';
import Animal1 from '../../assets/animal1.jpg';
import Animal2 from '../../assets/animal2.jpg';
import City1 from '../../assets/city1.jpg';
import City2 from '../../assets/city2.jpg';
import Nature1 from '../../assets/nature1.jpg';
import Nature2 from '../../assets/nature2.jpg';

const Portfolio = () => {
  const data = [
    { id: 1, category: 'Animal', title: 'The Fox', img: Animal1 },
    { id: 2, category: 'Animal', title: 'The Bird', img: Animal2 },
    { id: 3, category: 'City', title: 'Los Angeles', img: City1 },
    { id: 4, category: 'City', title: 'New York', img: City2 },
    { id: 5, category: 'Nature', title: 'The Woods', img: Nature1 },
    { id: 6, category: 'Nature', title: 'The Tree', img: Nature2 },
  ];

  const [activeNav, setActiveNav] = useState('All');
  const [shownData, setShownData] = useState(data);

  const navClickEvent = (e) => {
    setActiveNav(e.target.innerText);
    if (e.target.innerText === 'All') {
        setShownData(data);
    } else {
        setShownData(data.filter((datum) => datum.category === e.target.innerText));
    }
  }

  return (
    <section className="portfolio__container" id="portfolio">
      <h2>Featured <span>Portfolio</span></h2>
      <ul className="portfolio__category">
        <li className={activeNav === 'All' ? 'active' : ''} onClick={(e) => navClickEvent(e) }>All</li>
        <li className={activeNav === 'Animal' ? 'active' : ''} onClick={(e) => navClickEvent(e) }>Animal</li>
        <li className={activeNav === 'City' ? 'active' : ''} onClick={(e) => navClickEvent(e) }>City</li>
        <li className={activeNav === 'Nature' ? 'active' : ''} onClick={(e) => navClickEvent(e) }>Nature</li>
      </ul>
      <div className="portfolio__category-list">
        {shownData.map((datum) => (
          <article className="category-item" key={datum.id}>
            <span><h3>{datum.title}</h3></span>
            <img src={datum.img} alt={`${datum.category} ${datum.id}`} />
          </article>
        ))}
      </div>
    </section>
  );
}
 
export default Portfolio;