
import React from 'react';

import Leadership from '@/components/ui/Leadership';
import Footer from '../components/Footer';
import Feedform from '../components/Feedform';

function App() {
  return (
    <div className="app">
      <Leadership />
      <Feedform title=' Business with Arohi Software'/>
      <Footer/>
    </div>
  );
}

export default App;
