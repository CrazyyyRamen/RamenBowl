import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-tooltips',
    templateUrl:'./app.tooltips.html',
    styleUrls:['./app.tooltips.sass']
})

export class ToolTipsComponents{
    @Input() aMessage:string;
    @Input() bMessage:string;
    @Input() aTooltipState:string;
    @Input() bTooltipState:string;
}