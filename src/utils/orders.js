const ORDERS_STORAGE_KEY = "shoulder-slack-orders";

export const getOrders = () => {
  try {
    return JSON.parse(localStorage.getItem(ORDERS_STORAGE_KEY) || "[]");
  } catch {
    return [];
  }
};

export const saveOrder = (order) => {
  const orders = getOrders();
  const savedOrder = {
    ...order,
    id: `ORD-${Date.now()}`,
    status: "Pending",
    createdAt: new Date().toISOString(),
  };

  localStorage.setItem(ORDERS_STORAGE_KEY, JSON.stringify([savedOrder, ...orders]));
  return savedOrder;
};

export const updateOrderStatus = (orderId, status) => {
  const orders = getOrders().map((order) =>
    order.id === orderId ? { ...order, status } : order,
  );

  localStorage.setItem(ORDERS_STORAGE_KEY, JSON.stringify(orders));
  return orders;
};