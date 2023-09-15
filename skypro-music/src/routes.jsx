import { Routes, Route } from 'react-router-dom';
import { Login } from './pages/login/Login';
import { Register } from './pages/register/Register';
import { Category } from './pages/category/Category';
import { Favorites } from './pages/favorites/Favorites';
import { MainPage } from './pages/main-page/MainPage';
import { NotFound } from './pages/not-found-404/NotFound';
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute';

export function AppRoutes({ user, tracks, isLoading }) {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<NotFound />} />

      <Route
        path="/"
        element={(
          <ProtectedRoute user={user} isAllowed={Boolean(user)}>
            <MainPage tracks={tracks} isLoading={isLoading} />
          </ProtectedRoute>
        )}
      />

      <Route
        path="/favorites"
        element={(
          <ProtectedRoute user={user} isAllowed={Boolean(user)}>
            <Favorites />
          </ProtectedRoute>
        )}
      />

      <Route
        path="/category/:id"
        element={(
          <ProtectedRoute user={user} isAllowed={Boolean(user)}>
            <Category />
          </ProtectedRoute>
        )}
      />
    </Routes>
  );
}
