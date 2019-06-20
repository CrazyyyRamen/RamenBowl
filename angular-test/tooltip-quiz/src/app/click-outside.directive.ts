import { Directive, ElementRef, Output, EventEmitter, HostListener } from '@angular/core';

@Directive({
  selector: '[appClickOutside]'
})
export class ClickOutsideDirective {

  constructor(private el : ElementRef) { }

  @Output() appClickOutside = new EventEmitter();

  @HostListener('document:click',['$event.target'])
  public onClick(targetElement){
    if(!this.el.nativeElement.contains(targetElement)){
      this.appClickOutside.emit(null);
    }
  }

  @HostListener('document:keydown.escape', ['$event']) 
  public onKeydownHandler(event: KeyboardEvent) {
    if (event.keyCode === 27) {
      this.appClickOutside.emit(null);
  }
  }
}
