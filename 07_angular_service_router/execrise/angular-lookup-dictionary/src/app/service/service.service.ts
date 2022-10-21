import { Injectable } from '@angular/core';
import {IWords} from "../module/iwords";


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  words: IWords[] = [
    {word: 'dog', mean: 'con cún'},
    {word: 'cat', mean: 'con mèo'},
    {word: 'fish', mean: 'con cá'},
    {word: 'bird', mean: 'con chim'},
    {word: 'chicken', mean: 'con gà'},
    {word: 'camel', mean: 'con lạc đà'},
    {word: 'snake', mean: 'con rắn'},
    {word: 'durk', mean: 'con vịt'},
    {word: 'dragon', mean: 'con rồng'},
    {word: 'pig', mean: 'con lợn'}
  ];

  findAll() {
    return this.words;
  }

  findByWord(word: string) {
    return this.words.find(item => item.word === word);
  }

  constructor() { }
}
