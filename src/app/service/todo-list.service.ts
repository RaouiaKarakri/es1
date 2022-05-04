/* import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoListService { //cancelli tutto perché non ti serve in questo caso essendo un service statico

  constructor() { }
}
 */

import {TodoList} from './../interface/todo-list';
import axios from "axios";

export async function recupera(): Promise<TodoList[]>{
    return await (await fetch("assets/db.json")).json()
}

export async function recuperaAxios(): Promise<TodoList[]> {
    const risposta = (await axios.get<TodoList[]>("assets/db.json")).data;
    return risposta;
}
