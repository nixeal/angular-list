import { Component, OnInit } from '@angular/core';
import {Heroin} from '../heroin';

@Component({
  selector: 'app-heroin',
  templateUrl: './heroin.component.html',
  styleUrls: ['./heroin.component.css']
})
export class HeroinComponent implements OnInit {
  heroin: Heroin ={
    id: 1,
    name:'Wonder-Woman'
  };
  constructor() { }

  ngOnInit(): void {
  }

}
