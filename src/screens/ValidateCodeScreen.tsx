import React, { useState } from 'react';
import { ActivityIndicator, Alert, Text, View } from 'react-native';
import * as Yup from 'yup';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import OTPTextInput from 'react-native-otp-textinput';
import { Formik } from 'formik';
import { RootStackParamList } from '../interfaces';
import { useAuth } from '../hooks';
import { ContainersStyles, OtpInputStyles, TextStyles } from '../assets/styles';
import { Button } from '../components';
import { baseColors } from '../assets/colors/baseColors';

type Props = NativeStackScreenProps<RootStackParamList, 'ValidateCode'>;

export const ValidateCodeScreen = ({
  navigation,
  route,
}: Props): JSX.Element => {
  const { email } = route.params;
  const { validateCode } = useAuth();
  const [loading, setLoading] = useState(false);

  const validationSchema = Yup.object().shape({
    code: Yup.string()
      .required('Code is required')
      .length(6, 'Code must be 6 digits'),
  });

  const handleValidateCode = async (values: { code: string }) => {
    setLoading(true);
    try {
      await validateCode({ email, token: values.code });
      navigation.navigate('ResetPassword', { email, token: values.code });
    } catch (error) {
      Alert.alert('Error', 'Invalid code. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={ContainersStyles.centered}>
      <Text style={TextStyles.title}>Type the Recovery Code</Text>
      <Formik
        initialValues={{ code: '' }}
        validationSchema={validationSchema}
        onSubmit={handleValidateCode}>
        {({ handleChange, handleSubmit, touched, errors }) => (
          <>
            <OTPTextInput
              handleTextChange={handleChange('code')}
              inputCount={6}
              autoFocus
              containerStyle={OtpInputStyles.container}
              tintColor={baseColors.secondary}
              textInputStyle={OtpInputStyles.textInput}
            />

            {touched.code && errors.code && (
              <Text style={TextStyles.error}>{errors.code}</Text>
            )}

            {loading ? (
              <ActivityIndicator size="large" color={baseColors.primary} />
            ) : (
              <Button
                text="Send"
                backgroundPrimary={false}
                onPress={() => handleSubmit()}
              />
            )}
          </>
        )}
      </Formik>
    </View>
  );
};
