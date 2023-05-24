export type PatientInfosType = {
  userId?: string;
  id?: string;
  name: string;
  occupation: string;
  phoneNumber: string;
  gender: string;
  address: {
    street: string;
    number: string;
    cep: string;
    city: string;
    country: string;
  };
  birthdayDate: number;
  scholarity: string;
  schedule?: {
    dayOfWeek: number;
    start: number;
    end: number;
  };
};
