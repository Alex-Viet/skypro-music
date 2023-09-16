import { Link } from 'react-router-dom';

export function NotFound() {
  return (
    <div>
      <h1>Ошибка 404</h1>
      <Link to="/">Назад</Link>
    </div>
  );
}
