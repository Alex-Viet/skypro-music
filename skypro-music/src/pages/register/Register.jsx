import { Link } from 'react-router-dom';
import TemporaryStyledTitle from '../TemporaryStyles';

export function Register() {
  return (
    <div>
      <TemporaryStyledTitle>Страница с регистрацией</TemporaryStyledTitle>
      <Link to="/login">Назад к авторизации</Link>
    </div>
  );
}
