import React from 'react';
import Hero from '../components/layout/Hero';
import LatestSection from '../components/LatestSection';
import MatchSection from '../components/MatchSection';
import TrendingNewsSection from '../components/TrendingNewsSection';
import { useAppContext } from '../state/AppContext';
import { getCurrentMonthNews, getLastMatchesForTeams, getNextMatchesForTeams } from '../utils/Utility';

const Home: React.FC = () => {
    const { matches, news } = useAppContext();

    const teamIds = ["PVI-A01", "PVI-M02"]; // IDs delle squadre da cercare
    const nextMatches = getNextMatchesForTeams(matches, teamIds);
    const lastMatches = getLastMatchesForTeams(matches, teamIds, 2);
    const newsItems = getCurrentMonthNews(news);


    console.log(lastMatches);

    return (
        <div>
            <Hero nextMatches={nextMatches} />
            <TrendingNewsSection newsItems={newsItems} />
            {nextMatches && (
                <MatchSection nextMatches={nextMatches} recentResults={lastMatches} />
            )}
            {/*
      <SoccerSection />
      */}
            <LatestSection />
            {/*
      <PopularNewsSection />
      */}
        </div>
    );
};

export default Home;