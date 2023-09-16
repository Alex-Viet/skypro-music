import { Link, useNavigate } from 'react-router-dom';

export function Login() {
  const navigate = useNavigate();

  const setUser = () => {
    localStorage.setItem('user', 'token');
    navigate('/', { replace: true });
  };

  return (
    <div>
      <h1>Страница с логином</h1>
      <Link to="/" onClick={setUser}>
        Войти
      </Link>
      <br />
      <Link to="/register">Перейти к регистрации</Link>
    </div>
  );
}
