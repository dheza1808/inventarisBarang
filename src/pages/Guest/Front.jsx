import React, { useState } from 'react';
import SearchBar from '../../components/guest/SearchBar';
import Catalog from '../../components/guest/Catalog';
import TestimoniBox from '../../components/guest/TestimoniBox';
import HeroSection from '../../components/guest/HeroSection';

export default function Front() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <>
      <HeroSection />
      <SearchBar onSearch={(term) => setSearchTerm(term)} />
      <Catalog searchTerm={searchTerm} />
      <TestimoniBox />
    </>
  );
}
