export const getDateRange = () => {
  const today = new Date();
  const startDate = today.toISOString().split('T')[0];

  today.setDate(today.getDate() + 30);
  const endDate = today.toISOString().split('T')[0];

  return { startDate, endDate };
};
