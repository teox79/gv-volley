import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Slider from 'react-slick';
import '../assets/css/TrendingNewsSection.css';
import { INewsItem } from '../types/News';
import { getMonthNameFromDate } from '../utils/Utility';

interface TrendingNewsProps {
    newsItems: INewsItem[];
}

const TrendingNewsSection: React.FC<TrendingNewsProps> = ({ newsItems }) => {
    const settings = {
        dots: false,
        infinite: newsItems.length > 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000,
        arrows: true,
    };

    const currentMonth = getMonthNameFromDate();
    const noNews = "Non ci sono news per questo mese";

    return (
        <div className="trending-news-section">
            <Container>
                <div className="tn-title">
                    <i className="fa fa-caret-right"></i> News del mese di {currentMonth}
                </div>
                <Slider {...settings} className="news-slider">
                    {newsItems.length === 0 && <div className="nt-item">{noNews}</div>}
                    {newsItems.map(item => {
                        return (
                            <div className="nt-item" key={item.description}>
                                {item.date} : {item.description}
                            </div>
                        );
                    })}
                </Slider>

            </Container>
        </div>
    );
};

export default TrendingNewsSection;
