import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import Spinner from '../spinner/Spinner';
import './latestPostItem.scss';
import noImage from '../../assets/no_image.jpg';

const LatestPostItem = ({category, title, author, urlToImage}) => {
   
    
    const titleEdited = title.length > 50 ? title.slice(0, 50) + ' ...': title;
    const authorEdited = author ? author : 'От редакции';
    const editedImg = urlToImage ? urlToImage : noImage;

    return (
        <li className="app-latest__item item-app-latest">
            <Link to={`/${category}/${title}`} className="item-app-latest__link">
                <div className="item-app-latest__img">
                    <img src={editedImg} alt="author" />
                    <div className="item-app-latest__category">{category.toUpperCase()}</div>
                </div>
                <h2 className="item-app-latest__title">{titleEdited}</h2>
                <div className="item-app-latest__footer">
                    <span className="item-app-latest__author">{authorEdited}</span>
                    <span className="item-app-latest__time">2 hours ago</span>
                </div>
            </Link>
        </li>
    )
}

export default LatestPostItem;