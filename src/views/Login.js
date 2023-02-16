import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';

export default function Login({navigation}) {
  return (
    <View className="flex-1 items-center justify-center bg-white gap-5">
      <TextInput
        className="block w-2/3 border rounded-md border-solid sm:text-sm"
        placeholder="ID"
      />
      <TextInput
        className="block w-2/3 border rounded-md border-solid sm:text-sm"
        placeholder="パスワード"
      />
      <TouchableOpacity
        className="items-center justify-center bg-green-300 h-12 w-2/5"
        onPress={() => navigation.navigate('Contents')}>
        <Text className="font-n">ログイン</Text>
      </TouchableOpacity>
      <Text className="text-blue-300 font-bold underline">
        sパスワードをリセット
      </Text>
    </View>
  );
}
