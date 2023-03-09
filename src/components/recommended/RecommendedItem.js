import { Link } from "react-router-dom";
import './recommendedItem.scss';

const RecommendedItem = () => {
    return (
        <li className="app-recommended__item item-app-recommended">
            <Link to={`/`} className="item-app-recommended__link">
                <div className="item-app-recommended__img">
                    <img src="" alt="recommended item" />
                    <div className="item-app-recommended__category">Category</div>
                </div>
                <h2 className="item-app-recommended__title">Some text</h2>
                <span className="item-app-recommended__author">John Doe</span>
                <span className="item-app-recommended__time">2 hours ago</span>
            </Link>
        </li>
    )
}

export default RecommendedItem;