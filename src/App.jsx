// global styles
import './App.css'

// routing
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// context
import DataContextProvider from './contexts/DataContext';
import LocationContextProvider from './contexts/LocationContext';

// views
import FoodPage from './views/FoodPage'
import GroceryPage from './views/GroceryPage'
import SearchPage from './views/SearchPage'
import AccountPage from './views/AccountPage'
import NotFoundPage from './views/NotFoundPage'
import VendorPage from './views/VendorPage'
import CartPage from './views/CartPage';
import DealsListPage from './views/DealsListPage';

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
            <Route path="/cart" element={<CartPage/>}/>
            <Route path="/account" element={<AccountPage/>}/>
            <Route path="/deals" element={<DealsListPage/>}/>
            <Route path="*" element={<NotFoundPage/>} />
          </Routes>
        </DataContextProvider>
      </LocationContextProvider>
    </Router>
  )
}

export default App
