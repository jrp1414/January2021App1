import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[better-highlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input("better-highlight") defaultColor: string = "";
  @Input("highlight") highlightColor: string = "";
  @HostBinding("style.backgroundColor") style;
  constructor(private el: ElementRef) { }
  ngOnInit(): void {
    // this.el.nativeElement.style.backgroundColor = this.defaultColor; 
    // this.style = { backgroundColor: this.defaultColor, color: 'blue' };
    this.style = this.defaultColor;
  } 

  @HostListener("click") OnClick() {
    alert("clicked");
  }

  @HostListener("mouseenter") OnMouseEnter() {
    // this.style= {backgroundColor:this.highlightColor};
    this.style = this.highlightColor;
  }

  @HostListener("mouseleave") OnMouseLeave() {
    // this.style= {backgroundColor:this.defaultColor};
    this.style = this.defaultColor;
  }
}
