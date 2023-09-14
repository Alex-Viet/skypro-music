import { Link } from 'react-router-dom';
import TemporaryStyledTitle from '../TemporaryStyles';

export function Favorites() {
  return (
    <div>
      <TemporaryStyledTitle>Мой плейлист</TemporaryStyledTitle>
      <Link to="/">Назад</Link>
    </div>
  );
}
