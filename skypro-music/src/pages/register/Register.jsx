import { Link } from 'react-router-dom';

export function Register() {
  return (
    <div>
      <h1>Страница с регистрацией</h1>
      <Link to="/login">Назад к авторизации</Link>
    </div>
  );
}
