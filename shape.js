function Shape(){
    this.name ;
    this.width;
    this.height;
    this.calculateArea = function(){
        console.log("the area of "+this.name+" is "+this.width*this.height);
    }

}
const newArea = new Shape()
newArea.name = 'Rectangle';
newArea.width = 12;
newArea.height = 5;

newArea.calculateArea();
