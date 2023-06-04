export const daysOfTheWeek = [
  'Segunda-feira',
  'Terça-feira',
  'Quarta-feira',
  'Quinta-feira',
  'Sexta-feira',
  'Sábado',
  'Domingo',
];

export const educationLevels = [
  { text: 'Analfabeto', value: 'unlettered' },
  { text: 'Fundamental Incompleto', value: 'elementaryIncompleted' },
  { text: 'Fundamental Completo', value: 'elementaryCompleted' },
  { text: 'Médio Incompleto', value: 'highSchoolIncompleted' },
  { text: 'Médio Completo', value: 'highSchoolCompleted' },
  { text: 'Superior Incompleto', value: 'ungraduated' },
  { text: 'Superior Completo', value: 'graduated' },
];

export const gendersList = [
  { text: 'Masculino', value: 'man' },
  { text: 'Feminino', value: 'woman' },
  { text: 'Outros', value: 'others' },
];

export const maritalStatusList = [
  { text: 'Solteiro', value: 'single' },
  { text: 'Casado', value: 'married' },
  { text: 'Divorciado', value: 'divorced' },
];

export const getHours = (start: number, end: number) => {
  const startHours = new Date(start).getHours();
  const startMinutes = new Date(start).getMinutes();
  const endHours = new Date(end).getHours();
  const endMinutes = new Date(end).getMinutes();

  const fixedStartHours =
    startHours < 10 ? '0' + String(startHours) : String(startHours);
  const fixedStartMinutes =
    startMinutes < 10 ? '0' + String(startMinutes) : String(startMinutes);
  const fixedEndHours = endHours < 10 ? '0' + String(endHours) : endHours;
  const fixedEndMinutes =
    endMinutes < 10 ? '0' + String(endMinutes) : String(endMinutes);

  return [
    `${fixedStartHours}:${fixedStartMinutes}`,
    `${fixedEndHours}:${fixedEndMinutes}`,
  ];
};

export const removeCharacteres = (value: string) => value.replace(/\D/g, '');

export const getCurrentDate = () => {
  const date = new Date();

  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');

  return `${year}-${month}-${day}`;
};

export const getCurrentDateByTimestamp = (timestamp: number) => {
  const date = new Date(timestamp);

  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');

  return `${year}-${month}-${day}`;
};

type ObjectValue = {
  [key: string]: any;
};

export const getDifferentElements = (
  originalObject: ObjectValue,
  updatedObject: ObjectValue
): ObjectValue => {
  const differentElements: ObjectValue = {};

  for (const key in originalObject) {
    if (
      originalObject.hasOwnProperty(key) &&
      updatedObject.hasOwnProperty(key)
    ) {
      if (originalObject[key] !== updatedObject[key]) {
        differentElements[key] = updatedObject[key];
      }
    }
  }

  return differentElements;
};