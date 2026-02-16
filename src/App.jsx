import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import './App.css';
import Layout from './Layout';
import Home, { homeLoader } from './components/Home/Home';
import Post from './components/Post/Post';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<Home />} loader={homeLoader} />
        <Route path='/post/:postid' element={<Post />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
