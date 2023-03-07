import { Link } from 'react-router-dom';
import './popularItem.scss';

const PopularItem = ({title, urlToImage, category, elementNumber}) => {
    const renderTitle = (str) => {
        return str.length > 100 ? str.slice(0, 100) + ' ...': str;
    }
    const modifiedTitle = renderTitle(title);
    return (
        <li className="popular-app-main__item item-popular-app-main">
            <Link to={`${category}/${title}`} className="item-popular-app-main__link">
                <div className="item-popular-app-main__wrapper">
                    <div className="item-popular-app-main__img">
                        <img src={urlToImage} alt="popular item news" />
                    </div>
                    <div className="item-popular-app-main__content">
                        <span className="item-popular-app-main__category">{category}</span>
                        <span className="item-popular-app-main__time">2 hours ago</span>
                        <h2 className="item-popular-app-main__title">{modifiedTitle}</h2>
                    </div>
                </div>
            </Link>
        </li>
    )
}

export default PopularItem;