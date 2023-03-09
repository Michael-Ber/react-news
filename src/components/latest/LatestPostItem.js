import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import {  fetchLatestNews, latestNewsArray, latestCategoryChanged } from "./LatestSlice";
import { nanoid } from '@reduxjs/toolkit';
import Spinner from '../spinner/Spinner';
import './latestPostItem.scss';

const LatestPostItem = ({category}) => {
   
    
   


    return (
        <li className="app-latest__item item-app-latest">
            <Link to={`/`} className="item-app-latest__link">
                <div className="item-app-latest__img">
                    <img src="" alt="latest item" />
                    <div className="item-app-latest__category">Category</div>
                </div>
                <h2 className="item-app-latest__title">Some text</h2>
                <span className="item-app-latest__author">John Doe</span>
                <span className="item-app-latest__time">2 hours ago</span>
            </Link>
        </li>
    )
}

export default LatestPostItem;