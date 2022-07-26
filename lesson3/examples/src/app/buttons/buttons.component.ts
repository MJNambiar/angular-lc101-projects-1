import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'buttons',
   templateUrl: './buttons.component.html',
   styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {
   buttonHeading: string = "Buttons"
   inactiveGold: boolean = false;
   inactiveSilver: boolean = false;
   inactiveCopper: boolean = false;

   constructor() { }

   ngOnInit() { }

   changeStatus () {
      this.inactiveGold =!this.inactiveGold;
      this.inactiveSilver = !this.inactiveSilver;
      this.inactiveCopper = !this.inactiveCopper;
   }

}


// <!-- const toggleState = 
//     () => {
//         this.copperActive = !this.copperActive;
//         this.goldActive = !this.goldActive;
//         this.silverActive = !this.silverActive;
//     } -->