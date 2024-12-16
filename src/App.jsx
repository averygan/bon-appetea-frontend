// global styles
import './App.css'

// routing
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// views
import FoodPage from './views/FoodPage'
import GroceryPage from './views/GroceryPage'
import SearchPage from './views/SearchPage'
import AccountPage from './views/AccountPage'
import NotFoundPage from './views/NotFoundPage'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<FoodPage/>}/>
        <Route path="/grocery" element={<GroceryPage/>}/>
        <Route path="/search" element={<SearchPage/>}/>
        <Route path="/account" element={<AccountPage/>}/>
        <Route path="*" element={<NotFoundPage/>} />
      </Routes>
    </Router>
  )
}

export default App
