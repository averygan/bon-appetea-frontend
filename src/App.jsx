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
import DealsMapPage from './views/DealsMapPage';
import VendorContextProvider from './contexts/VendorContext';
import DishContextProvider from './contexts/DishContext';

function App() {

  return (
    <Router>
      <LocationContextProvider>
        <VendorContextProvider>
        <DishContextProvider>
          <DataContextProvider>
            <Routes>
              <Route path="/" element={<FoodPage/>}/>
              <Route path="/vendors/:vendorID" element={<VendorPage/>}/>
              <Route path="/grocery" element={<GroceryPage/>}/>
              <Route path="/search" element={<SearchPage/>}/>
              <Route path="/cart" element={<CartPage/>}/>
              <Route path="/account" element={<AccountPage/>}/>
              <Route path="/deals" element={<DealsListPage/>}/>
              <Route path="/deals/map" element={<DealsMapPage/>}/>
              <Route path="*" element={<NotFoundPage/>} />
            </Routes>
          </DataContextProvider>
          </DishContextProvider>
        </VendorContextProvider>
      </LocationContextProvider>
    </Router>
  )
}

export default App
