import { StrictMode } from 'react'
import { createContext,useState } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';



export const Context= createContext({isAuthencated:false});

const AppWrapper = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState();
  return (
    <Context.Provider value={{ isAuthenticated, setIsAuthenticated,user, setUser }}>
      <BrowserRouter>
      <App/>
      </BrowserRouter>
    </Context.Provider>
  );
};


ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppWrapper />
  </StrictMode>,
)
