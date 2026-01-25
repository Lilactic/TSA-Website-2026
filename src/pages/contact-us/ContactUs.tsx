import Footer from '../../components/footer'
import Navbar from '../../components/navbar'
import '../../global.css'
import styles from './ContactUs.module.css'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import image from "../../assets/images/library.png"
import { useState } from 'react'

function ContactUs() {
  const [buttonText, setButtonText] = useState("Send Message");

  return (
    <>
      <Navbar />

      <main className={styles.main}>
        <section className={styles.hero}>
          <div 
            className={styles.heroBG}
          />

          <div className={styles.content}>
            <h1 className={styles.title}>Contact Us</h1>
            <h2 className={`interSubtitle ${styles.subtitle}`}>Tell us what's on your mind!</h2>
          </div>
        </section>

        <section className={styles.contactSection}>
          
          {/* Left box – Contact info */}
          <div className={styles.infoBox}>
            <img src={image}></img>
            <div className={styles.contentBox}>
              <h2>Get in Touch</h2>
              <p>
                Feel free to suggest additional resources, report website bugs, or suggest improvements!
              </p>

              <div className={styles.details}>
                <p>
                  <Mail size={18} style={{flexShrink: "0"}} /> friendswoodresources@example.com
                </p>
                <p>
                  <Phone size={18} style={{flexShrink: "0"}} /> +1 (123) 456-7890
                </p>
                <p>
                  <MapPin size={18} style={{flexShrink: "0"}} /> Somewhere in Friendswood
                </p>
              </div>
            </div>
          </div>

          {/* Right box – Form */}
          <div className={styles.formBox}>
            <h2>Contact Form</h2>

            <form className={styles.form}>
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Your Email" />
              <textarea placeholder="Your Message" rows={5} />
              <button type="button" onClick={() => {setButtonText("Message Sent!")}}>
                <Send size={18} />
                {buttonText}
              </button>
            </form>
          </div>

        </section>
      </main>

      <Footer />
    </>
  )
}

export default ContactUs
