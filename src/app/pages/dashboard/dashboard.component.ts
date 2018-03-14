import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.styl']
})
export class DashboardComponent implements OnInit {

  gitUser: any;
  gitRepo: any;
  public github: FormGroup = new FormGroup({
    search: new FormControl()
  });

  submit() {
    this.api.getUser(this.github.value.search).subscribe(
      user => {
        this.gitUser = user;
        console.log(user);
      });
  }
  showRepo() {
    this.api.get(this.gitUser.repos_url).subscribe(res => {
      this.gitRepo = res;
      console.log(res);
      
    });
  }
  openProfile() {
    window.open(this.gitUser.html_url);
  }
  openRepo(repoAt) {
    window.open(repoAt.html_url);
    
  }
  constructor(private api: ApiService) { }

  ngOnInit() {
  }

}
