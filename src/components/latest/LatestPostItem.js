import { Link } from 'react-router-dom';
import { useState } from 'react';
import dateChangeToUTC from '../utils/dateChangeToUTC';
import './latestPostItem.scss';
import noImage from '../../assets/no_image.jpg';

const LatestPostItem = ({category, title, author, url, urlToImage, publishedAt}) => {
   
    const titleEdited = title.length > 50 ? title.slice(0, 50) + ' ...': title;
    const authorEdited = author ? author : 'От редакции';
    const editedImg = urlToImage ? urlToImage : noImage;
    const {
        utcMonth, 
        utcDate, 
        utcHours, 
        utcMinutes,
        utcNowMonth,
        utcNowDate,
        utcNowHours,
        utcNowMinutes
    } = dateChangeToUTC(publishedAt);

    console.log(utcMonth, utcDate, utcHours, utcMinutes,utcNowMonth, utcNowDate, utcNowHours, utcNowMinutes);
    const onErrorImg = (e) => {
        return e.type === 'error' ? e.target.src = noImage : null;
        
    }

    const renderDate = () => {
        if(utcMonth !== utcNowMonth) {
            return <span className="item-app-latest__time">{utcNowMonth - utcMonth} месяцев назад</span>
        }else if(utcMonth === utcNowMonth && utcDate !== utcNowDate) {
            return <span className="item-app-latest__time">{(utcNowDate - utcDate) > 1 && utcNowDate - utcDate} {`${(utcNowDate - utcDate)>4 ? 'дней' : ((utcNowDate - utcDate)===1) ? 'вчера' :  'дня'}`} {(utcNowDate - utcDate) > 1 && 'назад'}</span>
        }
    }
    return (
        <li className="app-latest__item item-app-latest">
            <Link to={url} className="item-app-latest__link">
                <div className="item-app-latest__img">
                    <img onError={onErrorImg} src={editedImg} alt="author" />
                    <div className="item-app-latest__category">{category.toUpperCase()}</div>
                </div>
                <h2 className="item-app-latest__title">{titleEdited}</h2>
                <div className="item-app-latest__footer">
                    <span className="item-app-latest__author">{authorEdited}</span>
                    {renderDate()}
                </div>
            </Link>
        </li>
    )
}

export default LatestPostItem;