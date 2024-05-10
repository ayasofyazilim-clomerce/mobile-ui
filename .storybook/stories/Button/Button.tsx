import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Button } from '../../../components/ui/button';

export type MyButtonProps = {
  onPress: () => void;
  text: string;
};

export const MyButton = ({ onPress, text }: MyButtonProps) => {
  return (
    <Button
      onPress={onPress}
      variant='outline'
      className='bg-black'
    >
      <Text className='text-red-600' >{text}</Text>
    </Button>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: 'purple',
    borderRadius: 8,
  },
  text: { color: 'white' },
});
