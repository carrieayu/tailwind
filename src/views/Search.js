import React from 'react';
import {Text, View, TextInput, Image} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import OcticonsIcon from 'react-native-vector-icons/Octicons';
import MaterialCommunityIconsIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';

const cats = [
  {
    category: 'H＆Gコンテンツ',
  },
  {
    category: 'ユーザーコンテンツ',
  },
  {
    category: 'マニュアル',
  },
];
export default function Search({navigation}) {
  return (
    <View className="w-full h-full bg-white">
      <View className="w-full h-12 border-black border-b align-top items-center justify-center">
        <Text>検索</Text>
      </View>
      <View className="w-11/12 h-10 px-5 mt-3 border rounded-3xl self-center bg-stone-200">
        <View className="relative flex-row justify-center items-center">
          <OcticonsIcon
            className="absolute"
            name="search"
            size={24}></OcticonsIcon>
          <TextInput
            type="text"
            placeholder=""
            className="flex-1 w-full py-3 pl-4 pr-2 text-gray-500 rounded-full outline-none"
          />
        </View>
      </View>
      <View className="w-full h-15 justify-center ml-8 py-4">
        <Text className="text-3xl mt-3 font-bold text-gray-800">
          カテゴリーから検索
        </Text>
      </View>
      <View role="list" className="divide">
        {cats.map(detail => (
          <View className="flex flex-row w-full justify-between items-center py-3 row ml-5">
            <View className="flex-row">
              <View className="ml-3">
                <Text className="text-xl font-bold text-gray-800">
                  {detail.category}
                </Text>
              </View>
            </View>
            <View className="justify-center pr-10">
              <MaterialIcons
                name="keyboard-arrow-right"
                size={40}></MaterialIcons>
            </View>
          </View>
        ))}
      </View>
      <View className="flex absolute flex-row w-full h-24 border-black border-t bottom-0 justify-around items-center bg-white">
        <View
          className="items-center"
          onPress={() => navigation.navigate('Contents')}>
          <FeatherIcon name="book" size={50} color="#000"></FeatherIcon>
          <Text className="text-xs">マイコンテンツ</Text>
        </View>
        <View
          className="items-center"
          onPress={() => navigation.navigate('Search')}>
          <OcticonsIcon name="search" size={50} color="#000"></OcticonsIcon>
          <Text className="text-xs ">検索</Text>
        </View>
        <View
          className="items-center"
          onPress={() => navigation.navigate('Messages')}>
          <MaterialCommunityIconsIcon
            name="message-reply-text"
            size={50}
            color="#000"></MaterialCommunityIconsIcon>
          <Text className="text-xs">コミュニケーション</Text>
        </View>
        <View className="items-center">
          <IoniconsIcon name="md-person" size={50} color="#000"></IoniconsIcon>
          <Text className="text-xs">アカウント</Text>
        </View>
      </View>
    </View>
  );
}
