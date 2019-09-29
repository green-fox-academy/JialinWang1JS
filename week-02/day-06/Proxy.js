const target = {a:1,b:1,c:1};
const handler = {
    get: function(targetObject, field){
        if (field === 'a' || field === 'b' || field === 'c'){
            return targetObject[field];
        }
        if (field === 'circ'){
            return targetObject.a + targetObject.b + targetObject.c;
        }
        return undefined;
    },
    set: function(targetObject, field, value){
        if (field === 'a' || field === 'b' || field === 'c'){
            return targetObject[field] = value;
        }
    }
};
const proxyObject = new Proxy(target, handler);
proxyObject.a = 3;
proxyObject.b = 4;
proxyObject.c = 5;
console.log(proxyObject.circ);
proxyObject.x = 8;
console.log(proxyObject.x);
console.log(target.x);