import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminPanel from './components/AdminPanel';
import GalleryPage from './components/GalleryPage';
import ProtectedRoute from './routes/ProtectedRoute';

function App() {
    const isAuthenticated = false; // Replace with actual authentication logic

    return (
        <Router>
            <Routes>
                <Route path="/admin" element={<AdminPanel />} />
                <Route
                    path="/gallery"
                    element={
                        <ProtectedRoute isAuthenticated={isAuthenticated}>
                            <GalleryPage />
                        </ProtectedRoute>
                    }
                />
                {/* Other routes */}
            </Routes>
        </Router>
    );
}

export default App; 