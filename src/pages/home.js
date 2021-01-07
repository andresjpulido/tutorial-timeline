import React from 'react'; 
import {Header, TimeLine} from '../components';
import data from '../data/data.json'

function Home() {
  
  return (
    <div>
      <Header />
      <TimeLine data={data} />
    </div>
  );
}

export default Home;
