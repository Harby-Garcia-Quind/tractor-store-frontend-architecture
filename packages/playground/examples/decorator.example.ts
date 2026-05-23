function DomainModel(name: string) {
  return function (target: Function) {
    Reflect.defineProperty(target, 'domainName', {
      value: name,
    });
  };
}

@DomainModel('Product')
class ProductModel {
  constructor(public id: string, public name: string) {}
}

const product = new ProductModel('tractor-001', 'Big Tractor 5000');

console.log('Product:', product);
console.log('Domain name:', (ProductModel as any).domainName);