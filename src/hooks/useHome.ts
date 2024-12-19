import { useEffect, useState } from 'react';
import { useEarnings } from './useEarnings';

export const useHome = () => {
  const [earningId, setEarningId] = useState<string>();
  const [refreshing, setRefreshing] = useState(false);
  const { getEarnings, createEarning } = useEarnings();

  useEffect(() => {
    const load = async () => {
      await getEarnings();
    };

    load();
  }, [getEarnings]);

  const onRefresh = async () => {
    setRefreshing(true);
    await getEarnings();
    setRefreshing(false);
  };

  const handleCreateEarning = async (
    values: {
      name: string;
      generalAmount: number;
    },
    startDate: string,
    endDate: string,
  ) => {
    const earning: any = await createEarning({ startDate, endDate, ...values });
    const id = earning?.id || earning?.data?.id;
    setEarningId(id);
    console.log('earning created');
    await getEarnings();
  };

  return { earningId, refreshing, onRefresh, handleCreateEarning };
};
