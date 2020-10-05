import { Injectable, Output, EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

@Injectable()
export class ShoppingListService {
  ingredients: Ingredient[] = [];
  @Output() IngredientsChanged = new EventEmitter<Ingredient[]>();
  @Output() shoppingListOpen = new EventEmitter<string>();

  ingredientsCopy(): Ingredient[] {
    return this.ingredients.slice();
  }

  addIngridient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.IngredientsChanged.emit(this.ingredients.slice());
  }
}
