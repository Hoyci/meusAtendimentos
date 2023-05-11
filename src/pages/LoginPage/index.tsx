import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '../../components/Box';
import Form from '../../components/Form';
import FormGroup from '../../components/FormGroup';
import FormInput from '../../components/FormInput';
import useErrors from '../../hooks/useErrors';
import useAuth from '../../hooks/useAuth';
import { logEvent } from 'firebase/analytics';
import { analytics } from '../../../firebaseConfig';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [password, setPassword] = useState('');
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const { errors, getErrorByFieldName, setError, removeError } = useErrors();

  const isFormValid =
    email.length !== 0 && password.length !== 0 && errors.length === 0;

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);

    if (!event.target.value) {
      setError({
        field: 'email-login',
        message: 'E-mail é obrigatório',
      });
    } else {
      removeError('email-login');
    }
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);

    if (!event.target.value) {
      setError({
        field: 'password-login',
        message: 'Senha é obrigatório',
      });
    } else {
      removeError('password-login');
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      setIsLoading(true);
      const { user } = await signIn(email, password);
      logEvent(analytics, 'login', {
        method: 'email',
        userId: user.uid,
        userEmail: email,
        displayName: user.displayName,
      });
      navigate('/home');
    } catch (err) {
      alert(err);
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box>
      <Form onSubmit={handleSubmit}>
        <FormGroup error={getErrorByFieldName('username-login')}>
          <FormInput
            labelText="E-mail"
            name="email"
            type="text"
            value={email}
            onChange={handleEmailChange}
          />
        </FormGroup>
        <FormGroup error={getErrorByFieldName('password-login')}>
          <FormInput
            labelText="Senha"
            name="password"
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </FormGroup>
        <button type="submit" disabled={!isFormValid || isLoading}>
          Entrar
        </button>
      </Form>
    </Box>
  );
}
