import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {
  messages: String[] = [];

  constructor() { }

  add(message: String): void {
    this.messages.push(message);
  }

  clear(): void {
    this.messages = [];
  }


}
