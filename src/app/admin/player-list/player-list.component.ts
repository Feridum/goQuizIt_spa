import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {select} from '@angular-redux/store';


const mockData = [
  {
    id: '1',
    firstName: 'jon',
    lastName: 'doe',
    score: '10'
  },
  {
    id: '2',
    firstName: 'jane',
    lastName: 'foe',
    score: '0'
  }
]
@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss']
})
export class PlayerListComponent implements OnInit {

  @select(['router']) route: Observable<string>;
  playersList = mockData
  constructor() { }

  ngOnInit() {
  }

}
