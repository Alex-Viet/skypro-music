import { Link } from 'react-router-dom';
import TemporaryStyledTitle from '../TemporaryStyles';

function Register() {
  return (
    <div>
      <TemporaryStyledTitle>Страница с регистрацией</TemporaryStyledTitle>
      <Link to="/login">Назад к авторизации</Link>
    </div>
  );
}

export default Register;
