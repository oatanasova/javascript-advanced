function solve() {
    const prototype = {};

    const object = {
        extend: function(template){
            for(const key in template){
                if(!Object.prototype.hasOwnProperty.call(template, key)){
                    continue;
                }
                const value = template[key];
                if(typeof value ==='function'){
                    prototype[key] = value;
                } else {
                    object[key] = value;
                    
                }
            }
        }
    };

    Object.setPrototypeOf(object, prototype);

    return object;
}

const myObj = extensibleObject();

const template = {
    extensionMethod: function () { },
    extensionProperty: 'someString'
}
myObj.extend(template); 
