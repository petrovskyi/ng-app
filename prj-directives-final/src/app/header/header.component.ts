import { Component, EventEmitter, Output, OnInit } from "@angular/core";
import { ShoppingListService } from "../services/shopping-list.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
})
export class HeaderComponent implements OnInit {
  @Output() featureSelected = new EventEmitter<string>();

  constructor(private shoppingListService: ShoppingListService) {}
  ngOnInit() {
    this.shoppingListService.shoppingListOpen.subscribe((call) => {
      this.featureSelected.emit(call);
    });
  }
  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }
}
