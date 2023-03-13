import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../../service/Context';
import './footer.scss';

const Footer = () => {
    const categories = useContext(Context);
    const renderCategories = (arr) => {
        return arr.map(category => {
            return (
            <li key={category} className="footer-app__sublist-item">
                <Link to={`/${category}`} className="footer-app__sublist-link">{category}</Link>
            </li>
            )
        })
    }
    const categoriesElements = renderCategories(categories);
    return (
        <div className="app-footer footer-app">
            <ul className="footer-app__list">
                <li className="footer-app__column">
                    <Link to="/" className='footer-app__logo'>World News</Link>
                </li>
                <li className="footer-app__column">
                    <ul className="footer-app__sublist-list">
                        <li className="footer-app__sublist-item footer-app__sublist-item_header">Categories</li>
                        {categoriesElements}
                    </ul>
                </li>
                <li className="footer-app__column"></li>
                <li className="footer-app__column"></li>
            </ul>
        </div>
    )
}

export default Footer;