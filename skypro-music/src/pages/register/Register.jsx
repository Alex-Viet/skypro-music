import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import * as S from '../login/LoginAndRegister.styles';
import { getToken, registerUser } from '../../api/auth';
import { useAuth } from '../../contexts/AuthContext';
import { setAuth } from '../../store/slices/authSlice';

export function Register() {
  const [regError, setRegError] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [isRegLoading, setIsRegLoading] = useState(false);

  const { login } = useAuth();
  const dispatch = useDispatch();

  const handleRegister = async (evt) => {
    evt.preventDefault();

    try {
      if (!email) {
        setRegError('Введите email');
        return;
      }

      if (!password) {
        setRegError('Введите пароль');
        return;
      }

      if (!repeatPassword) {
        setRegError('Подтвердите пароль');
        return;
      }

      if (password !== repeatPassword) {
        setRegError('Пароли не совпадают');
        return;
      }

      setIsRegLoading(true);

      await registerUser({ email, password }).then((loginData) => {
        getToken({ email, password }).then((tokenData) => {
          login(loginData);
          dispatch(
            setAuth({
              id: loginData.id,
              email: loginData.email,
              username: loginData.username,
              access: tokenData.access,
              refresh: tokenData.refresh,
              first_name: loginData.first_name,
              last_name: loginData.last_name,
            }),
          );
        });
      });
    } catch (error) {
      setRegError(`Ошибка: ${error.message}`);
    } finally {
      setIsRegLoading(false);
    }
  };

  // Сбрасываем ошибку если пользователь меняет данные на форме или меняется режим формы
  useEffect(() => {
    setRegError(null);
  }, [email, password, repeatPassword]);

  return (
    <S.PageContainer>
      <S.ModalForm>
        <Link to="/login">
          <S.ModalLogo>
            <S.ModalLogoImage src="/img/logo_modal.png" alt="logo" />
          </S.ModalLogo>
        </Link>
        <S.Inputs>
          <S.ModalInput
            type="text"
            name="login"
            placeholder="Почта"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <S.ModalInput
            type="password"
            name="password"
            placeholder="Пароль"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          <S.ModalInput
            type="password"
            name="repeat-password"
            placeholder="Повторите пароль"
            value={repeatPassword}
            onChange={(event) => {
              setRepeatPassword(event.target.value);
            }}
          />
        </S.Inputs>
        {regError && <S.Error>{regError}</S.Error>}
        <S.Buttons>
          {!isRegLoading && (
            <S.PrimaryButton onClick={handleRegister}>
              Зарегистрироваться
            </S.PrimaryButton>
          )}
          <Link to="/login" style={{ textAlign: 'center' }}>
            К авторизации
          </Link>
        </S.Buttons>
      </S.ModalForm>
    </S.PageContainer>
  );
}
