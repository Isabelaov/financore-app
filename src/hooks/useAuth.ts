import { BC_URL } from '@env';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { Alert } from 'react-native';
import { IUser } from '../interfaces';
import apiService from '../api/apiService';
import { useEffect, useState } from 'react';

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAuthToken();

    const interval = setInterval(() => {
      getAuthToken();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const register = async ({ ...user }: IUser) => {
    setLoading(true);

    try {
      const { email, name, password, phone } = user;
      const formData = new FormData();

      formData.append('name', name);
      formData.append('email', email);
      formData.append('password', password);
      formData.append('phone', phone);

      await apiService.post('auth/register', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
    } catch (error: any) {
      Alert.alert('Error in register:', String(error));
    } finally {
      setLoading(false);
    }
  };

  const login = async (email: string, password: string) => {
    setLoading(true);
    try {
      const res = await axios.post(`${BC_URL}/auth/login`, {
        email,
        password,
      });

      const token = res.data.accessToken;

      await AsyncStorage.setItem('AuthToken', token);
    } catch (error: any) {
      if (error.message !== 'Failed to register user in OneSignal')
        Alert.alert('Error in login:', String(error));
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    await AsyncStorage.removeItem('AuthToken');
    setIsAuthenticated(false);
  };

  const getAuthToken = async () => {
    const token = await AsyncStorage.getItem('AuthToken');
    setIsAuthenticated(!!token);
    setLoading(false);
    return token;
  };

  const forgotPassword = async (email: string) => {
    const res: { data: any } = await apiService.post('auth/forgot-password', {
      email,
    });

    return res.data;
  };

  const validateCode = async (data: { email: string; token: string }) => {
    const res: { data: any } = await apiService.post(
      'auth/validate-recovery-code',
      { ...data },
    );

    return res.data;
  };

  const resetPassword = async (data: {
    email: string;
    token: string;
    password: string;
  }) => {
    setLoading(true);

    try {
      await apiService.post('auth/reset-password', {
        newPassword: data.password,
        ...data,
      });
    } catch (error) {
      Alert.alert('Error :c', String(error));
    } finally {
      setLoading(false);
    }
  };

  return {
    register,
    login,
    logout,
    getAuthToken,
    forgotPassword,
    loading,
    isAuthenticated,
    validateCode,
    resetPassword,
  };
};
