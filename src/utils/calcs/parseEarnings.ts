export const cleanEarnings = (earningsData: any[]): any[] => {
  if (!Array.isArray(earningsData)) {
    return [];
  }

  return earningsData.map((earning: { generalAmount: string }) => ({
    ...earning,
    generalAmount: parseFloat(
      (earning.generalAmount || '').replace(/[^0-9.-]+/g, ''),
    ),
  }));
};
