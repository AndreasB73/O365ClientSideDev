"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function simpleClass() {
    var AnimalES6a = function () {
        function AnimalES6a(name) {
            _classCallCheck(this, AnimalES6a);

            this.name = name;
        }

        _createClass(AnimalES6a, [{
            key: "doSomething",
            value: function doSomething() {
                console.log("I'm a " + this.name);
            }
        }]);

        return AnimalES6a;
    }();

    debugger;
    var lionES6a = new AnimalES6a("Lion");
    lionES6a.doSomething();
}

function classWithGetSet() {
    var AnimalES6b = function () {
        function AnimalES6b(name) {
            _classCallCheck(this, AnimalES6b);

            this.name = name;
            this._age = 0;
        }

        _createClass(AnimalES6b, [{
            key: "doSomething",
            value: function doSomething() {
                console.log("I'm a " + this.name);
            }
        }, {
            key: "age",
            get: function get() {
                return this._age;
            },
            set: function set(value) {
                if (value < 0) {
                    console.log("We do not support undead animals");
                }

                this._age = value;
            }
        }]);

        return AnimalES6b;
    }();

    debugger;
    var lionES6 = new AnimalES6b("Lion");
    lionES6.doSomething();
    lionES6.age = 5;
    lionES6.age = -1;
}

function Inheritance() {
    var Person = function () {
        function Person(name) {
            _classCallCheck(this, Person);

            this._name = name;
        }

        _createClass(Person, [{
            key: "name",
            get: function get() {
                return this._name;
            },
            set: function set(newValue) {
                if (newValue) {
                    this._name = newValue;
                }
            }
        }]);

        return Person;
    }();

    var Employee = function (_Person) {
        _inherits(Employee, _Person);

        function Employee() {
            _classCallCheck(this, Employee);

            return _possibleConstructorReturn(this, (Employee.__proto__ || Object.getPrototypeOf(Employee)).apply(this, arguments));
        }

        _createClass(Employee, [{
            key: "doWork",
            value: function doWork() {
                return this._name + " is working";
            }
        }]);

        return Employee;
    }(Person);

    var p1 = new Person("Scott");
    p1.name = "Josef";
    var e1 = new Employee("Christopher");
    console.log(e1.doWork());
}

function overriding() {
    var Worker = function () {
        function Worker(name) {
            _classCallCheck(this, Worker);

            this.name = name;
        }

        _createClass(Worker, [{
            key: "doWork",
            value: function doWork() {
                return "free";
            }
        }, {
            key: "toString",
            value: function toString() {
                return this.name;
            }
        }, {
            key: "name",
            get: function get() {
                return this._name;
            },
            set: function set(newValue) {
                if (newValue) {
                    this._name = newValue;
                }
            }
        }]);

        return Worker;
    }();

    var Teacher = function (_Worker) {
        _inherits(Teacher, _Worker);

        function Teacher(title, name) {
            _classCallCheck(this, Teacher);

            var _this2 = _possibleConstructorReturn(this, (Teacher.__proto__ || Object.getPrototypeOf(Teacher)).call(this, name));

            _this2._title = title;
            return _this2;
        }

        _createClass(Teacher, [{
            key: "doWork",
            value: function doWork() {
                return "paid";
            }
        }, {
            key: "title",
            get: function get() {
                return this._title;
            }
        }]);

        return Teacher;
    }(Worker);

    var t = new Teacher("Dr.", "Superclever");
    console.log(t.doWork());
}
"use strict";

function stringFunctions() {
    debugger;

    //Template Literals
    var productID = 100;
    var category = "music";
    var url = "http://server/" + category + "/" + productID; //old way
    console.log(url);
    var tl = "http://server/" + category + "/" + productID; //template literal
    console.log(tl);

    //startswith
    var str = 'To be, or not to be, that is the question.';
    console.log(str.startsWith('To be')); // true
    console.log(str.endsWith('question.')); // true

    function countString(ts) {
        var characters = ["a", "b", "c"];
        var ct = 0;

        for (var i = 0; i < ts.length; i++) {
            if (characters.includes(ts[i])) {
                ct++;
            }
        }
        return ct;
    }

    console.log("chars included in yr string: " + countString("abheben"));
}

function letBasics() {
    debugger;

    //tuce is *not* visible out here
    //console.log(tuce);
    for (var tuce = 0; tuce < 5; tuce++) {
        //tuce is only visible in here (and in the for() parentheses)
        console.log(tuce);
    };

    for (var _tuce = 0; _tuce < 5; _tuce++) {
        //tuce is only visible in here (and in the for() parentheses)
        console.log(_tuce);
    };
    //tuce is *not* visible out here
}

function constBasics() {
    debugger;

    //const pageSize; //produces ERROR: const declarations must be initialized
    //const is block scoped
    var nbr = 123;
    if (true) {
        var _nbr = 456; // Allowed as its a new variable limited to this `if` block
    }

    //can be used with object literals
    var person = { name: 123 };
    person.bar = 456; // Allowed!
    person.name = "fritz"; // Allowed!
    console.log(person); // { name: 456 }    
}

function defaultParam() {
    debugger;

    function multiply(a) {
        var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

        return a * b;
    }

    multiply(2);
}

function forOf() {
    debugger;

    var someArray = ["a", "b", "c"];
    for (var item in someArray) {
        console.log(item); // 0,1,2 ... Returns the key ... the index
    }

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = someArray[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var _item = _step.value;

            console.log(_item); // a, b, c
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
}

function arrayHelpers() {
    debugger;

    var fruits = [{ name: 'apples', quantity: 2, price: 3, region: "europe" }, { name: 'bananas', quantity: 0, price: 5, region: "caribean" }, { name: 'cherries', quantity: 5, price: 8, region: "europe" }];

    //remember ECMA Script 5 pattern
    var result = [];
    for (var i = 0; i < fruits.length; i++) {
        var item = fruits[i];
        if (item.quantity < 6) {
            result.push(item);
        }
    }
    console.log("There areas " + result.length + " items in the Array");

    //forEach
    fruits.forEach(function (fruit) {
        fruit.quantity++;
    });

    //find
    var cherry = fruits.find(function (fruit) {
        return fruit.name === 'cherries';
    });
    console.log(cherry);

    //filter
    var cheap = fruits.filter(function (item) {
        return item.price < 6;
    });
    console.log(cheap);

    //every - some
    var allEuropean = fruits.every(function (fruit) {
        return fruit.region = "europe";
    });
    console.log(allEuropean);

    var anyEuropean = fruits.some(function (fruit) {
        return fruit.region = "europe";
    });
    console.log(anyEuropean);

    //reduce
    var fruitNames = fruits.reduce(function (prevArray, fruit) {
        prevArray.push(fruit.name);
        return prevArray;
    }, []);
    console.log(fruitNames);

    //look for balanced parenthesis
    function checkBalancedParanthesis(string) {
        return string.split("").reduce(function (prev, char) {
            if (prev < 0) {
                return prev;
            }
            if (char === "(") {
                return ++prev;
            }
            if (char === ")") {
                return --prev;
            }
            return prev;
        }, 0) === 0;
    }

    console.log(checkBalancedParanthesis("(())"));
    console.log(checkBalancedParanthesis("((())"));
}

//-> C# Dictionary
function maps() {
    var myMap = new Map();
    var keyString = "a string",
        keyObj = {},
        keyFunc = function keyFunc() {};
    // setting the values
    myMap.set(keyString, "value associated with 'a string'");
    myMap.set(keyObj, "value associated with keyObj");
    myMap.set(keyFunc(), "value associated with keyFunc");
    console.log("Map size: " + myMap.size); // 3
    // getting the values
    myMap.get(keyString); // "value associated with 'a string'"
    myMap.get("a string"); // "value associated with 'a string'" because keyString === 'a string'
    myMap.get(keyObj); // "value associated with keyObj"
}

//-> Indexed Array
function sets() {
    var mySet = new Set();
    mySet.add(1);
    mySet.add("some text");
    var o = { a: 1, b: 2 };
    mySet.add(o);

    mySet.has(1); // true
    mySet.has(3); // false, 3 has not been added to the set
    mySet.has(Math.sqrt(25)); // true
    mySet.has("Some Text".toLowerCase()); // true
    mySet.has(o); // true
    var size = mySet.size; // 4
    mySet.delete(5); // removes 5 fro
}

function restParams() {

    var store = new Array();
    store.rows = new Map();

    store.add = function (category) {

        var row = store.rows[category];
        if (row == undefined) {
            store.rows.set(category, new Array());
        }

        for (var _len = arguments.length, items = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            items[_key - 1] = arguments[_key];
        }

        items.forEach(function (item) {
            store.rows.get(category).push(item);
        });
    };

    store.add('fruit', 'apple');
    store.add('dairy', 'milk', 'cheese', 'yoghurt');
    store.add('pastries', 'donuts', 'croissants');
    store.add('cleaning', 'soap', 'body lotion', 'shampoo', 'tooth brush');
}

function arrowFunctions() {
    var add = function add(x, y) {
        var temp = x + y;
        return temp;
    };
    var square = function square(x) {
        return x * x;
    };

    console.log(add(4, 9));
    console.log(square(6));
};

function introDestructuring() {
    var rect = { x: 0, y: 10, width: 15, height: 20 };

    // Destructuring assignment
    var x = rect.x,
        y = rect.y,
        width = rect.width,
        height = rect.height;

    console.log(x, y, width, height); // 0,10,15,20

    // Array Destructuring
    var a = 1,
        b = 2;
    var _ref = [b, a];
    a = _ref[0];
    b = _ref[1];

    console.log(x, y); // 2,1
}

function generatorFunction() {
    var _marked = /*#__PURE__*/regeneratorRuntime.mark(getColors);

    function getColors() {
        return regeneratorRuntime.wrap(function getColors$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return "green";

                    case 2:
                        _context.next = 4;
                        return "red";

                    case 4:
                        _context.next = 6;
                        return "blue";

                    case 6:
                    case "end":
                        return _context.stop();
                }
            }
        }, _marked, this);
    }

    var colorGenerator = getColors();

    debugger;
    console.log(colorGenerator.next());
    console.log(colorGenerator.next());
    console.log(colorGenerator.next());

    //practical usage many time together with for ... of
    var arrColor = [];
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
        for (var _iterator2 = getColors()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var col = _step2.value;

            arrColor.push(col);
        }
    } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
                _iterator2.return();
            }
        } finally {
            if (_didIteratorError2) {
                throw _iteratorError2;
            }
        }
    }

    console.log(arrColor);
}

function enhancedObjectLiterals() {

    //Property value shorthand
    function getCarES5(make, model, value) {
        return {
            make: make,
            model: model,
            value: value
        };
    }

    function getCar(make, model, value) {
        return {
            // with property value shorthand
            // syntax, you can omit the property
            // value if key matches variable
            // name
            make: make,
            model: model,
            value: value
        };
    }

    //Method definition shorthand
    function getBusES5(make, model, value) {
        return {
            depreciate: function depreciate() {
                this.value -= 2500;
            }
        };
    }

    function getBus(make, model, value) {
        return {
            // Method definition shorthand syntax
            // omits `function` keyword & colon
            depreciate: function depreciate() {
                this.value -= 2500;
            }
        };
    }
}

function destructuring() {
    // object pattern matching
    var _fName$age$lName = { fName: 'John', age: 15, lName: 'Doe' },
        lName = _fName$age$lName.lName,
        fName = _fName$age$lName.fName;

    // array pattern matching

    var _ref2 = [8, 4, 100, -5, 20],
        first = _ref2[0],
        second = _ref2[1],
        third = _ref2[2];

    // output: Doe, John

    console.log(lName + ', ' + fName);

    // output: 100, 4, 8
    console.log(third, second, first);

    var myArray = [1, ['hello'], true],
        a = myArray[0],
        b = myArray[1],
        c = myArray[2];

    // output: 1, ['hello'], true
    console.log(a, b, captureEvents());
}
//# sourceMappingURL=es5-bundle.js.map
