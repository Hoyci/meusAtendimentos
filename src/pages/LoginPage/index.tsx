import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '../../components/Box';
import Form from '../../components/Form';
import FormGroup from '../../components/FormGroup';
import FormInput from '../../components/FormInput';
import useErrors from '../../hooks/useErrors';
import { logEvent } from 'firebase/analytics';
import { analytics } from '../../../firebaseConfig';
import Button from '../../components/Button';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { signIn } from '../../services/auth';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { errors, getErrorByFieldName, setError, removeError } = useErrors();
  const navigate = useNavigate();
  const { mutateAsync, isLoading } = useMutation({
    mutationFn: signIn,
  });

  const isFormValid =
    email.length !== 0 && password.length !== 0 && errors.length === 0;

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);

    if (!event.target.value) {
      setError({
        field: 'email',
        message: 'E-mail é obrigatório',
      });
    } else {
      removeError('email');
    }
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);

    if (!event.target.value) {
      setError({
        field: 'password',
        message: 'Senha é obrigatório',
      });
    } else {
      removeError('password');
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const { user } = await mutateAsync({ email, password });
      logEvent(analytics, 'login', {
        method: 'email',
        userId: user.uid,
        userEmail: email,
        displayName: user.displayName,
      });
      navigate('/home');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Box>
      <Form onSubmit={handleSubmit}>
        <FormGroup error={getErrorByFieldName('username')}>
          <FormInput
            labelText="E-mail"
            name="email"
            type="text"
            value={email}
            onChange={handleEmailChange}
          />
        </FormGroup>
        <FormGroup error={getErrorByFieldName('password')}>
          <FormInput
            labelText="Senha"
            name="password"
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </FormGroup>
        <Button
          maxWidth="12rem"
          disabled={!isFormValid || isLoading}
          isLoading={isLoading}
          type="submit"
        >
          Entrar
        </Button>
      </Form>
    </Box>
  );
}
