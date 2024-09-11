import { FaTwitter } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { IconContext } from 'react-icons';



function Footer() {
  return (
    <div>
      <footer className="footer bg-base-300 text-base-content p-10">
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Team Augmentation Services</a>
          <a className="link link-hover">App Development Service</a>
          <a className="link link-hover">Web Design and Development</a>
          <a className="link link-hover">Website Maintenance</a>
          <a className="link link-hover">E-Commerce Solution</a>
          <a className="link link-hover">Domain Services</a>
          <a className="link link-hover">Hosting Services</a>
          <a className="link link-hover">MVP Service</a>
          <a className="link link-hover">Offshore Ofice Expansion</a>
          <a className="link link-hover">End to end Development</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
        </nav>
        <nav>
          <h6 className="footer-title">Social</h6>
          <div className="grid grid-flow-col gap-4">
            <IconContext.Provider value={{ size: '3rem' }}>
              <a>
                <FaTwitter color="#2995e3" />
              </a>
              <a>
                <FaYoutube color="#d41515" />
              </a>
              <a>
                <FaFacebook color="#213dc4" />
              </a>
            </IconContext.Provider>
          </div>
        </nav>
      </footer>
    </div>
  );
}

export default Footer;
