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
  address: PatientAddressType;
  birthdayDate: number;
  scholarity: string;
  schedule?: {
    dayOfWeek: number;
    start: number;
    end: number;
  };
};
