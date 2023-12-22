import styles from '../styles/Contact.module.css';
import React from 'react';

const Contact = () => {
  return (
    <section className={styles.contact_section}>
      <div className={styles.contact_children}>
        <h2>CONTACT</h2>

        <form className={styles.contact_form} action="javascript:void(0)" method="post">
          <div className={`${styles.contact_form_div} ${styles.contact_inputs_container}`}>
            <input
              className={styles.input}
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              required
            />

            <input 
              className={styles.input}
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              required
            />
          </div>

          <div className={styles.contact_form_div}>
            <textarea className={styles.textarea}
              id="message"
              name="message"
              placeholder="Message"
              rows={4}
              required
            ></textarea>
          </div>

          <div className={styles.contact_form_div}>
            <button className={styles.button} type="submit">Submit</button>
          </div>

        </form>
      </div>
      
    </section>
  );
};


export default Contact;