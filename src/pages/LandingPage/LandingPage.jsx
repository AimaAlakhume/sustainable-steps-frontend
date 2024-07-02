import './LandingPage.scss';
import { Link } from 'react-router-dom';

export const LandingPage = () => {
    return (
        <div className='main-body'>
            <a>
                <Link to={'/signup'}><div className="circle circle--sign-up">sign up</div></Link>
            </a>
            <a>
                <div className="circle circle--login">log in</div>
            </a>
        </div>
    )
}