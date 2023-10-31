import { Routes, Route } from 'react-router-dom';
import { Login } from './pages/login/Login';
import { Register } from './pages/register/Register';
import { Category } from './pages/category/Category';
import { Favorites } from './pages/favorites/Favorites';
import { MainPage } from './pages/main-page/MainPage';
import { NotFound } from './pages/not-found-404/NotFound';
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute';
import { Playlist } from './components/Playlist/Playlist';

export function AppRoutes({ isLoading, trackListError }) {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<NotFound />} />

      <Route
        path="/"
        element={(
          <ProtectedRoute isAllowed={Boolean(localStorage.getItem('user'))}>
            <MainPage isLoading={isLoading} />
          </ProtectedRoute>
        )}
      >
        <Route index element={<Playlist trackListError={trackListError} />} />
        <Route
          path="/favorites"
          element={<Favorites trackListError={trackListError} />}
        />
        <Route
          path="/category/:id"
          element={<Category trackListError={trackListError} />}
        />
      </Route>
    </Routes>
  );
}
