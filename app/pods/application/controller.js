import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class ApplicationController extends Controller {
  @tracked items = [
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
      label: 'Wyspać się',
    },
  ];

  @action
  onInputValue(event) {
    this.newTaskValue = event.target.value;
  }

  @action
  addNewTask(event) {
    event.preventDefault();
    this.items = [
      ...this.items,
      {
        isDone: false,
        label: this.newTaskValue,
      },
    ];
  }
}
