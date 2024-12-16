// global styles
import './App.css'

// routing
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// context
import DataContextProvider from './contexts/DataContext';

// views
import FoodPage from './views/FoodPage'
import GroceryPage from './views/GroceryPage'
import SearchPage from './views/SearchPage'
import AccountPage from './views/AccountPage'
import NotFoundPage from './views/NotFoundPage'
import VendorPage from './views/VendorPage'
import LocationContextProvider from './contexts/LocationContext';

function App() {

  return (
    <Router>
      <LocationContextProvider>
        <DataContextProvider>
          <Routes>
            <Route path="/" element={<FoodPage/>}/>
            <Route path="/vendor/:vendor_id" element={<VendorPage/>}/>
            <Route path="/grocery" element={<GroceryPage/>}/>
            <Route path="/search" element={<SearchPage/>}/>
            <Route path="/account" element={<AccountPage/>}/>
            <Route path="*" element={<NotFoundPage/>} />
          </Routes>
        </DataContextProvider>
      </LocationContextProvider>
    </Router>
  )
}

export default App
