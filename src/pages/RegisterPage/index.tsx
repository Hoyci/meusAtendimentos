import { useMutation } from '@tanstack/react-query';
import { logEvent } from 'firebase/analytics';
import { updateProfile } from 'firebase/auth';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { analytics } from '../../../firebaseConfig';
import Box from '../../components/Box';
import Button from '../../components/Button';
import Form from '../../components/Form';
import FormGroup from '../../components/FormGroup';
import FormInput from '../../components/FormInput';
import useErrors from '../../hooks/useErrors';
import { signUp } from '../../services/auth';

export default function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();
  const { errors, getErrorByFieldName, setError, removeError } = useErrors();

  const { mutateAsync, isLoading } = useMutation({
    mutationFn: signUp,
  });

  const isFormValid =
    password.length !== 0 &&
    errors.length === 0 &&
    password === confirmPassword;

  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);

    if (!event.target.value) {
      setError({
        field: 'name-register',
        message: 'Nome é obrigatório',
      });
    } else {
      removeError('name-register');
    }
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);

    if (!event.target.value) {
      setError({
        field: 'email-register',
        message: 'Email é obrigatório',
      });
    } else {
      removeError('email-register');
    }
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);

    if (!event.target.value) {
      setError({
        field: 'password-register',
        message: 'Senha é obrigatória',
      });
    } else {
      removeError('password-register');
    }
  };

  const handleConfirmPasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setConfirmPassword(event.target.value);

    if (!event.target.value) {
      setError({
        field: 'confirmPassword-register',
        message: 'Confirmação de senha é obrigatório',
      });
    } else {
      removeError('confirmPassword-register');
    }

    if (event.target.value !== password) {
      setError({
        field: 'confirmPasswordEqual-register',
        message: 'As senhas precisam ser iguais',
      });
    } else {
      removeError('confirmPasswordEqual-register');
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const { user } = await mutateAsync({ email, password });
      await updateProfile(user, {
        displayName: name,
      });
      logEvent(analytics, 'user_register', {
        method: 'email',
        userId: user.uid,
        userEmail: user.email,
        displayName: user.displayName,
      });
      navigate('/home');
    } catch (err) {
      // TODO: Use toast when email is already in use
      console.log(err);
    }
  };

  return (
    <Box>
      <Form onSubmit={handleSubmit}>
        <FormGroup error={getErrorByFieldName('name-register')}>
          <FormInput
            labelText="Nome"
            name="name"
            type="text"
            value={name}
            onChange={handleChangeName}
          />
        </FormGroup>
        <FormGroup error={getErrorByFieldName('email-register')}>
          <FormInput
            labelText="E-mail"
            name="email"
            type="text"
            value={email}
            onChange={handleEmailChange}
          />
        </FormGroup>
        <FormGroup error={getErrorByFieldName('password-register')}>
          <FormInput
            labelText="Senha"
            name="password"
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </FormGroup>
        <FormGroup
          error={
            getErrorByFieldName('confirmPassword-register') ||
            getErrorByFieldName('confirmPasswordEqual-register')
          }
        >
          <FormInput
            labelText="Confirme sua senha"
            name="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
        </FormGroup>
        <Button
          maxWidth="12rem"
          disabled={!isFormValid || isLoading}
          isLoading={isLoading}
          type="submit"
        >
          Cadastrar
        </Button>
      </Form>
    </Box>
  );
}
