import { Link } from 'react-router-dom';
import TemporaryStyledTitle from '../TemporaryStyles';

function Favorites() {
  return (
    <div>
      <TemporaryStyledTitle>Мой плейлист</TemporaryStyledTitle>
      <Link to="/">Назад</Link>
    </div>
  );
}

export default Favorites;
