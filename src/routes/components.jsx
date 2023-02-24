import { Route, Routes } from 'react-router-dom';

import { ConnectedComponent } from '../pages/Home/component';

export const PostApp = () =>  (
  <Routes>
    <Route path="/" element={<ConnectedComponent/>} />
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

