import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  GestureResponderEvent,
  Text,
  View,
} from 'react-native';
import { RootStackParamList } from '../interfaces';
import { useAuth } from '../hooks';
import { IUser } from '../interfaces';
import { FormStyles, TextStyles } from '../assets/styles';
import { baseColors } from '../assets/colors/baseColors';
import { Formik } from 'formik';
import { registerValidationSchema } from '../utils/validation';
import { Input, Button } from '../components';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Register'>;

interface Props {
  navigation: NavigationProp;
}

export const RegisterScreen = ({ navigation }: Props) => {
  const { register, loading } = useAuth();
  const [submitting, setSubmitting] = useState(false);

  const handleRegister = async (values: Omit<IUser, 'id'>) => {
    setSubmitting(true);
    try {
      await register(values);
      navigation.navigate('Login');
    } catch (error: any) {
      Alert.alert('Error', String(error));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <View style={FormStyles.container}>
      <Text style={TextStyles.titleSecondary}>
        Get <Text style={TextStyles.title}>Started</Text>
      </Text>

      {loading || submitting ? (
        <ActivityIndicator size="large" color={baseColors.primary} />
      ) : (
        <Formik
          initialValues={{
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
            phone: '',
          }}
          validationSchema={registerValidationSchema}
          onSubmit={handleRegister}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <>
              <Input
                placeholder="Name"
                onChangeText={handleChange('name')}
                value={values.name}
                onBlur={handleBlur('name')}
                error={touched.name ? errors.name : ''}
              />

              <Input
                placeholder="Email"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                error={touched.email ? errors.email : ''}
              />

              <Input
                placeholder="Phone number"
                onBlur={handleBlur('phone')}
                onChangeText={handleChange('phone')}
                value={values.phone}
                error={touched.phone ? errors.phone : undefined}
              />

              <Input
                placeholder="Password"
                secureTextEntry
                onBlur={handleBlur('password')}
                onChangeText={handleChange('password')}
                value={values.password}
                error={touched.password ? errors.password : undefined}
              />

              <Input
                placeholder="Confirm password"
                secureTextEntry
                onBlur={handleBlur('confirmPassword')}
                onChangeText={handleChange('confirmPassword')}
                value={values.confirmPassword}
                error={
                  touched.confirmPassword ? errors.confirmPassword : undefined
                }
              />

              <Button
                text="Join Us"
                backgroundPrimary={false}
                onPress={() => handleSubmit()}
              />
            </>
          )}
        </Formik>
      )}
    </View>
  );
};
