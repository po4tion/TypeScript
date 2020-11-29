type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text';

function combine (
  n1: Combinable,
  n2: number | string,
  n3: ConversionDescriptor
  ) {
  if (typeof n1 === 'number' && typeof n2 === 'number' || n3 === 'as-number') {
    return console.log(+n1 + +n2);
  } else {
    return console.log(n1.toString() + n2.toString());
  }
}

const ages = combine(30, 26, 'as-number');
const age = combine('30', '26', 'as-number');
const ages_ = combine('Max', 'Min', 'as-text');