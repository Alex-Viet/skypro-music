import { Link, useNavigate } from 'react-router-dom';
import TemporaryStyledTitle from '../TemporaryStyles';

export function Login() {
  const navigate = useNavigate();

  const setUser = () => {
    localStorage.setItem('user', 'token');
    navigate('/', { replace: true });
  };

  return (
    <div>
      <TemporaryStyledTitle>Страница с логином</TemporaryStyledTitle>
      <Link to="/" onClick={setUser}>
        Войти
      </Link>
      <br />
      <Link to="/register">Перейти к регистрации</Link>
    </div>
  );
}
