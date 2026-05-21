import { DomainError, Product, Result } from "@tractor/domain";

type GetProductResult = Result<Product, DomainError>;

const productResult: GetProductResult = {
  ok: true,
  data: {
    id: "tractor-001",
    name: "Big Tractor 5000",
    brand: "Tractor Corp",
    category: "heavy-duty",
    description: "A powerful tractor for large farms.",
    basePrice: {
      amount: 25000,
      currency: "USD",
    },
    images: [
      {
        url: "/images/tractor-001.png",
        alt: "Big Tractor 5000",
      },
    ],
    availableStores: ["store-001"],
  },
};

function printProductResult (result: GetProductResult): void {
    if (result.ok) {
        console.log('Product found: ', result.data.name, result.data.basePrice.amount)
        return;
    }
    console.error('Product error: ', result.error.message)

}

printProductResult(productResult);


const failedProductResult: GetProductResult = {
  ok: false,
  error: {
    code: 'PRODUCT_NOT_FOUND',
    message: 'The requested product does not exist.',
  },
};

printProductResult(failedProductResult);