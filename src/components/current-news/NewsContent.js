import { Link } from 'react-router-dom';
import './newsContent.scss';

const NewsContent = ({category, currentNews}) => {
    if(!currentNews) {
        return 
    }
    const {title} = currentNews;
    return (
        <div className="tabs-app-main__content">
            <div className="app-main__header">
                <h2 className="app-main__category">{category}</h2>
                <span className="app-main__time">2 hours ago</span>
            </div>
            <Link to={`/${category}/${title}`} className="app-main__link">
                <h1 className="app-main__title">{title}</h1>
            </Link>
        </div>
        
    )
}

export default NewsContent;