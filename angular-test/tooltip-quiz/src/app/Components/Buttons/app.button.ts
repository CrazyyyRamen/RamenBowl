import { Component } from '@angular/core';

@Component({
    selector: 'app-buttons',
    templateUrl:'./app.button.html',
    styleUrls:['./app.button.sass']
})

export class ButtonComponents{
    aMsg: string = 'This is A Button';
    bMsg: string = 'This is B Button';
    isATooltipHide: string = 'hideTooltip';
    isBTooltipHide: string = 'hideTooltip';

    ABtnClick(){
        this.isBTooltipHide = 'hideTooltip';

        this.isATooltipHide = this.isATooltipHide === 'hideTooltip' ? 'showTooltip' : 'hideTooltip';
        // console.log('A: ' + this.isATooltipHide + '; B: ' + this.isBTooltipHide);
    }

    BBtnClick(){
        this.isATooltipHide = 'hideTooltip';

        this.isBTooltipHide = this.isBTooltipHide === 'hideTooltip' ? 'showTooltip' : 'hideTooltip';
        // console.log('A: ' + this.isATooltipHide + '; B: ' + this.isBTooltipHide);
    }

    HideTooltip(){
        this.isATooltipHide = 'hideTooltip';
        this.isBTooltipHide = 'hideTooltip';
    }
}