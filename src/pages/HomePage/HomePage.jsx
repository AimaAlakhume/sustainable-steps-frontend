import './HomePage.scss';
import { Link } from 'react-router-dom';

export const HomePage = () => {
    return (
        <div className='main-body'>
            <Link to={'/diary'}><div className="circle circle--waste-diary">waste diary</div></Link>
            <Link to={'/garden'}><div className="circle circle--garden">the garden</div></Link>
            <img src={ 'src/assets/logos/ss-wordmark.svg' } alt='brand wordmark logo' className='logo' />
            <Link to={'/greenbot'}><div className="circle circle--greenbot">greenBot</div></Link>
            <Link to={'/guide'}><div className="circle circle--wastewise">wasteWise</div></Link>
        </div>
    )
}