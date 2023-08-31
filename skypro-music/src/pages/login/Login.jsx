import { Link } from 'react-router-dom';
import TemporaryStyledTitle from '../TemporaryStyles';

function Login() {
  return (
    <div>
      <TemporaryStyledTitle>Страница с логином</TemporaryStyledTitle>
      <Link to="/">Назад</Link>
    </div>
  );
}

export default Login;
