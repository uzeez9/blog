import React from 'react';
import FeaturedArticle from '../components/home/FeaturedArticle';
import ClubPosts from '../components/home/ClubPosts';
import ClubStories from '../components/home/ClubStories';

function Home() {
  const featuredArticle = {
    title: "The Core has Welles Tiger As Best City Libs",
    category: "Featured",
    subtitle: "Daily Art Not Picks"
  };
  
  const clubPosts = [
    {
      id: 1,
      title: "How did Barcelona Club...",
      category: "Club News",
    },
    // Add more posts
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <FeaturedArticle article={featuredArticle} />
      <ClubPosts posts={clubPosts} />
      <ClubStories />
    </div>
  );
}

export default Home;