import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { MurderService } from '../murder.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
@Component({
  selector: 'app-murder-edit',
  templateUrl: './murder-edit.component.html',
  styleUrls: ['./murder-edit.component.css']
})
export class MurderEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') mrdForm: NgForm;
  subscription : Subscription;
  editMode = false;
  editItemIndex: number;
  editedItem: Ingredient;

  constructor(private mrdService: MurderService) { }

  ngOnInit() {
    this.subscription = this.mrdService.startedEditing.subscribe(
      (index: number) => {
          this.editItemIndex = index;
          this.editMode = true;
          this.editedItem = this.mrdService.getIngredient(index);
          this.mrdForm.setValue({
            name: this.editedItem.name,
            number: this.editedItem.number
          })
      }
    );
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
  
  onClear(){
    this.mrdForm.reset();
    this.editMode = false;
  }

  onDelete(){
    this.mrdService.deleteIngredient(this.editItemIndex);
    this.onClear();
  }

  onAddItem(form : NgForm){
    const value = form.value;
    const newIngredient = new Ingredient (value.name , value.number);
    if (this.editMode) {
      this.mrdService.updateIngredient(this.editItemIndex,newIngredient);
    } else {this.mrdService.addIngredient(newIngredient);}
    form.reset();
    this.editMode = false;
  }

}
