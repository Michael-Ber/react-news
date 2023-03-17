import { Link } from 'react-router-dom';
import './header.scss';
import arrow from './arrow.svg';
import { useSelector, useDispatch } from 'react-redux';
import { Context } from '../../service/Context';
import { ContextCountries } from '../../service/ContextCountries';
import { useContext, useState } from 'react';
import { categoryChanged, countryChanged } from '../news/NewsSlice';

const Header = () => {
    const [showDropDown, setShowDropDown] = useState(false);
    const {category} = useSelector(state => state.news);
    const {country} = useSelector(state => state.news);
    const categories = useContext(Context);
    const categoriesLinks = categories.slice(0, 4);
    const categoriesDropDown = categories.slice(4, categories.length);
    const countries = useContext(ContextCountries);
    const dispatch = useDispatch();

    const updateCategory = (category) => {
        dispatch(categoryChanged(category))
    }
    const updateCountry = (country) => {
        dispatch(countryChanged(country))
    }

    const renderLinks = (arr) => {
        return arr.map(obj => {
            const categoryEn = Object.keys(obj)[0];
            const categoryRu = Object.values(obj)[0];
            const linkClassName = category === categoryEn ? "app-header__item app-header__item_active": "app-header__item";
            return (
                <li key={categoryEn} className={linkClassName}>
                    <Link
                        className='app-header__link' 
                        onClick={() => updateCategory(categoryEn)}
                        to={`/${categoryEn}`}>{categoryRu}
                    </Link>
                </li>
            )
            
            
        })
    }


    const renderDropoDownItems = (arr) => {
        const dropDownStyles = showDropDown ? {height: `${(arr.length+1)*(20+15) - 15}px`}: {height: '20px'}
        return (
            <div className="app-header__dropdown-wrapper">
                <div 
                    onClick={() => setShowDropDown(state => !state)}
                    className="app-header__dropdown-container">
                    <div className="app-header__dropdown-arrow">
                        <img style={{transform: 'rotate(90deg)'}} src={arrow} alt="bottom arrow" />
                    </div>
                    <ul 
                        style={dropDownStyles}
                        className='app-header__dropdown-subwrapper'>
                        <li className='app-header__dropdown-more'>Еще</li>
                        {
                            arr.map((obj, i) => {
                                const category = Object.values(obj)[0];
                                const value = Object.keys(obj)[0];
                                return (
                                    <li key={i} className="app-header__dropdown-item">
                                        <Link 
                                            to={`${value}`}
                                            onClick={() => updateCategory(value)}
                                            className='app-header__dropdown-link' 
                                            >
                                                {category}
                                        </Link>
                                    </li>
                                    
                                )
                            })                        
                        }
                    </ul>
                </div>
            </div>
        )
    }
    const renderCountries = (arr) => {
        return arr.map(obj => {
            const countryContextRu = Object.values(obj)[0];
            const countryContextEn = Object.keys(obj)[0];
            const countryClassName = countryContextEn === country ? "app-header__item app-header__item_active" : "app-header__item";
            return (
                <li key={countryContextEn} className={countryClassName}>
                    <Link 
                        className='app-header__link'
                        onClick={() => updateCountry(countryContextEn)}
                        to={`/${category}`}>{countryContextRu.toUpperCase()}
                    </Link>
                </li>
            )
        })
    };

    const linkItems = renderLinks(categoriesLinks);
    const selectItems = renderDropoDownItems(categoriesDropDown);
    const countriesItems = renderCountries(countries);

    return (
        <div className="app-header">
            <ul className="app-header__links">
                {linkItems}
                {selectItems}
            </ul>
            <ul className="app-header__countries">
                {countriesItems}
            </ul>
        </div>
    )
}

export default Header;
