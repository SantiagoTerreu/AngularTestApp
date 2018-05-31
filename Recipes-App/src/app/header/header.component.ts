import { Component, OnInit } from '@angular/core';
import { ServerService } from '../shared/server.service';
import {Response} from "@angular/http";
import { AuthService } from '../auth/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private serverService: ServerService,private authService: AuthService, private route: ActivatedRoute, private router: Router){}
  ngOnInit() {
  }

  onSaveData(){
    this.serverService.storeRecipes().subscribe(
      (response: Response)=>{
      }
  );
  }

  onFetchData(){
    this.serverService.getRecipes();

  }

  onLogout(){
    this.authService.logout();
    this.router.navigate(['signin'], {relativeTo: this.route})
  }

}
