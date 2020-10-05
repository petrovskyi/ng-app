import { element } from "protractor";
import {
  Directive,
  Input,
  HostBinding,
  HostListener,
  TemplateRef,
  ViewContainerRef,
  ElementRef,
  Renderer2,
} from "@angular/core";
import { Template } from "@angular/compiler/src/render3/r3_ast";
@Directive({
  selector: "[appDropDown]",
})
export class DropdownDirective {
  @HostBinding("class.open") isOpen: boolean = false;

  @HostListener("mouseenter")
  enter() {
    this.isOpen = true;
  }
  @HostListener("mouseleave")
  leave() {
    this.isOpen = false;
  }

  constructor(private elementRef: ElementRef, private render: Renderer2) {}

  // constructor(
  //   private templateRef: TemplateRef<any>,
  //   private viewContainer: ViewContainerRef
  // ) {}

  //   @Input() set dropDown(status: boolean) {
  //     if (!status) {
  //       this.viewContainer.createEmbeddedView(this.templateRef);
  //     } else {
  //       this.viewContainer.clear();
  //     }
  //   }
}
