import { Route, Routes } from 'react-router-dom';

import { Home } from '../pages/Home/component';

export const PostApp = () =>  (
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route
      path="*"
      element={
        <main>
          <h1>ERROR</h1>
        </main>
      }
    />
  </Routes>
);

