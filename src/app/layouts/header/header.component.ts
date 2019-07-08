import { Component, OnInit } from '@angular/core';
import { APPURL } from '../../../config.app.json'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  private APPURL: string = APPURL;

  constructor() { }

  ngOnInit() {}

}
