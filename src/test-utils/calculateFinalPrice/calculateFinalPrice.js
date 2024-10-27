export function calculateFinalPrice(
  originalPrice,
  discountPercent,
  taxPercent
) {
  if (originalPrice < 0 || discountPercent < 0 || taxPercent < 0) {
    throw new Error("Price, discount, and tax must be non-negative values");
  }

  if (discountPercent > 100) {
    throw new Error("Discount cannot be greater than 100%");
  }

  if (taxPercent > 50) {
    throw new Error("Tax cannot be greater than 50%");
  }

  const discountedPrice =
    originalPrice - originalPrice * (discountPercent / 100);

  const finalPrice = discountedPrice + discountedPrice * (taxPercent / 100);

  return parseFloat(finalPrice.toFixed(2));
}
