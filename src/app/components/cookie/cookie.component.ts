import { Component, Input, OnInit } from '@angular/core';
import { Color } from 'src/app/models/colors.enum';
import { Cookie } from 'src/app/models/cookie';

@Component({
  selector: 'app-cookie',
  templateUrl: './cookie.component.html',
  styleUrls: ['./cookie.component.css'],
})
export class CookieComponent implements OnInit {
  @Input() CookieSelector: Cookie;

  Cookies: Cookie[] = [
    { id: 1, name: 'Cookie 1', color: Color.Brown, ChipNum: 0 },
    { id: 2, name: 'Cookie 2', color: Color.Brown, ChipNum: 0 },
  ];
  Colors = Color;
  keys: any[];

  constructor() {
    this.keys = Object.keys(this.Colors).filter(Number);
  }
  ngOnInit() {
    this.drawCookies();
  }

  drawCookies() {
    let cookiesDiv = document.getElementById('cookiesDiv');

    cookiesDiv!.innerHTML = '';

    for (let cookie of this.Cookies) {
      let newCookieDiv: HTMLElement = document.createElement('div');
      newCookieDiv.className = 'cookie';
      newCookieDiv.style.backgroundColor = cookie.color.toString();
      newCookieDiv.innerHTML = cookie.ChipNum.toString();

      cookiesDiv!.append(newCookieDiv);
    }
  }
  addChips() {
    this.CookieSelector.ChipNum++;
    console.log(this.CookieSelector.ChipNum);
  }
}
