import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
// import Home from './components/Home';
import YearReview from './components/YearReview';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<YearReview />} />
          {/* <Route path="/pricing" element={<Pricing />} /> */}
        </Routes>
      </Layout>
    </Router>
  );
}
