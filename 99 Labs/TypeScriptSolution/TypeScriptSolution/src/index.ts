import { Util } from './util'
import { Car } from './car'
import { State } from './state'

let util = new Util();
var webtitle1 = util.get("https://jsonplaceholder.typicode.com/posts/1");

util.log();

function drivePorsche(){
    let porsche = new Car();
    porsche.drive();
}

//export method to global namespace - otherwise is is not available for function call
(<any>window).drive = drivePorsche;

(<any>window).state = new State();