import React, { useState } from 'react';
import FormInput from '../../components/FormInput';
import FormSelect from '../../components/FormSelect';
import {
  educationLevels,
  gendersList,
  maritalStatusList,
  removeCharacteres,
} from '../../utils';
import {
  ButtonContainer,
  Container,
  Header,
  HeaderTitle,
  InlineInputs,
} from './styles';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { LinkStyled } from '../../components/Link';
import { useTheme } from 'styled-components';
import Button from '../../components/Button';
import useAuth from '../../hooks/useAuth';
import { PatientInfosType } from '../../types';
import { createPatient } from '../../services/database';

// TODO conseguir adicionar um paciente no
export default function NewPatient() {
  const [name, setName] = useState('');
  const [occupation, setOccupation] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [birthday, setBirthday] = useState('');
  const [gender, setGender] = useState('man');
  const [maritalStatus, setMaritalStatus] = useState('single');
  const [scholarity, setScholarity] = useState('unlettered');
  const [address, setAddress] = useState({
    street: '',
    number: '',
    cep: '',
    city: '',
    country: '',
  });
  const { currentUser } = useAuth();
  const theme = useTheme();

  // TODO criar um hook para lidar com handleChanges
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleOccupationChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setOccupation(event.target.value);
  };

  const handleGenderChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setGender(event.target.value);
  };

  const handlePhoneNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPhoneNumber(event.target.value);
  };

  const handleMaritalStatus = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setMaritalStatus(event.target.value);
  };

  const handleScholarity = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setScholarity(event.target.value);
  };

  const handleBirthdayChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBirthday(event.target.value);
  };

  const handleAddressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    switch (event.target.name) {
      case 'street':
        setAddress((prevState) => ({
          ...prevState,
          street: event.target.value,
        }));
        break;
      case 'number':
        setAddress((prevState) => ({
          ...prevState,
          number: event.target.value,
        }));
        break;
      case 'cep':
        setAddress((prevState) => ({ ...prevState, cep: event.target.value }));
        break;
      case 'city':
        setAddress((prevState) => ({ ...prevState, city: event.target.value }));
        break;
      case 'country':
        setAddress((prevState) => ({
          ...prevState,
          country: event.target.value,
        }));
        break;
      default:
        setAddress({
          street: '',
          number: '',
          cep: '',
          city: '',
          country: '',
        });
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const patientInfos: PatientInfosType = {
      userId: currentUser?.uid,
      name,
      occupation,
      phoneNumber: removeCharacteres(phoneNumber),
      gender,
      address,
      birthdayDate: new Date(birthday).getTime(),
      scholarity,
    };

    await createPatient(patientInfos);
    console.log(patientInfos);
  };

  return (
    <Container>
      <Header>
        <LinkStyled to="/home">
          <AiOutlineArrowLeft
            color={theme.colors.blue[800]}
            fontSize={'1.8rem'}
          />
          Voltar
        </LinkStyled>
        <HeaderTitle>Adicionar paciente</HeaderTitle>
      </Header>
      <form onSubmit={handleSubmit}>
        <FormInput
          labelText="Nome"
          name="pacientName"
          type="text"
          value={name}
          onChange={handleNameChange}
        />
        <InlineInputs>
          <FormInput
            labelText="Profissão"
            name="occupation"
            type="text"
            value={occupation}
            onChange={handleOccupationChange}
          />

          <FormInput
            labelText="Número de telefone"
            name="phoneNumber"
            type="text"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
          />
        </InlineInputs>

        <InlineInputs>
          <FormInput
            labelText="Data de nascimento"
            name="birthday"
            type="date"
            value={birthday}
            onChange={handleBirthdayChange}
          />
          <FormSelect
            labelText="Sexo"
            name="gender"
            value={gender}
            options={gendersList}
            onChange={handleGenderChange}
          />
        </InlineInputs>

        <InlineInputs>
          <FormSelect
            labelText="Estado civil"
            name="maritalStatus"
            value={maritalStatus}
            options={maritalStatusList}
            onChange={handleMaritalStatus}
          />
          <FormSelect
            labelText="Nível de escolaridade"
            name="scholarity"
            value={scholarity}
            options={educationLevels}
            onChange={handleScholarity}
          />
        </InlineInputs>

        <InlineInputs>
          <FormInput
            labelText="Rua"
            name="street"
            type="text"
            value={address.street}
            onChange={handleAddressChange}
            className="allLine"
          />
          <FormInput
            labelText="Número"
            name="number"
            type="text"
            value={address.number}
            onChange={handleAddressChange}
            className="first"
          />
          <FormInput
            labelText="CEP"
            name="cep"
            type="text"
            value={address.cep}
            onChange={handleAddressChange}
            className="second"
          />
          <FormInput
            labelText="Cidade"
            name="city"
            type="text"
            value={address.city}
            onChange={handleAddressChange}
            className="first"
          />
          <FormInput
            labelText="País"
            name="country"
            type="text"
            value={address.country}
            onChange={handleAddressChange}
            className="second"
          />
        </InlineInputs>

        <ButtonContainer>
          <Button maxWidth="12rem">Adicionar paciente</Button>
        </ButtonContainer>
      </form>
    </Container>
  );
}
