import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import PagerView from 'react-native-pager-view';
import { Button } from '../../components/ui/Button';

export default function Onboarding() {
  const router = useRouter();
  const { width } = useWindowDimensions();
  const [page, setPage] = useState(0);

  const pages = [
    <View style={styles.page} key="page1">
      {/* <Image source={require('@/assets/images/logo.png')} /> */}
      <Text style={styles.text}>禁パチへようこそ</Text>
      <Text style={styles.text}>今日は負けたかもしれない。でも、あなたは負けじゃない。</Text>
      <Text style={styles.text}>ここは、責めない・ひとりにしないための場所です。</Text>
      <Text style={styles.text}>いまから、一緒にやり直しましょう。</Text>
    </View>,

    <View style={[styles.page, { backgroundColor: '#fce4ec' }]} key="page2">
      <Text style={styles.text}>禁パチを記録</Text>
      <Text style={styles.text}>やめたい気持ちを、記録に変えます。</Text>
      <Text style={styles.text}>1日、また1日。積み重ねが力になります。</Text>
    </View>,
    /* 3ページ */
    <View style={styles.page} key="page3">
      <Text style={styles.text}>あなたの行動を分析</Text>
      <Text style={styles.text}>衝動は突然やってきます。</Text>
      <Text style={styles.text}>来やすい時間・場所を見つけて、置き換え行動を準備しよう。</Text>
    </View>,
    /* 4ページ */
    <View style={styles.page} key="page4">
      <Text style={styles.text}>コミュニティ</Text>
      <Text style={styles.text}>あなたは一人じゃない。</Text>
      <Text style={styles.text}>匿名で、痛みも失敗も共有できます。</Text>
      <Text style={styles.text}>同じ経験の仲間が、戻りそうな時の支えになります。</Text>
    </View>,
    /* 5ページ */
    <View style={styles.page} key="page5">
      <Text style={styles.text}>「なぜやめたい？」を書いて、禁パチをはじめましょう。</Text>
    </View>,
  ];

  return (
    <View style={{ flex: 1 }}>
      <PagerView
        style={{ flex: 1 }}
        initialPage={0}
        onPageSelected={(e) => setPage(e.nativeEvent.position)}
      >
        {pages.map((text, idx) => (
          <View key={idx} style={[styles.page, { width }]}>
            <Text style={styles.text}>{text}</Text>
            {idx === pages.length - 1 ? (
              <Button title="はじめる" onPress={() => router.replace('/(tabs)')} />
            ) : (
              <Text style={styles.swipeHint}>スワイプで次へ →</Text>
            )}
          </View>
        ))}
      </PagerView>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 22,
    marginBottom: 20,
  },
  swipeHint: {
    marginTop: 20,
    color: 'gray',
  },
  logo: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
  },
  bg: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});
