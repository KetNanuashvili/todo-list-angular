import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appStatusHighlight]'
})
export class StatusHighlightDirective implements OnInit{
  @Input('appStatusHighlight') isCompleted: boolean | undefined = false;
  constructor(private elementRef: ElementRef, private renderer2: Renderer2) { }

  ngOnInit(): void {
    if(this.isCompleted){
      this.renderer2.addClass(this.elementRef.nativeElement, 'completed');
    }
  }
}
