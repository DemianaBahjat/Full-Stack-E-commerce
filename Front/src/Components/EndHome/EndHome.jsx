import React from 'react';
import styles from './EndHome.module.css';

import iPhone from '../../Assets/iPhone.jpg';
import Earbuds from '../../Assets/Earbuds.jpg';
import Smartwatch from '../../Assets/Smartwatch.jpg';
import PhoneCase from '../../Assets/Phone Case.jpg';
import Pot from '../../Assets/Pot.jpg';
import Pan from '../../Assets/Pan.jpg';
import Blender from '../../Assets/Blender.jpg';
import Mixer from '../../Assets/Mixer.jpg';
import Bed from '../../Assets/bed.jpg';
import Sofa from '../../Assets/Sofa.jpg';
import CoffeeTable from '../../Assets/CoffeeTable.jpg';
import Desk from '../../Assets/Desk.jpg';
import Leave from '../../Assets/Leave.jpg';
import Leave2 from '../../Assets/Leave2.jpg';
import Leave3 from '../../Assets/Leave3.jpg';
import Leave4 from '../../Assets/Leave4.jpg';

import mobileLogo from '../../Assets/MobileHome.jpg';
import kitchenLogo from '../../Assets/KitchenHome.jpg';
import appliancesLogo from '../../Assets/AppliancesHome.jpg';
import furnitureLogo from '../../Assets/FurnitureHome.jpg';
import { Link, useNavigate } from 'react-router-dom';

const EndHome = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <Section
        heading="Mobiles"
        logo={mobileLogo}
        items={[
          { src: iPhone, alt: "iPhone" },
          { src: Earbuds, alt: "Earbuds" },
          { src: Smartwatch, alt: "Smartwatch" },
          { src: PhoneCase, alt: "Phone Case" },
        ]}
        url='/Mobiles'
        backgroundClass={styles.mobilesBackground}
      />
      <Section
        heading="Kitchen"
        logo={kitchenLogo}
        items={[
          { src: Pot, alt: "Pot" },
          { src: Pan, alt: "Pan" },
          { src: Blender, alt: "Blender" },
          { src: Mixer, alt: "Mixer" },
        ]}
        url='/Kitchen'
        backgroundClass={styles.kitchenBackground}
      />
      <Section
        heading="Appliances"
        logo={appliancesLogo}
        items={[
          { src: Leave, alt: "Leave" },
          { src: Leave2, alt: "Leave" },
          { src: Leave3, alt: "Leave" },
          { src: Leave4, alt: "Leave4" },
        ]}
        url='/appliances'
        backgroundClass={styles.appliancesBackground}
      />
      <Section
        heading="Furniture"
        logo={furnitureLogo}
        items={[
          { src: Bed, alt: "Bed" },
          { src: Sofa, alt: "Sofa" },
          { src: CoffeeTable, alt: "Coffee Table" },
          { src: Desk, alt: "Desk" },
        ]}
        url='/furniture'
        backgroundClass={styles.furnitureBackground}
      />
    </div>
  );
};

const Section = ({ heading, logo, items, backgroundClass, url }) => (
  <div className={`${styles.section} ${backgroundClass}`}>
    <div className={styles.headingContainer}>
      <img src={logo} alt={`${heading} logo`} className={styles.logo} />
      <h2 className={styles.heading}>{heading}</h2>
    </div>
    <div className={styles.grid}>
      {items.map((item, index) => (
        <div key={index} className={styles.item}>
          <img src={item.src} alt={item.alt} className={styles.image} />
        </div>
      ))}
    </div>
    <Link to={url}>
      <button className={styles.showMore}>Show More</button>
    </Link>
  </div>
);

export default EndHome;
