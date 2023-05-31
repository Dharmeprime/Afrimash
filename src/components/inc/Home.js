import React from 'react';
import Livestock from './Livestock';
import Navbar from './Navbar';
import Slider from './Slider';
import HotPicks from './HotPicks';
import AgricEquip from './AgricEquip';
import Crop from './Crop';
import Popular from './Popular';
import Footer from './Footer';

function Home(){
  return(
    <div>
      <Navbar />
      <Slider />
      <HotPicks />  
      <Livestock />
      <AgricEquip />
      <Crop />
      <Popular />
      <Footer />
      
    </div>
  )
}

export default Home;