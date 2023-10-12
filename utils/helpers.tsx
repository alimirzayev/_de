export const parseText = (text: string | undefined) => {
  const parts = text?.split(/<<<|>>>/)?.filter((part) => part);
  return {
    normalTitle: parts ? parts[0] : null,
    italicTitle: parts ? parts[1] : null,
    remainingTitle: parts ? parts[2] : null,
  };
};
