import { useCallback, useEffect, useState } from 'react';
import { IEarning } from '../interfaces';
import { Alert } from 'react-native';
import apiService from '../api/apiService';
import { cleanEarnings } from '../utils/calcs';

export const useEarnings = () => {
  const [loading, setLoading] = useState(true);
  const [earnings, setEarnings] = useState<IEarning[]>([]);

  const getEarnings = useCallback(async () => {
    setLoading(true);
    try {
      const res: any = await apiService.get('earnings', {});
      const cleanedEarnings = cleanEarnings(res.data?.data);
      setEarnings(cleanedEarnings);
      console.log({ cleanedEarnings });
    } catch (error: any) {
      Alert.alert(
        'Error',
        error.response?.data?.message || 'Unable to make petition',
      );
    } finally {
      setLoading(false);
    }
  }, []);

  const getOneEarning = async (id: string) => {
    setLoading(true);
    try {
      return await apiService.get(`earnings/${id}`, {});
    } catch (error: any) {
      Alert.alert('Error', error.response?.data?.message || 'Unknown error');
    } finally {
      setLoading(false);
    }
  };

  const createEarning = async ({
    ...data
  }: Omit<IEarning, 'id' | 'amountBudgeted'>) => {
    setLoading(true);

    try {
      return await apiService.post('earnings', data);
    } catch (error: any) {
      Alert.alert('Error', error.response?.data?.message || 'Unknown error');
    } finally {
      setLoading(false);
    }
  };

  const deleteEarning = async (id: string) => {
    setLoading(true);

    try {
      await apiService.delete(`earnings/${id}`, {});
      console.log('earning deleted');
    } catch (error: any) {
      Alert.alert('Error', error.response?.data?.message || 'Unknown error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getEarnings();
  }, [getEarnings]);

  return {
    getEarnings,
    getOneEarning,
    createEarning,
    deleteEarning,
    earnings,
    loading,
  };
};
