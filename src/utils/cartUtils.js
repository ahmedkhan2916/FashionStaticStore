export const getProductName = (item) =>
  item?.name || item?.title || "Product";

export const getCartItemKey = (item) =>
  [
    item?.id || getProductName(item),
    getProductName(item),
    item?.size || "",
    Number(item?.price) || 0,
  ].join("|");

export const expandCartItems = (product, quantity = 1) => {
  const safeQuantity = Math.max(1, Number(quantity) || 1);

  return Array.from({ length: safeQuantity }, () => ({
    ...product,
    name: getProductName(product),
  }));
};

export const groupCartItems = (items = []) =>
  items.reduce((groups, item, index) => {
    const key = getCartItemKey(item);
    const existingGroup = groups.find((group) => group.key === key);
    const price = Number(item.price) || 0;

    if (existingGroup) {
      existingGroup.quantity += 1;
      existingGroup.totalPrice += price;
      existingGroup.indexes.push(index);
      return groups;
    }

    return [
      ...groups,
      {
        ...item,
        key,
        name: getProductName(item),
        quantity: 1,
        totalPrice: price,
        indexes: [index],
      },
    ];
  }, []);
