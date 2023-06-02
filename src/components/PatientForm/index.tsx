import { ChangeEvent, useState } from 'react';
import Button from '../Button';
import FormInput from '../FormInput';
import FormSelect from '../FormSelect';
import {
  educationLevels,
  gendersList,
  getCurrentDate,
  maritalStatusList,
  removeCharacteres,
} from '../../utils';
import useAuth from '../../hooks/useAuth';
import { PatientInfosType } from '../../types';
import { Form, ButtonContainer, InlineInputs } from './styles';
import FormGroup from '../FormGroup';
import useErrors from '../../hooks/useErrors';

type NewPatientType = {
  onSubmit: (patientInfo: PatientInfosType) => Promise<void>;
};

export default function PatientForm({ onSubmit }: NewPatientType) {
  const [name, setName] = useState('');
  const [occupation, setOccupation] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [birthday, setBirthday] = useState(getCurrentDate());
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
  const { errors, getErrorByFieldName, setError, removeError } = useErrors();
  const { currentUser } = useAuth();

  const addressObjectIsEmpty = Object.values(address).every(
    (value) => value === null && value === undefined && value === ''
  );

  const isFormValid =
    name.length !== 0 &&
    occupation.length !== 0 &&
    phoneNumber.length !== 0 &&
    !addressObjectIsEmpty &&
    errors.length === 0;

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);

    if (!event.target.value) {
      setError({
        field: 'name',
        message: 'Nome é obrigatório',
      });
    } else {
      removeError('name');
    }
  };

  const handleOccupationChange = (event: ChangeEvent<HTMLInputElement>) => {
    setOccupation(event.target.value);

    if (!event.target.value) {
      setError({
        field: 'occupation',
        message: 'Profissão é obrigatória',
      });
    } else {
      removeError('occupation');
    }
  };

  const handleGenderChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setGender(event.target.value);

    if (!event.target.value) {
      setError({
        field: 'gender',
        message: 'Gênero é obrigatório',
      });
    } else {
      removeError('gender');
    }
  };

  const handlePhoneNumberChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(event.target.value);

    if (!event.target.value) {
      setError({
        field: 'phoneNumber',
        message: 'Número de telefone é obrigatório',
      });
    } else {
      removeError('phoneNumber');
    }
  };

  const handleMaritalStatus = (event: ChangeEvent<HTMLSelectElement>) => {
    setMaritalStatus(event.target.value);
  };

  const handleScholarity = (event: ChangeEvent<HTMLSelectElement>) => {
    setScholarity(event.target.value);
  };

  const handleBirthdayChange = (event: ChangeEvent<HTMLDataElement>) => {
    setBirthday(event.target.value);
  };

  const handleAddressChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    const messageValues = {
      street: 'Rua é obrigatória',
      number: 'Número é obrigatório',
      cep: 'Cep é obrigatório',
      city: 'Cidade é obrigatória',
      country: 'País é obrigatório',
    };

    setAddress((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    if (!value) {
      setError({
        field: name,
        message: messageValues[name as keyof typeof messageValues],
      });
    } else {
      removeError(name);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const patientInfos: PatientInfosType = {
      userId: currentUser?.uid,
      id: '',
      name,
      occupation,
      phoneNumber: removeCharacteres(phoneNumber),
      gender,
      address,
      birthdayDate: new Date(birthday).getTime(),
      scholarity,
    };

    await onSubmit(patientInfos);
    console.log(patientInfos);
  };

  return (
    <Form onSubmit={handleSubmit} noValidate>
      <FormGroup error={getErrorByFieldName('name')}>
        <FormInput
          labelText="Nome"
          name="name"
          type="text"
          value={name}
          onChange={handleNameChange}
        />
      </FormGroup>

      <InlineInputs>
        <FormGroup error={getErrorByFieldName('occupation')}>
          <FormInput
            labelText="Profissão"
            name="occupation"
            type="text"
            value={occupation}
            onChange={handleOccupationChange}
          />
        </FormGroup>
        <FormGroup error={getErrorByFieldName('phoneNumber')}>
          <FormInput
            labelText="Número de telefone"
            name="phoneNumber"
            type="text"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
          />
        </FormGroup>
      </InlineInputs>

      <InlineInputs>
        <FormGroup error={getErrorByFieldName('birthday')}>
          <FormInput
            labelText="Data de nascimento"
            name="birthday"
            type="date"
            value={birthday}
            onChange={handleBirthdayChange}
          />
        </FormGroup>

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

      <FormGroup error={getErrorByFieldName('street')}>
        <FormInput
          labelText="Rua"
          name="street"
          type="text"
          value={address.street}
          onChange={handleAddressChange}
          className="allLine"
        />
      </FormGroup>

      <InlineInputs>
        <FormGroup error={getErrorByFieldName('number')}>
          <FormInput
            labelText="Número"
            name="number"
            type="text"
            value={address.number}
            onChange={handleAddressChange}
            className="first"
          />
        </FormGroup>

        <FormGroup error={getErrorByFieldName('cep')}>
          <FormInput
            labelText="CEP"
            name="cep"
            type="text"
            value={address.cep}
            onChange={handleAddressChange}
            className="second"
          />
        </FormGroup>

        <FormGroup error={getErrorByFieldName('city')}>
          <FormInput
            labelText="Cidade"
            name="city"
            type="text"
            value={address.city}
            onChange={handleAddressChange}
            className="first"
          />
        </FormGroup>

        <FormGroup error={getErrorByFieldName('country')}>
          <FormInput
            labelText="País"
            name="country"
            type="text"
            value={address.country}
            onChange={handleAddressChange}
            className="second"
          />
        </FormGroup>
      </InlineInputs>

      <ButtonContainer>
        <Button disabled={!isFormValid} maxWidth="12rem">
          Adicionar paciente
        </Button>
      </ButtonContainer>
    </Form>
  );
}
