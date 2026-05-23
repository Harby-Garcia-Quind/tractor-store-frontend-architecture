import type {
  Product,
  ProductId,
  ProductsById,
} from '@tractor/domain';

const productOne: Product = {
  id: 'tractor-001',
  name: 'Big Tractor 5000',
  brand: 'Tractor Corp',
  category: 'heavy-duty',
  description: 'A powerful tractor for large farms.',
  basePrice: {
    amount: 25000,
    currency: 'USD',
  },
  images: [
    {
      url: '/images/tractor-001.png',
      alt: 'Big Tractor 5000',
    },
  ],
  availableStores: ['store-001'],
};

const productTwo: Product = {
  id: 'tractor-002',
  name: 'Mini Tractor 100',
  brand: 'Farm Tools',
  category: 'compact',
  description: 'A compact tractor for small farms.',
  basePrice: {
    amount: 12000,
    currency: 'USD',
  },
  images: [
    {
      url: '/images/tractor-002.png',
      alt: 'Mini Tractor 100',
    },
  ],
  availableStores: ['store-002'],
};

const productsById: ProductsById = {
  [productOne.id]: productOne,
  [productTwo.id]: productTwo,
};

function findProductById(
  products: ProductsById,
  productId: ProductId
): Product | undefined {
  return products[productId];
}

const selectedProduct = findProductById(productsById, 'tractor-001');

console.log('Products by id:', productsById);
console.log('Selected product:', selectedProduct ? selectedProduct.name : 'Producto no encontrado');