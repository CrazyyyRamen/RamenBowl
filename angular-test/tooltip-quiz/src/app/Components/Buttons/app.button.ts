import { Component } from '@angular/core';

@Component({
    selector: 'app-buttons',
    templateUrl:'./app.button.html',
    styleUrls:['./app.button.sass']
})

export class ButtonComponents{
    aMsg: string = 'This is A Button';
    bMsg: string = 'This is B Button';

    isATooltipHide: boolean = false;
    isBTooltipHide: boolean = false;

    ABtnClick(){
        this.isBTooltipHide = false;
        this.isATooltipHide = !this.isATooltipHide;

        // console.log('A: ' + this.isATooltipHide + '; B: ' + this.isBTooltipHide);
    }

    BBtnClick(){
        this.isATooltipHide = false;
        this.isBTooltipHide = !this.isBTooltipHide;

        // console.log('A: ' + this.isATooltipHide + '; B: ' + this.isBTooltipHide);
    }

    HideTooltip(){
        this.isATooltipHide = false;
        this.isBTooltipHide = false;
    }
}