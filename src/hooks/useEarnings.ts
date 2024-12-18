import { useCallback, useEffect, useState } from 'react';
import { useAuth } from './useAuth';
import { IEarning } from '../interfaces';
import { Alert } from 'react-native';
import apiService from '../api/apiService';

export const useEarnings = () => {
  const { isAuthenticated } = useAuth();
  const [loading, setLoading] = useState(true);
  const [earnings, setEarnings] = useState<IEarning[]>([]);

  useEffect(() => {
    console.log({ isAuthenticated });

    if (!isAuthenticated) {
      Alert.alert('Not authenticated');
      return;
    }
  }, [isAuthenticated]);

  const getEarnings = useCallback(async () => {
    setLoading(true);
    try {
      const res: { data: IEarning[] } = await apiService.get('earnings', {});
      console.log({ data: res.data });
      setEarnings(res.data);
    } catch (error: any) {
      Alert.alert('Error', error.response?.data?.message || 'Unknown error');
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
      await apiService.post('earnings', data);
      console.log('earning created');
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
