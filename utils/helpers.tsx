export const parseText = (text: string | undefined) => {
  const parts = text?.split(/<<<|>>>/)?.filter((part) => part);
  return {
    normalTitle: parts ? parts[0] : null,
    italicTitle: parts ? parts[1] : null,
    remainingTitle: parts ? parts[2] : null,
  };
};

export const getRegExp = (type) => {
  let regex = null;
  switch (type) {
    case "email":
      regex = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g;
      break;
    case "password":
      regex = /[\S]{4,}/;
      break;
    default:
      break;
  }
  return regex;
};
