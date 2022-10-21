import { Component, OnInit } from '@angular/core';
import {IWords} from "../module/iwords";
import {ServiceService} from "../service/service.service";

@Component({
  selector: 'app-dictionary-list',
  templateUrl: './dictionary-list.component.html',
  styleUrls: ['./dictionary-list.component.css']
})
export class DictionaryListComponent implements OnInit {

  words: IWords[] = [];

  constructor(private dictionaryService: ServiceService) { }

  ngOnInit(): void {
    this.words = this.dictionaryService.findAll();
  }

}
