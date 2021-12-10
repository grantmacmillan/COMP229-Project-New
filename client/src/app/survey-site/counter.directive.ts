/*
Student IDs: 
  - 301129935
  - 301136902
  - 301180926
  - 301166198
  - 301134374
  - 301153049
WebApp name: Survey Site
Description: Counter Directive - counter.directive.ts
*/
import { Directive, ViewContainerRef, TemplateRef, Input, SimpleChanges, OnChanges } from '@angular/core';

@Directive({
  selector: '[counterOf]'
})
export class CounterDirective implements OnChanges
{
  constructor(private container: ViewContainerRef,
              private template: TemplateRef<any>) { }

  @Input('counterOf')
  counter: number;

  ngOnChanges(changes: SimpleChanges): void
  {
    this.container.clear();
    for (let index = 0; index < this.counter; index++) {
      this.container.createEmbeddedView(this.template,
        new CounterDirectiveContext(index + 1));
    }
  }
}

class CounterDirectiveContext
{
  constructor(public $implicit: any) {}
}
