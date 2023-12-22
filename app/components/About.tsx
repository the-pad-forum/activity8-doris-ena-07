import styles from '../styles/About.module.css';

const About = () => {
  return (
    <section className={styles.about_section}>
      <div>
        <h2>ABOUT</h2>

        <video className={styles.about_video} src="web-dev.mp4" controls></video>

        <div className={styles.about_text}>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis
            inventore iste ipsam possimus, amet architecto nobis et nulla ea
            voluptatibus dolor dicta vero neque numquam dolorum quisquam? Aliquam
            fuga laborum laboriosam itaque distinctio libero ex adipisci illo?
            Dolore quo impedit maiores cumque quae officiis, sequi numquam
            molestias nemo corrupti in at quos corporis. Veritatis magni inventore
            nam necessitatibus repudiandae. Rem nulla at similique delectus. Eum
            minima eligendi voluptates, in necessitatibus esse consequuntur aut
            accusantium possimus vero eaque repellat quam rerum, nisi quod? Natus!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur et sint aliquam incidunt, quidem ipsa voluptate quam
            pariatur necessitatibus velit quibusdam tempora repellendus sequi
            nostrum numquam eum vel, ex perspiciatis mollitia soluta hic! Ea
            aliquid commodi asperiores ex laboriosam in? Lorem ipsum dolor, sit
            amet consectetur adipisicing elit. Illum soluta ex neque eos
            recusandae fuga architecto officia odio cumque tenetur. Lorem ipsum
            dolor sit, amet consectetur adipisicing elit.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero,
            dicta consectetur quam dolore ducimus modi repellendus est expedita
            minus commodi rerum magni quae cupiditate a omnis accusamus illum.
            Veritatis quibusdam accusantium, laborum consequuntur doloremque
            vitae? Consequatur, voluptatem harum assumenda perspiciatis suscipit
            sit dignissimos laboriosam aspernatur similique labore consequuntur
            animi natus vero voluptatibus ratione, ea dolor repudiandae aliquid
            obcaecati voluptates praesentium. Quod eaque consectetur illum facere
            pariatur unde dolorum quam sed praesentium sint obcaecati dolore,
            molestias voluptas expedita facilis laboriosam repellat? Quod,
            blanditiis porro.
          </p>
        </div>
      </div>

    </section>
  );
};

export default About;