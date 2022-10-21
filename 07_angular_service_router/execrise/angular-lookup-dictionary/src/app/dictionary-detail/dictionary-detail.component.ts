import { Component, OnInit } from '@angular/core';
import {IWords} from "../module/iwords";
import {ServiceService} from "../service/service.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit {

  yourWord: IWords;

  constructor(private deactivateService: ServiceService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const keyWord = this.activatedRoute.snapshot.params.word;
    this.yourWord = this.deactivateService.findByWord(keyWord);
  }

}
