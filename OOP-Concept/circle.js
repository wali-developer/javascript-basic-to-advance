// ES6 module
const _radius = new WeakMap();
class Circle {
    constructor(radius){
        _radius.set(this, radius);
    }
    draw(){
        console.log('Draw...' + _radius.get(this));
    }
    
}
export {Circle}
