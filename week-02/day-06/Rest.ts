
function foo(x, ...rest) {
  return x * rest.length;
}

foo(4,3,2,1)