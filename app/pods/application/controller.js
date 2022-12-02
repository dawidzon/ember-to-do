import Controller from '@ember/controller';

export default class ApplicationController extends Controller {
  items = [
    {
      isDone: false,
      label: 'Umyć okna',
    },
    {
      isDone: true,
      label: 'Zjeść karpia',
    },
    {
      isDone: true,
      label: 'Wypić bimberek',
    },
    {
      isDone: false,
      label: 'Iść spać',
    },
    {
      isDone: false,
      label: 'Wstać',
    },
  ];
}
