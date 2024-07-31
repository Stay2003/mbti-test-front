import { View , Image } from "@tarojs/components";
import { AtButton } from "taro-ui";
import Taro from "@tarojs/taro";
import "taro-ui/dist/style/components/button.scss"; // 按需引入
import "./index.scss";
import headerBg from '../../assets/headerBg.png';
import GlobalFooter from "../../components/GlobalFooter";

/**
 * 首页
 */
export default () => {
  return <View className='indexPage'>
    <View className='at-article__h1 title'>
      MBTI性格测试
    </View>
    <View className='at-article__h2 subTitle'>
      只需两分钟，就能非常准确地测试你的性格特点！
    </View>
    <AtButton type='primary' circle className='enterBtn' onClick={() => {
      Taro.navigateTo({
        url: '/pages/doQuestion/index',
      })
    }}
    >开始测试</AtButton>

    <Image className='headerBg'
      src={headerBg}
    />
    <GlobalFooter />
  </View>;

};
