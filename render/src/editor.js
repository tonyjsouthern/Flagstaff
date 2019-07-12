export class Editor {

    constructor() {
        this.toolArray = ['frame', 'background', 'screenshot']
        this.frame = true; // sets the default tool selection

        this.frameUrl;
        this.frameHeight = '60';

        this.backgroundUrl;
        this.backgroundHeight = '100';
        this.backgroundBlur = '0';

        this.screenshotUrl;
        this.screenshotHeight = '400';
        this.screenshotWidth = '400';
        this.screenshotRadius = '0';

        this.displaySecondFrame = false;
    }

    activate() {
      this.makeDraggable();
    }

    selectFrame() {
        var self = this;
        var filters = {
            filters: [{
                name: 'Images',
                extensions: ['png']
            }]
        }
        window.remote.dialog.showOpenDialog(window.remote.getCurrentWindow(), filters,
            function(filepaths, bookmarks) {
                var _img = fs.readFileSync(filepaths[0]).toString('base64');
                var _out = '<img src="data:image/png;base64,' + _img + '" />';
                self.frameUrl = 'data:image/png;base64,' + _img;
            });
    }

    selectBackground() {
        var self = this;
        var filters = {
            filters: [{
                name: 'Images',
                extensions: ['png']
            }]
        }
        window.remote.dialog.showOpenDialog(window.remote.getCurrentWindow(), filters,
            function(filepaths, bookmarks) {
                var _img = fs.readFileSync(filepaths[0]).toString('base64');
                var _out = '<img src="data:image/png;base64,' + _img + '" />';
                self.backgroundUrl = 'data:image/png;base64,' + _img;
            });
    }

    selectScreenshot(){
      var self = this;
      var filters = {
          filters: [{
              name: 'Images',
              extensions: ['png']
          }]
      }
      window.remote.dialog.showOpenDialog(window.remote.getCurrentWindow(), filters,
          function(filepaths, bookmarks) {
              var _img = fs.readFileSync(filepaths[0]).toString('base64');
              var _out = '<img src="data:image/png;base64,' + _img + '" />';
              self.screenshotUrl = 'data:image/png;base64,' + _img;
          });
    }

    makeDraggable(){
      const position = { x: 0, y: 0 }

      interact('.draggable').draggable({
        listeners: {
          start (event) {
          },
          move (event) {
            position.x += event.dx;
            position.y += event.dy;

            event.target.style.transform =
              `translate(${position.x}px, ${position.y}px)`
          },
        }
      })
    }

    frameToggle(){
      if(this.displaySecondFrame == false){
        this.displaySecondFrame = true;
      }else {
        this.displaySecondFrame = false;
      }
    }

    genericToggle(arrayItem) {
        this.toolArray.forEach((data) => {
            if (arrayItem == data) {
                this[data] = true;
            } else {
                this[data] = false;
            }
        })
    }

}
