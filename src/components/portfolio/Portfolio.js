import { useState } from 'react';
import './portfolio.css';
import Animal1Lg from '../../assets/animal1-large.jpg';
import Animal1Sm from '../../assets/animal1-small.jpg';
import Animal2Lg from '../../assets/animal2-large.jpg';
import Animal2Sm from '../../assets/animal2-small.jpg';
import City1Lg from '../../assets/city1-large.jpg';
import City1Sm from '../../assets/city1-small.jpg';
import City2Lg from '../../assets/city2-large.jpg';
import City2Sm from '../../assets/city2-small.jpg';
import Nature1Lg from '../../assets/nature1-large.jpg';
import Nature1Sm from '../../assets/nature1-small.jpg';
import Nature2Lg from '../../assets/nature2-large.jpg';
import Nature2Sm from '../../assets/nature2-small.jpg';

const Portfolio = () => {
  const data = [
    { id: 1, category: 'Animal', title: 'The Fox', imgLg: Animal1Lg, imgSm: Animal1Sm },
    { id: 2, category: 'Animal', title: 'The Bird', imgLg: Animal2Lg, imgSm: Animal2Sm },
    { id: 3, category: 'City', title: 'Los Angeles', imgLg: City1Lg, imgSm: City1Sm },
    { id: 4, category: 'City', title: 'New York', imgLg: City2Lg, imgSm: City2Sm },
    { id: 5, category: 'Nature', title: 'The Woods', imgLg: Nature1Lg, imgSm: Nature1Sm },
    { id: 6, category: 'Nature', title: 'The Tree', imgLg: Nature2Lg, imgSm: Nature2Sm },
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
            <picture>
              <source media='(min-width: 600px)' srcSet={datum.imgLg} />
              <img src={datum.imgSm} alt={`${datum.category} ${datum.id}`} />
            </picture>
          </article>
        ))}
      </div>
    </section>
  );
}
 
export default Portfolio;