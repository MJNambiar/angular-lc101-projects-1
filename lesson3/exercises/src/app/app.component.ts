import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Exercises: Angular Lesson 3';

  color: string = 'green';
  height: number = 0;
  width: number = 0;
  message: string = 'Space shuttle ready for takeoff!';
  takeOffEnabled: boolean = true;

  gutterCheck(width, height) {
    if (width>260000 || width <0 || height<0 || height >340000) {
      this.color = 'orange';
    } else {
      this.color = 'blue';
    }
  }

  handleTakeOff() {
    let result = window.confirm('Are you sure the shuttle is ready for takeoff?');
    if (result) {
       this.color = 'blue';
       this.height = 10000;
       this.width = 0;
       this.message = 'Shuttle in flight.';
       this.takeOffEnabled = false;
    }
 }

 handleLand(rocketImage) {
  window.alert('The shuttle is landing. Landing gear engaged.');
     this.color = 'green';
     this.height = 0;
     this.width = 0;
     this.message = 'The shuttle has landed.';
     this.takeOffEnabled = true;
     rocketImage.style.bottom = '0px';
}

handleAbortMission(rocketImage) {
  let result = window.confirm('Are you sure you want to abort the mission?');
  if (result) {
     this.color = 'red';
     this.height = 0;
     this.width = 0;
     this.message = 'Mission aborted.';
     this.takeOffEnabled = true;
     rocketImage.style.bottom = '0px';
  }
}

moveRocket(rocketImage, direction) {
  if (direction === 'right') {
    let movement = parseInt(rocketImage.style.left) + 10 + 'px';
    rocketImage.style.left = movement;
    this.width = this.width + 10000;
  }
  if (direction === 'left') {
    let movement = parseInt(rocketImage.style.left) - 10 + 'px';
    rocketImage.style.left = movement;
    this.width = this.width + 10000;
  }
  if (direction === 'up') {
    this.height += 10000;
  }
  if (direction === 'down') {
    this.height -= 10000;
    }
  this.gutterCheck(this.width, this.height);
}
}
