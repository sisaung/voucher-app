const generateVoucherID = () => {
  const date = new Date();
  const formattedDate = date.toISOString().slice(0, 10).replace(/-/g, "");
  const randomNumber = Math.floor(1000 + Math.random() * 9000);

  const voucherID = `INV-${formattedDate}-${randomNumber}`;
  return voucherID;
};
export default generateVoucherID;
