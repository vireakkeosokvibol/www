import { Component, OnInit } from '@angular/core';
import { APP_URL } from 'src/config.json';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  APPURL: string = APP_URL;

  constructor() {}

  ngOnInit() {}
}
