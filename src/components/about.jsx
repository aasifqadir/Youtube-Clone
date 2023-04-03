import '../styles/about.css'
import { Link } from 'react-router-dom';
import logo from '../images/logo.png'
import img from '../images/quest.svg'
import Help from '@mui/icons-material/Help';
const About = () => {
    return (
        <div className="about">
            <div className="images">
                <img src="https://lh3.googleusercontent.com/L4haMN-TsQNGw4OkWKqEbmOU5e6giwJ0_wLgv_8QE05kOladEeYRHBOM2TpCilDdpcsprB8Y8E2Z7_LZQq0eOmf-vy4SAV9cRJxP96IQumGOKT4hIatk=s3000-rw" alt="" />
            </div>
            <div className="about-youtube">
                <h1> About YouTube</h1>
                <p>Our mission is to give everyone a voice and show them the world.</p>
                <p>We believe that everyone deserves to have a voice, and that the world is a better place when we listen, share and build community through our stories.</p>
            </div>
            <footer className='footer'>
                <div className="logo">
                    <img src={logo} alt="" width={120} />
                </div>
                <div className="link">
                    <ul>
                        <li><Link to="/"> Policies and Safety</Link></li>
                        <li><Link to="/"> Copyright</Link></li>
                        <li><Link to="/">Brand Guidlines</Link></li>
                        <li><Link to="/"> Privacy</Link></li>
                        <li><Link to="/"> Terms</Link></li>

                    </ul>



                </div>
                <div className="help">
                    <Help />
                    <Link to="/">Help</Link>

                </div>

            </footer>
        </div>

    );
}

export default About;