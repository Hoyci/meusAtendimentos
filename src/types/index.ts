export type PatientAddressType = {
  street: string;
  number: string;
  cep: string;
  city: string;
  country: string;
};

export type PatientInfosType = {
  userId?: string;
  id: string;
  name: string;
  occupation: string;
  phoneNumber: string;
  gender: string;
  maritalStatus: string;
  address: PatientAddressType;
  birthdayDate: number;
  scholarity: string;
  schedule?: {
    dayOfWeek: number;
    start: number;
    end: number;
  };
};

export type PatientObject = Partial<PatientInfosType>;

export type updatePatientType = {
  patientId: string;
  patientObject: PatientObject;
};

export type UserInfoType = {
  id: string;
  name: string;
  email: string;
};