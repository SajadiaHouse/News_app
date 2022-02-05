import {useState} from 'react'
import Navbar from "./components/Navbar";
import News from './components/News.js';
import AllNews from './components/AllNews.js';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
function App() {

  const [progress, setprogress] = useState(0)
  return (
    <Router>
    <Navbar />
    <LoadingBar
        color='#f11946'
        progress={progress}
        height={3}       
      />
    <Routes>
    <Route   exact path="/" element={<News setProgress={setprogress} cate="entertainment" key="entertainment" />}/>
      <Route exact path="/home" element={<AllNews setProgress={setprogress} cate="sports" key="sports" />}/>
      <Route   exact path="/entertainment" element={<News setProgress={setprogress} cate="entertainment" key="entertainment" />}/>
      <Route   exact path="/general" element={<News setProgress={setprogress} cate="general" key="general" />}/>
      <Route   exact path="/business" element={<News setProgress={setprogress}  cate="business" key="business" />}/>
      <Route   exact path="/health" element={<News setProgress={setprogress} cate="health" key="health" />}/>
      <Route   exact path="/science" element={<News setProgress={setprogress} cate="science" key="science" />}/>
      <Route   exact path="/sports" element={<News setProgress={setprogress} cate="sports"  key="sports"/>}/>
      <Route   exact path="/technology" element={<News setProgress={setprogress} cate="technology"key="technology"  />}/>
    
    </Routes>    
    </Router>
  );
}

export default App;
