import { BrowserRouter as Router,Route,Routes,Navigate,Link} from 'react-router-dom'
import {Button} from 'antd-mobile'
import Test from '@/pages/test.js'
import Login from '@/pages/Login/Login.js'
import Home from '@/pages/Home.js'
import '@/App.scss'
function App() {
  return (
    <Router>
        <div className="app">
            <Routes>
                <Route path="*" element={<Navigate to="/home"/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/home" element={<Home/>}></Route>
            </Routes>
        </div>
    </Router>
  );
}

export default App;
