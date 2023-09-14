import { Link } from 'react-router-dom';
import TemporaryStyledTitle from '../TemporaryStyles';

export function NotFound() {
  return (
    <div>
      <TemporaryStyledTitle>Ошибка 404</TemporaryStyledTitle>
      <Link to="/">Назад</Link>
    </div>
  );
}
