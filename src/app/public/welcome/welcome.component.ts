import {Component, OnInit, AfterContentInit} from '@angular/core';
import * as Parallax from 'parallax-js';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit, AfterContentInit {

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterContentInit() {
    const logotype = document.getElementsByClassName('logotype-col').item(0);
    const parallaxLogotypeInstance = new Parallax(logotype);
    const tokenLogin = document.getElementsByClassName('token-row').item(0);
    const parallaxTokenLoginInstance = new Parallax(tokenLogin);
    const tokenQuiz = document.getElementsByClassName('token-row').item(1);
    const parallaxTokenQuizInstance = new Parallax(tokenQuiz);
  }
}


