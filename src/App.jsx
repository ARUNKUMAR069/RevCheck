import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './index.css'
import NotFound from './pages/NotFound'
import ReportPage from './pages/ReportPage'

// Lazy load the ReportPage component
// const ReportPage = lazy(() => import('./pages/ReportPage'))



const App = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<ReportPage/>} />
          <Route path="/1" element={<div>Null 1</div>} />
          <Route path="/2" element={<div>Null 1</div>} />
          <Route path="/3" element={<div>Null 1</div>} />
          <Route path="/4" element={<div>Null 1</div>} />
          <Route path="/5" element={<div>Null 1</div>} />
          {/* Add more routes here as needed */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App