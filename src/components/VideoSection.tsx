import React from 'react';
import OwlCarousel from 'react-owl-carousel'; // Assicurati che questo sia l'import corretto
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

// Definisci un'interfaccia per i video
interface Video {
    imgSrc: string;
    title: string;
    videoLink: string;
    duration: string;
}

const videos: Video[] = [
    {
        imgSrc: 'path/to/image1.jpg',
        title: 'Video 1',
        videoLink: 'https://linkto.video1',
        duration: '3:45',
    },
    {
        imgSrc: 'path/to/image2.jpg',
        title: 'Video 2',
        videoLink: 'https://linkto.video2',
        duration: '4:20',
    },
    // Aggiungi altri video qui
];

const VideoSection: React.FC = () => {
    return (
        <section className="video-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title">
                            <h3>Hot <span>Videos</span></h3>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <OwlCarousel items={4} nav margin={10}>
                        {videos.map((video, index) => (
                            <div className="col-lg-3" key={index}>
                                <div className="video-item set-bg" style={{ backgroundImage: `url(${video.imgSrc})` }}>
                                    <div className="vi-title">
                                        <h5>{video.title}</h5>
                                    </div>
                                    <a href={video.videoLink} className="play-btn video-popup">
                                        <img src="/img/videos/play.png" alt="Play" />
                                    </a>
                                    <div className="vi-time">{video.duration}</div>
                                </div>
                            </div>
                        ))}
                    </OwlCarousel>
                </div>
            </div>
        </section>
    );
};

export default VideoSection;
