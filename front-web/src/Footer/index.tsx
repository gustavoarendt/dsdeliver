import { ReactComponent as YoutubeIcon } from './youtube.svg'
import { ReactComponent as LinkedinIcon } from './linkedin.svg'
import './styles.css';

const Footer = () => {
    return(
        <footer className="main-footer">
            App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
            <div className="footer-icons">
                <a href="https://www.youtube.com/" target="_new">
                    <YoutubeIcon />
                </a>
                <a href="https://www.linkedin.com/in/gustavo-arendt-40417a139/" target="_new">
                    <LinkedinIcon />
                </a>
            </div>
        </footer>
    )
}

export default Footer;

