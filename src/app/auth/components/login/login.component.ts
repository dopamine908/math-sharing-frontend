import { Component, OnInit } from '@angular/core';
import { I18nService } from 'src/app/i18n/i18n.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginBgWidth = 520;
  constructor(
  ) { }
  ngOnInit(): void {

  }

}
