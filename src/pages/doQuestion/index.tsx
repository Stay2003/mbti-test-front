import { View } from "@tarojs/components";
import "taro-ui/dist/style/components/button.scss"; // 按需引入
import "./index.scss";

import GlobalFooter from "../../components/GlobalFooter";
import { AtButton, AtRadio } from "taro-ui";

import questions from "../../data/questions.json";
import { useEffect, useState } from "react";

/**
 * 做题页面
 */
export default () => {
  // 题目序号
  const [current, setCurrent] = useState<number>(1);
  // 当前题目
  const [currentQuestion, setCurrentQuestion] = useState(questions[0]);
  // 当前答案
  const [currentAnswer, setCurrentAnswer] = useState<string>();
  // 回答列表
  const [answerList, setAnswerList] = useState<any[]>([]);

  // 切换题目
  useEffect(() => {
    setCurrentQuestion(questions[current - 1]);
    setCurrentAnswer(answerList[current - 1]);
  }, [current]);

  const questionOptions = currentQuestion.options.map(option => ({
    label: `${option.key}. ${option.value}`,
    value: option.key
  }));

  const handleAnswerClick = (value: string) => {
    setCurrentAnswer(value);
    const newAnswerList = [...answerList];
    newAnswerList[current - 1] = value;
    setAnswerList(newAnswerList);
  };

  return (
    <View className='doQuestionPage'>
      <View className='at-article__h2 title'>
        {current}/{questions.length} {currentQuestion.title}
      </View>
      <View className='options-wrapper'>
        <AtRadio
          options={questionOptions}
          value={currentAnswer}
          onClick={handleAnswerClick}
        />
      </View>

      {current > 1 && (
        <AtButton
          type='primary'
          circle
          className='controlBtn'
          onClick={() => setCurrent(current - 1)}>
          上一题
        </AtButton>
      )}
      {current < questions.length && (
        <AtButton
          type='primary'
          circle
          className='controlBtn'
          disabled={!currentAnswer}
          onClick={() => setCurrent(current + 1)}>
          下一题
        </AtButton>
      )}
      {current === questions.length && (
        <AtButton
          circle
          className='controlBtn'
          disabled={!currentAnswer}
          onClick={() => { /* 查看结果逻辑 */ }}>
          查看结果
        </AtButton>
      )}

      <GlobalFooter />
    </View>
  );
};
