
import { ShowKeepList } from './components/showKeep';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { CreateKeep } from './components/createKeep';


function App() {
  return (
    <div className="app-contents">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ShowKeepList />} />
          <Route path='/' element={<CreateKeep />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
