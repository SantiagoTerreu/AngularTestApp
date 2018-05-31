import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = "Hannibal's Kitchen";
  loadedFeature = "";

  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyAwdB8GoC6qp-E0E-U9U00YJ9QK_4yqHvA",
      authDomain: "ng-recipe-book-e4073.firebaseapp.com"
    });
  }

  onNavigate(feature : string){
    this.loadedFeature = feature;
  }
}
