import React from 'react';
import { useApi } from '../../../hooks/useApi';
import Banner from './Components/Banner';
import Services from './Components/Services';

const Home = () => {
   const url = "service.json";
   const [data] = useApi(url);
   return (
      <React.Fragment>
         <Banner></Banner>
         <Services data={data}></Services>
      </React.Fragment>
   );
};

export default Home;