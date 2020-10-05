import { Ingredient } from "./../../shared/ingredient.model";
import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";

import { Recipe } from "../recipe.model";
import { ShoppingListService } from "../../services/shopping-list.service";

@Component({
  selector: "app-recipe-detail",
  templateUrl: "./recipe-detail.component.html",
  styleUrls: ["./recipe-detail.component.css"],
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {}

  onShoppingList(feature: string) {
    this.shoppingListService.shoppingListOpen.emit(feature);
    this.recipe.ingredients.forEach((ingredient) => {
      this.shoppingListService.addIngridient(ingredient);
    });
  }
}
