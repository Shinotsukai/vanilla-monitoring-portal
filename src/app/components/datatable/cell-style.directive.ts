import { Directive, ElementRef, Input, Renderer2 } from "@angular/core";

@Directive({
    selector:'[appStyleCell]',
})

export class StyleCellDirective{
    @Input() appStyleCell:any ='';
    @Input() key:string = '';

    constructor(private el:ElementRef, private renderer:Renderer2){}

    ngOnInit(){
        if (this.appStyleCell === undefined){
            // Undefined style
        }

        if (typeof this.appStyleCell === 'number'){
            // Number Styling
        }




    }
}