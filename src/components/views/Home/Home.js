import React from 'react';
import Hero from '../../layout/Hero/Hero';
import {Link} from 'react-router-dom';
import global from '../../../styles/global.scss'
import styles from '../../../components/layout/Hero/Hero.scss';
import FeaturedProducts from '../Products/FeaturedProducts';

const Home = () => {
  return (
    <>
        <Hero >
          <Link to='/usertype' className={`${global.btn} + ${global.btnPrimary} + ${styles.btnHero}`}>
            nasze zdjęcia
          </Link>
        </Hero>
        <FeaturedProducts />
    </>
  )
}

export default Home;
