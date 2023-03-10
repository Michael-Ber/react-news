import { Link } from "react-router-dom";
import './recommendedItem.scss';
import noImage from '../../assets/no_image.jpg';

const RecommendedItem = ({category, title, urlToImage, author}) => {

    const titleEdited = title.length > 50 ? title.slice(0, 50) + ' ...': title;
    const authorEdited = author ? author : 'От редакции';
    const editedImg = urlToImage ? urlToImage : noImage;
    return (
        <li className="app-recommended__item item-app-recommended">
            <Link to={`/${category}/${title}`} className="item-app-recommended__link">
                <div className="item-app-recommended__img">
                    <img src={editedImg} alt="recommended item" />
                    <div className="item-app-recommended__category">{category.toUpperCase()}</div>
                </div>
                <h2 className="item-app-recommended__title">{titleEdited}</h2>
                <span className="item-app-recommended__author">{authorEdited}</span>
                <span className="item-app-recommended__time">2 hours ago</span>
            </Link>
        </li>
    )
}

export default RecommendedItem;