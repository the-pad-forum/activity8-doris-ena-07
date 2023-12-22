import Image from 'next/image';
import DP from '../images/profile-picture.png';
import styles from '../styles/Header.module.css';
import React from 'react';
import {FaFacebook, FaTwitter, FaLinkedin,FaGithub} from "react-icons/fa";
import Link from 'next/link';



const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`${styles.overlay}`}>
        <Image className={styles.profile_picture} src={DP} width="124" height="124" alt="" />

        <h1>Ena Doribles</h1>

        <p>A Beginner Web Developer at The PAD Forum</p>

        <div className= {styles.social_icons}>
          <Link href={'https://web.facebook.com/profile.php?id=100093796205631'} target='_blank'><FaFacebook className= {styles.icon}/></Link>
          <Link href={'https://google.com'} target='_blank'><FaTwitter  className= {styles.icon}/></Link>
          <Link href={'https://google.com'} target='_blank'><FaLinkedin className= {styles.icon}/></Link>
          <Link href={'https://github.com/Doris-Ena-07'} target='_blank'><FaGithub className= {styles.icon}/></Link>
        </div>
      </div>
    </header>
  );
};

export default Header;