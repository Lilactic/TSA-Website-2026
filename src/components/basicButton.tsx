import { Link } from 'react-router-dom';
import '../global.css'
import styles from './footer.module.css'

function Footer() {
  return (
    <Link className={styles.button} to="/">
        <h2 className='interText' style={{marginBottom: "0px"}}>Friendswood Resources</h2>
    </Link>
  )
}

export default Footer;