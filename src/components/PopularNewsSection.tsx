// PopularNewsSection.tsx
import React from 'react';

interface NewsItem {
    title: string;
    date: string;
    comments: number;
    imgSrc: string;
    category?: string;
    isPopular?: boolean;
}

const popularNews: NewsItem[] = [
    {
        title: "England reach World Cup last 16 with hard-fought win over Argentina",
        date: "May 19, 2019",
        comments: 3,
        imgSrc: "img/news/popular-b.jpg",
        category: "Tenis",
        isPopular: true,
    },
    {
        title: "There’s a great history of the winner Sandia",
        date: "May 19, 2019",
        comments: 3,
        imgSrc: "img/news/ln-1.jpg",
    },
    {
        title: "It’ll be a tough game and a physical game",
        date: "May 19, 2019",
        comments: 3,
        imgSrc: "img/news/ln-2.jpg",
    },
    {
        title: "If we don’t score we can’t get frustrated",
        date: "May 19, 2019",
        comments: 3,
        imgSrc: "img/news/ln-3.jpg",
    },
    {
        title: "We are playing history and Argentina at the World Cup, says Phil Neville",
        date: "May 19, 2019",
        comments: 3,
        imgSrc: "img/news/popular-b.jpg",
        category: "Football",
        isPopular: true,
    },
    {
        title: "Le Havre does have a growing fan club",
        date: "May 19, 2019",
        comments: 3,
        imgSrc: "img/news/ln-5.jpg",
    },
    {
        title: "It will be hard to break them down",
        date: "May 19, 2019",
        comments: 3,
        imgSrc: "img/news/ln-6.jpg",
    },
    {
        title: "We’ve never seen them as organised",
        date: "May 19, 2019",
        comments: 3,
        imgSrc: "img/news/ln-7.jpg",
    },
];

const PopularNewsSection: React.FC = () => {
    return (
        <section className="popular-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="section-title">
                            <h3>Popular <span>Post</span></h3>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                {popularNews.filter(item => item.isPopular).map((item, index) => (
                                    <div className="news-item popular-item set-bg" key={index} style={{ backgroundImage: `url(${item.imgSrc})` }}>
                                        {item.category && <div className="ni-tag">{item.category}</div>}
                                        <div className="ni-text">
                                            <h5><a href="#">{item.title}</a></h5>
                                            <ul>
                                                <li><i className="fa fa-calendar"></i> {item.date}</li>
                                                <li><i className="fa fa-edit"></i> {item.comments} Comment</li>
                                            </ul>
                                        </div>
                                    </div>
                                ))}
                                {popularNews.filter(item => !item.isPopular).slice(0, 3).map((item, index) => (
                                    <div className="news-item" key={index}>
                                        <div className="ni-pic">
                                            <img src={item.imgSrc} alt="" />
                                        </div>
                                        <div className="ni-text">
                                            <h5><a href="#">{item.title}</a></h5>
                                            <ul>
                                                <li><i className="fa fa-calendar"></i> {item.date}</li>
                                                <li><i className="fa fa-edit"></i> {item.comments} Comment</li>
                                            </ul>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="col-md-6">
                                {popularNews.filter(item => item.isPopular).slice(1).map((item, index) => (
                                    <div className="news-item popular-item set-bg" key={index} style={{ backgroundImage: `url(${item.imgSrc})` }}>
                                        {item.category && <div className="ni-tag">{item.category}</div>}
                                        <div className="ni-text">
                                            <h5><a href="#">{item.title}</a></h5>
                                            <ul>
                                                <li><i className="fa fa-calendar"></i> {item.date}</li>
                                                <li><i className="fa fa-edit"></i> {item.comments} Comment</li>
                                            </ul>
                                        </div>
                                    </div>
                                ))}
                                {popularNews.filter(item => !item.isPopular).slice(3, 6).map((item, index) => (
                                    <div className="news-item" key={index}>
                                        <div className="ni-pic">
                                            <img src={item.imgSrc} alt="" />
                                        </div>
                                        <div className="ni-text">
                                            <h5><a href="#">{item.title}</a></h5>
                                            <ul>
                                                <li><i className="fa fa-calendar"></i> {item.date}</li>
                                                <li><i className="fa fa-edit"></i> {item.comments} Comment</li>
                                            </ul>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="section-title">
                            <h3>Follow <span>Us</span></h3>
                        </div>
                        <div className="follow-links">
                            <ul>
                                <li className="facebook">
                                    <i className="fa fa-facebook"></i>
                                    <div className="fl-name">Facebook</div>
                                    <span className="fl-fan">2.530 Fans</span>
                                </li>
                                <li className="twitter">
                                    <i className="fa fa-twitter"></i>
                                    <div className="fl-name">Twitter</div>
                                    <span className="fl-fan">2.046 Fans</span>
                                </li>
                                <li className="google">
                                    <i className="fa fa-google"></i>
                                    <div className="fl-name">Google</div>
                                    <span className="fl-fan">1.170 Fans</span>
                                </li>
                            </ul>
                        </div>
                        <div className="vote-option set-bg" style={{ backgroundImage: `url(img/news/vote-bg.jpg)` }}>
                            <div className="vo-text">
                                <h5>In your opinion, which country will win this year</h5>
                                <div className="vt-item">
                                    <input type="radio" name="like-team" id="one" />
                                    <label htmlFor="one">Germany</label>
                                </div>
                                <div className="vt-item">
                                    <input type="radio" name="like-team" id="two" />
                                    <label htmlFor="two">Brazil</label>
                                </div>
                                <div className="vt-item">
                                    <input type="radio" name="like-team" id="three" />
                                    <label htmlFor="three">Myanmar</label>
                                </div>
                                <div className="vt-item">
                                    <input type="radio" name="like-team" id="four" />
                                    <label htmlFor="four">Argentina</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PopularNewsSection;
