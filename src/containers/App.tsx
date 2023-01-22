import React, {FC} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Home from './Home';

const App: FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
