import React from 'react';
import {Image, Text, View, TextInput} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import OcticonsIcon from 'react-native-vector-icons/Octicons';
import MaterialCommunityIconsIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
const msg = [
  {
    user: 'GM公式',
    message: 'あなた向けの必修シリーズが発⾏されました',
  },
  {
    user: 'お知らせ',
    message: 'システムメンテナンスのお知らせ：2023年12⽉12⽇…',
  },
  {
    user: '新宿店',
    message: '新年会のお知らせ',
  },
  {
    user: '新宿店⽇報',
    message: '本⽇の⽇報を提出してください',
  },
  {
    user: '新宿店クレーム報告',
    message: '本⽇提供時間の遅れによるクレームが1件ありました。',
  },
  {
    user: '新商品に関するアンケート',
    message: 'お疲れ様です。⽇々の勤務に関して簡単なアンケー…',
  },
];

export default function Messages({navigation}) {
  return (
    <React.Fragment>
      <View className="w-full h-full bg-white">
        <View className="w-full h-12 border-black border-b align-top items-center justify-center">
          <Text>コミュニケーション</Text>
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
        <View role="list" className="divide">
          {msg.map(inbox => (
            <View className="flex w-full flex-row justify-between py-2 row ml-5">
              <View className="flex-row w-sm">
                <Image
                  source={require('./src/assets/reactlogo.png')}
                  className="h-12 w-12 rounded-full"
                  alt="Image"
                />
                <View className="ml-3 justify-around">
                  <Text className="text-xs font-medium text-gray-900">
                    {inbox.user}
                  </Text>
                  <Text className="text-xs text-gray-500">{inbox.message}</Text>
                </View>
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
            <Text className="text-xs font-bold">コミュニケーション</Text>
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
