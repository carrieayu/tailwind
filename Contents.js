import React from 'react';
import {Image, ActivityIndicator, Text, View} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import OcticonsIcon from 'react-native-vector-icons/Octicons';
import MaterialCommunityIconsIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
const cont = [
  {
    content1: '接客の基礎',
    content2: '最後に受講したクラス：',
    content3: '1-1 挨拶の仕⽅',
  },
  {
    content1: '接客の基礎',
    content2: '最後に受講したクラス：',
    content3: '1-1 挨拶の仕⽅',
  },
  {
    content1: '接客の基礎',
    content2: '最後に受講したクラス：',
    content3: '1-1 挨拶の仕⽅',
  },
  {
    content1: '接客の基礎',
    content2: '最後に受講したクラス：',
    content3: '1-1 挨拶の仕⽅',
  },
  {
    content1: '接客の基礎',
    content2: '最後に受講したクラス：',
    content3: '1-1 挨拶の仕⽅',
  },
  {
    content1: '接客の基礎',
    content2: '最後に受講したクラス：',
    content3: '1-1 挨拶の仕⽅',
  },
];

export default function Contents({navigation}) {
  return (
    <React.Fragment>
      <View className="w-full h-full bg-white">
        <View className="w-full h-12 border-black border-b align-top items-center justify-center">
          <Text className="bold">マイコンテンツ</Text>
        </View>
        <View role="list" className="divide">
          {cont.map((detail, index) => (
            <View
              key={index}
              className="flex flex-row justify-between py-2 row ml-5">
              <View className="flex-row">
                <Image
                  source={require('./src/assets/reactlogo.png')}
                  className="h-16 w-16"
                  alt="Image"
                />
                <View className="ml-3">
                  <Text className="text-sm font-medium text-gray-900">
                    {detail.content1}
                  </Text>
                  <Text className="text-sm text-gray-500">
                    {detail.content2}
                  </Text>
                  <Text className="text-sm text-gray-500">
                    {detail.content3}
                  </Text>
                </View>
              </View>
              <View className="justify-center pr-10">
                <ActivityIndicator size="large" color="#00ff00" />
              </View>
            </View>
          ))}
        </View>
        <View className="flex absolute flex-row w-full h-24 border-black border-t bottom-0 justify-around items-center bg-white">
          <View className="items-center">
            <FeatherIcon
              name="book"
              size={50}
              color="#000"
              onPress={() => navigation.navigate('Contents')}></FeatherIcon>
            <Text className="text-xs">マイコンテンツ</Text>
          </View>
          <View className="items-center">
            <OcticonsIcon
              name="search"
              size={50}
              color="#000"
              onPress={() => navigation.navigate('Search')}></OcticonsIcon>
            <Text className="text-xs ">検索</Text>
          </View>
          <View className="items-center">
            <MaterialCommunityIconsIcon
              name="message-reply-text"
              size={50}
              color="#000"
              onPress={() =>
                navigation.navigate('Messages')
              }></MaterialCommunityIconsIcon>
            <Text className="text-xs">コミュニケーション</Text>
          </View>
          <View className="items-center">
            <IoniconsIcon
              name="md-person"
              size={50}
              color="#000"></IoniconsIcon>
            <Text className="text-xs">アカウント</Text>
          </View>
        </View>
      </View>
    </React.Fragment>
  );
}
