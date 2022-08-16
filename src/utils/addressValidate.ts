export const validateAddress = (address: string) => {
  const isValid = new RegExp(/^0x[a-fA-F0-9]{40}$/g);

  return isValid.test(address);
};
