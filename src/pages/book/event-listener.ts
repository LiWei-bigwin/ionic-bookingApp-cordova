declare var window: any;

export class EventListener {
  xDown: any = null;
  yDown: any = null;
  xDiff: any = null;
  yDiff: any = null;
  element: any = null;
  onLeft: any = () => { };
  onRight: any = () => { };
  onCenter: any = () => { };

  constructor(element) {
    this.element = element;
  }

  removeContextMenu() {
    this.element.oncontextmenu = (e) => {
      e.preventDefault();
    }
  }

  run() {
    let touchEvent = 'ontouchstart' in window ? 'ontouchstart' : 'onclick';
    this.element[touchEvent] = (evt) => {
        // console.log("evt.clientX", evt.clientX);
        // console.log("evt.layerX", evt.layerX);
        // console.log("evt.offsetX", evt.offsetX);
        // console.log("evt.screenX", evt.screenX);
        // console.log("evt.x", evt.x);
        // console.log("availWidth", evt.view.screen.availWidth);
        let x = evt.screenX;
        let y = evt.screenY;
        if (touchEvent == 'ontouchstart') {
          var touch = evt.changedTouches[0];
          x = touch.screenX;
          y = touch.screenY;
        }


        let width = evt.view.screen.availWidth;
        let height = evt.view.screen.availHeight;
        let leftBorder = (width / 5);
        let rightBorder = width - leftBorder;

        if (x > rightBorder) {
          this.onRight();
        } else if (x < leftBorder) {
          this.onLeft();
        } else {
          this.onCenter();
        }
      };
  }
  stop() {
    this.element.onclick = null;
  }
}
