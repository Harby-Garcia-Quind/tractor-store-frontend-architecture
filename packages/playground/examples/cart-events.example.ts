import {
  CART_ADD_ITEM_REQUESTED,
  CART_ITEM_ADDED,
  type CartAddItemRequestedDetail,
  type CartItemAddedDetail,
} from "@tractor/domain";

class NodeCustomEvent<T> extends Event {
  detail: T;

  constructor(type: string, params: CustomEventInit<T>) {
    super(type, params);
    this.detail = params.detail as T;
  }
}

function createCustomEvent<T>(
  type: string,
  params: CustomEventInit<T>,
): CustomEvent<T> {
  if (typeof CustomEvent !== "undefined") {
    return new CustomEvent<T>(type, params);
  }

  return new NodeCustomEvent<T>(type, params) as CustomEvent<T>;
}

const eventBus = new EventTarget();

eventBus.addEventListener(CART_ADD_ITEM_REQUESTED, (event) => {
  const customEvent = event as CustomEvent<CartAddItemRequestedDetail>;

  console.log(
    "Checkout received add to cart request:",
    customEvent.detail.command.name,
  );

  const itemAddedEvent = createCustomEvent<CartItemAddedDetail>(
    CART_ITEM_ADDED,
    {
      detail: {
        cartId: "cart-001",
        item: {
          id: "line-item-001",
          variantId: customEvent.detail.command.id,
          productId: customEvent.detail.command.productId,
          name: customEvent.detail.command.name,
          sku: customEvent.detail.command.sku,
          price: customEvent.detail.command.price,
          quantity: customEvent.detail.command.quantity,
        },
      },
    },
  );

  eventBus.dispatchEvent(itemAddedEvent);
});

eventBus.addEventListener(CART_ITEM_ADDED, (event) => {
  const customEvent = event as CustomEvent<CartItemAddedDetail>;

  console.log(
    "Cart item added:",
    customEvent.detail.item.name,
    "Quantity:",
    customEvent.detail.item.quantity,
  );
});

const addToCartEvent = createCustomEvent<CartAddItemRequestedDetail>(
  CART_ADD_ITEM_REQUESTED,
  {
    detail: {
      source: "decide",
      command: {
        id: "variant-001",
        productId: "tractor-001",
        name: "Big Tractor 5000 - Red",
        sku: "TRACTOR-5000-RED",
        price: {
          amount: 25000,
          currency: "USD",
        },
        quantity: 1,
      },
    },
  },
);

eventBus.dispatchEvent(addToCartEvent);
