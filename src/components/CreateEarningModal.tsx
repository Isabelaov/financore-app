import { Formik } from 'formik';
import React from 'react';
import { Modal, ModalProps, Text, View } from 'react-native';
import { earningValidationSchema } from '../utils/validation';
import { useHome } from '../hooks';
import { getDateRange } from '../utils/calcs';
import { ContainersStyles, TextStyles } from '../assets/styles';
import { Input } from './Input';
import { Button } from './Button';

type Props = ModalProps & {
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

export const CreateEarningModal: React.FC<Props> = ({
  visible,
  setVisible,
}) => {
  const { handleCreateEarning } = useHome();
  const { startDate, endDate } = getDateRange();

  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={ContainersStyles.modalContainer}>
        <Formik
          initialValues={{ name: '', generalAmount: 0 }}
          validationSchema={earningValidationSchema}
          onSubmit={values => handleCreateEarning(values, startDate, endDate)}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
            isSubmitting,
          }) => (
            <>
              <Text style={TextStyles.title}>Create Earning</Text>
              <Input
                placeholder="Name"
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
                value={values.name}
              />

              <Input
                placeholder="Amount"
                keyboardType="numeric"
                onChangeText={handleChange('generalAmount')}
                onBlur={handleBlur('generalAmount')}
                value={values.generalAmount.toString()}
              />

              {touched.generalAmount && errors.generalAmount && (
                <Text style={TextStyles.error}>{errors.generalAmount}</Text>
              )}

              <View style={ContainersStyles.bySide}>
                <Button
                  text="Add"
                  onPress={() => handleSubmit()}
                  disabled={isSubmitting}
                />

                <Button
                  text="Cancel"
                  onPress={() => {
                    setVisible(false);
                    return;
                  }}
                />
              </View>
            </>
          )}
        </Formik>
      </View>
    </Modal>
  );
};
