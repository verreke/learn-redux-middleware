import logo from './logo.svg';
import './App.css';
import PostListContainer from './containers/PostListContainer';
import { Route, Routes } from 'react-router-dom';
import PostListPage from './pages/PostListPage';
import PostPage from './pages/PostPage'
import CounterContainer from './containers/CounterContainer';

function App() {
  return (
    <>
      <CounterContainer />
      <Routes>
        <Route path="/" element={<PostListPage />}/>
        <Route path="/:id" element={<PostPage />} />
      </Routes>
    </>
  );
}

export default App;
