export const calculateEarningsDifference = (earnings: any) => {
  if (!Array.isArray(earnings)) {
    return 0;
  }

  const totalDifference = earnings.reduce((total, earning) => {
    const generalAmount = parseFloat(
      (earning.generalAmount || '0').toString().replace(/[$,]/g, ''),
    );
    const amountBudgeted = parseFloat(
      (earning.amountBudgeted || '0').toString().replace(/[$,]/g, ''),
    );

    return total + (generalAmount - amountBudgeted);
  }, 0);

  return totalDifference.toLocaleString();
};
