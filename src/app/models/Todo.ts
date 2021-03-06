import {log} from 'util';

export class Todo {
  constructor(id: number, title: string, completed: boolean) {
    this.id = id;
    this.title = title;
    this.completed = completed;
  }

  id: number;
  title: string;
  completed: boolean;

  changeStatus() {
    this.completed = !this.completed;
  }
}
