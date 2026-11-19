export type Status = 'Новая' | 'В работе' | 'Готово'

export type Category = 'Соседи' | 'Бытовое' | 'Мебель' | 'Интернет'

export type RequestItem = {
  id: number
  title: string
  room: string
  category: Category
  details: string
  status: Status
}

export type NewRequest = {
  title: string
  room: string
  category: Category
  details: string
}

export const initialRequests: RequestItem[] = [
  {
    id: 1,
    title: 'Очень шумные соседи',
    room: '214',
    category: 'Соседи',
    details: 'Соседи из комнаты 215 очень шумно себя ведут и не дают покоя жителям.',
    status: 'Новая',
  },
  {
    id: 2,
    title: 'Нет интернета',
    room: '305',
    category: 'Интернет',
    details: 'Не работает общий интернет на этаже',
    status: 'В работе',
  },
  {
    id: 3,
    title: 'Горячий холодильник',
    room: '112',
    category: 'Бытовое',
    details: 'Холодильник "отключил" свой основное свойство. Из холодильника превратился в теплодильник',
    status: 'Готово',
  },
  {
    id: 4,
    title: 'Сломался шкаф',
    room: '214',
    category: 'Мебель',
    details: 'Полка в шкафу выпала из своего места, повредив остальные',
    status: 'Новая',
  },
  {
    id: 5,
    title: 'Сломалась кровать',
    room: '118',
    category: 'Мебель',
    details: 'Доски под матрасом сломались и спать приходится с больной спиной.',
    status: 'Новая',
  },
]

export function nextStatus(status: Status): Status {
  if (status === 'Новая') {
    return 'В работе'
  }
  return 'Готово'
}