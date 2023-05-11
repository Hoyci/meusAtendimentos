export const daysOfTheWeek = [
  'Segunda-feira',
  'Terça-feira',
  'Quarta-feira',
  'Quinta-feira',
  'Sexta-feira',
  'Sábado',
  'Domingo',
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
