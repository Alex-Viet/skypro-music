import { Routes, Route } from 'react-router-dom';
import { Login } from './pages/login/Login';
import { Register } from './pages/register/Register';
import { Category } from './pages/category/Category';
import { Favorites } from './pages/favorites/Favorites';
import { MainPage } from './pages/main-page/MainPage';
import { NotFound } from './pages/not-found-404/NotFound';
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute';
import { useAuth } from './contexts/AuthContext';
import { CenterBlock } from './components/CenterBlock/CenterBlock';

export function AppRoutes({ isLoading, trackListError }) {
  const { user } = useAuth();

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<NotFound />} />

      <Route
        path="/"
        element={(
          <ProtectedRoute user={user} isAllowed={Boolean(user)}>
            <MainPage isLoading={isLoading} />
          </ProtectedRoute>
        )}
      >
        <Route
          index
          element={(
            <CenterBlock
              isLoading={isLoading}
              trackListError={trackListError}
            />
          )}
        />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/category/:id" element={<Category />} />
      </Route>
    </Routes>
  );
}
