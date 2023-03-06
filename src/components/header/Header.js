import { Link } from 'react-router-dom';
import './header.scss';
import arrow from './arrow.svg';
import { useRef } from 'react';

const Header = () => {

    return (
        <div className="app-header">
            <ul className="app-header__links">
                <li className="app-header__item">
                    <Link
                        className='app-header__link' 
                        to="/">Новости
                    </Link>
                </li>
                <li className="app-header__item">
                    <Link
                        className='app-header__link' 
                        to="/">Наука
                    </Link>
                </li>
                <li className="app-header__item">
                    <Link
                        className='app-header__link' 
                        to="/">Здоровье
                    </Link>
                </li>
                <li className="app-header__item">
                    <Link
                        className='app-header__link' 
                        to="/">Технологии
                    </Link>
                </li>
                <div className="app-header__select-wrapper">
                    
                    <img src={arrow} alt="bottom arrow" />
                    <select name="more" id="more" className='app-header__select-item'>
                        <option className='app-header__option' value="">Еще</option>
                        <option className='app-header__option' value="business">Бизнес</option>
                        <option className='app-header__option' value="entertainment">Развлечения</option>
                        <option className='app-header__option' value="sports">Спорт</option>
                    </select>
                </div>
            </ul>
            <ul className="app-header__countries">
                <li className="app-header__item">
                    <Link 
                        className='app-header__link'
                        to="/">US
                    </Link>
                </li>
                <li className="app-header__item">
                    <Link 
                        className='app-header__link'
                        to="/">UA
                    </Link>
                </li>
                <li className="app-header__item">
                    <Link 
                        className='app-header__link'
                        to="/">RU
                    </Link>
                </li>
                
                
            </ul>
        </div>
    )
}

export default Header;
