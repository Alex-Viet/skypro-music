import { Link } from 'react-router-dom';
import TemporaryStyledTitle from '../TemporaryStyles';

function Category() {
  return (
    <div>
      <TemporaryStyledTitle>Подборка </TemporaryStyledTitle>
      <Link to="/">Назад</Link>
    </div>
  );
}

export default Category;
