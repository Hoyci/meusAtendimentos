export type PatientProps = {
  userId: string;
  id: string;
  name: string;
  gender: string;
  cpf: string;
  phoneNumber: string;
  address: {
    street: string;
    number: number;
    cep: string;
    city: string;
    uf: string;
  };
  email: string;
  birthdayDate: number;
  scholarity: string;
  occupation: string;
  schedule: {
    dayOfWeek: number;
    start: number;
    end: number;
  };
};
