import { Component, OnInit } from '@angular/core';
import { NgForm, FormArray, FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  recipeForm: FormGroup;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.initForm();
  }

  onSignIn(form: NgForm){
    const email = form.value.email;
    const password = form.value.password;

    this.authService.signInUser(email,password);
  }

  private initForm() {
    let recipeName = '';
    let recipeImg = '';



    this.recipeForm = new FormGroup({
      'email': new FormControl(recipeName,Validators.compose([Validators.required, Validators.email])),
      'password': new FormControl(recipeImg, Validators.required),
    });
  }


}
