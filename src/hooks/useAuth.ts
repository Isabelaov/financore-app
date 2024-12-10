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

      const token = res.data.data.access_token;

      await AsyncStorage.setItem('AuthToken', token);
    } catch (error: any) {
      Alert.alert('Error in login:', String(error));
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    await AsyncStorage.removeItem('AuthToken');
  };

  const getAuthToken = async () => {
    const token = await AsyncStorage.getItem('AuthToken');
    setIsAuthenticated(!!token);
    setLoading(false);
    return token;
  };

  const forgotPassword = async (email: string) => {
    console.log({ email });
  };

  return {
    register,
    login,
    logout,
    getAuthToken,
    forgotPassword,
    loading,
    isAuthenticated,
  };
};