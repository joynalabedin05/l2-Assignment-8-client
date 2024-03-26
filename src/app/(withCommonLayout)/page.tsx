
import FlashSale from '@/components/homeComponent/FlashSale';
import HeroSection from '@/components/homeComponent/HeroSection';
import MostPopularProducts from '@/components/homeComponent/MostPopularProducts';
import TopCategories from '@/components/homeComponent/TopCategories';
import React from 'react';

const HomePage = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <FlashSale></FlashSale>
      <TopCategories></TopCategories>
      <MostPopularProducts></MostPopularProducts>
    </div>
  );
};

export default HomePage;
