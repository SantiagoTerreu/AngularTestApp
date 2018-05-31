import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { MurderService } from './murder.service';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-murder',
  templateUrl: './murder.component.html',
  styleUrls: ['./murder.component.css']
})
export class MurderComponent implements OnInit, OnDestroy {
  ingredients : Ingredient[] = [];
  private subscription: Subscription;
  constructor(private mrdService : MurderService) { }

  ngOnInit() {
    this.ingredients = this.mrdService.getIngredients();
    this.subscription= this.mrdService.ingredientsChanged.subscribe( (ingredients:Ingredient[]) => {
      this.ingredients = ingredients;
    }
    );
  }

  onEditItem(index : number){
    this.mrdService.startedEditing.next(index);
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
