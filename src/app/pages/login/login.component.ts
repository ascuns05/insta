import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ApiService } from '../../services/api.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.styl']
})
export class LoginComponent implements OnInit {

  instagram = {
    url: 'https://api.instagram.com/oauth/authorize/?',
    options: {
      // client_id: '627146cb8fd8498cbf22a5aac3cdc462',
      // redirect_uri: 'localhost:4200',
      response_type: 'code',
      access_token: '5319640018.627146c.d2f62e541d0845a1a46053bb6b304d37'
    }
  }
  authINS() {
    console.log('vk auth');

    this.api.get(this.instagram.url, this.instagram.options).subscribe(res => {
      console.log(res);
    });    
  }

  constructor(private api: ApiService) { }

  ngOnInit() {

  }
}
