import { Component, PropsWithChildren } from "react";
import { View, Text } from "@tarojs/components";
import "taro-ui/dist/style/components/button.scss"; // 按需引入
import "./index.scss";
// eslint-disable-next-line import/first
import { AtButton } from 'taro-ui'
// eslint-disable-next-line import/first
import Taro from "@tarojs/taro";

export default class Index extends Component<PropsWithChildren> {
  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className='index'>
        <Text>用户</Text>
        <AtButton type='primary' onClick={() => {
          Taro.navigateTo({
            url: '/pages/index/index',
          })
        }}
        >按钮</AtButton>
      </View>
    );
  }
}
