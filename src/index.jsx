import { useState } from 'react';
import './index.css';
import Header from './components/Header/Header';
import BannerScreenOne from './components/BannerScreenOne/BannerScreenOne';
import ContainerAA from './components/containerAA/containerAA';

function Index() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header/>
      <main>
        <BannerScreenOne/>
        <ContainerAA/>
      </main>
    </>
  )
}

export default Index;
