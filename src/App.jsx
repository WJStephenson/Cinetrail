import './App.css'
import Header from './components/Header/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ThemeContextProvider from './contexts/ThemContext'
import Homepage from './pages/Homepage/Homepage'

function App() {

  const apiKey = import.meta.env.VITE_API_KEY;
  const baseURL = import.meta.env.VITE_BASE_URL;

  console.log(import.meta.env.VITE_API_KEY)

  return (
    <ThemeContextProvider>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path='/' element={<Homepage apiKey={apiKey} baseURL={baseURL} />} />
        </Routes>

      </BrowserRouter>
    </ThemeContextProvider>
  )
}

export default App
