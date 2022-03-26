export const WEEK_DAYS: {id: number; date: number; day: string}[] = [
  {date: 12, day: 'пн', id: 1},
  {date: 13, day: 'вт', id: 2},
  {date: 14, day: 'ср', id: 3},
  {date: 15, day: 'чт', id: 4},
  {date: 16, day: 'пт', id: 5},
  {date: 17, day: 'сб', id: 6},
  {date: 18, day: 'вс', id: 7},
];

export const GYMS: {id: number; name: string}[] = [
  {id: 0, name: 'Все залы'},
  {id: 1, name: 'ТЦ Секрет'},
  {id: 2, name: 'Пр-т Речицкий'},
  {id: 3, name: 'Новый'},
];

export const PEOPLE: {id: number; time: string; name: string; gym: string}[] = [
  {time: '12:00', name: 'Екатерина', id: 1, gym: GYMS[1].name},
  {time: '13:00', name: 'Anna', id: 2, gym: GYMS[2].name},
  {time: '14:00', name: 'Lora', id: 3, gym: GYMS[1].name},
  {time: '15:00', name: 'Lu', id: 4, gym: GYMS[1].name},
  {time: '16:00', name: 'Olga', id: 5, gym: GYMS[2].name},
  {time: '17:00', name: 'Екатерина', id: 6, gym: GYMS[1].name},
  {time: '18:00', name: 'Виктория', id: 7, gym: GYMS[1].name},
];
