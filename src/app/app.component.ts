import { AfterViewInit, Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  bgL1: HTMLElement| null =  null;
  bgL2: HTMLElement| null =  null;
  bgL3: HTMLElement| null =  null;
  
  constructor(
    private renderer: Renderer2
  ) {
  }

  ngAfterViewInit() {
    this.bgL1 = document.getElementById("background-layer-1");
    this.bgL2 = document.getElementById("background-layer-2");
    this.bgL3 = document.getElementById("background-layer-3");
    //For Mouse
    document.addEventListener("mousemove", (e) => {
      this.move(e);
    });
    //For touch
    document.addEventListener("touchmove", (e) => {
      this.move(e);
    });
  }

  isTouchDevice(){
    try{
        //We try to create TouchEvent. It would fail for desktops and throw an error
        document.createEvent("TouchEvent");
        return true;
    }
    catch (E) {
        return false;
    }
  }

  move(e: any) {
    //Try, catch to avoid any errors for touch screens (Error thrown when user doesn't move his finger)
    try{
        //PageX and PageY return the position of client's cursor from top left of screen
        var x = !this.isTouchDevice() ? e.pageX : e.touches[0].pageX;
        var y = !this.isTouchDevice() ? e.pageY : e.touches[0].pageY;
    }
    catch(e){}
    //set left of div based on mouse position
    this.renderer.setStyle(this.bgL1, 'left', (-0.025 * x) + "px");
    this.renderer.setStyle(this.bgL2, 'left', (-0.05 * x) + "px");
    this.renderer.setStyle(this.bgL3, 'left', (-0.075 * x) + "px");
    //set top of div based on mouse position
    this.renderer.setStyle(this.bgL1, 'top', (-0.0125 * y) + "px");
    this.renderer.setStyle(this.bgL2, 'top', (-0.025 * y) + "px");
    this.renderer.setStyle(this.bgL3, 'top', (-0.0375 * y) + "px");
};
}
