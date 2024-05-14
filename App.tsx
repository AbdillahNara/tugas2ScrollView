import React from 'react';
import { ScrollView, Image, StyleSheet, View } from 'react-native';

const images = [
  { uri: 'https://images.tokopedia.net/img/cache/700/hDjmkQ/2022/7/8/7a05c984-0237-4841-8b54-bd3f3affc29b.jpg' },
  { uri: 'https://images.tokopedia.net/img/cache/700/hDjmkQ/2022/7/8/7a05c984-0237-4841-8b54-bd3f3affc29b.jpg' },
  { uri: 'https://images.tokopedia.net/img/cache/700/hDjmkQ/2022/7/8/7a05c984-0237-4841-8b54-bd3f3affc29b.jpg' },
  { uri: 'https://images.tokopedia.net/img/cache/700/hDjmkQ/2022/7/8/7a05c984-0237-4841-8b54-bd3f3affc29b.jpg' },
  { uri: 'https://images.tokopedia.net/img/cache/700/hDjmkQ/2022/7/8/7a05c984-0237-4841-8b54-bd3f3affc29b.jpg' },
  { uri: 'https://images.tokopedia.net/img/cache/700/hDjmkQ/2022/7/8/7a05c984-0237-4841-8b54-bd3f3affc29b.jpg' },
  { uri: 'https://images.tokopedia.net/img/cache/700/hDjmkQ/2022/7/8/7a05c984-0237-4841-8b54-bd3f3affc29b.jpg' },
  { uri: 'https://images.tokopedia.net/img/cache/700/hDjmkQ/2022/7/8/7a05c984-0237-4841-8b54-bd3f3affc29b.jpg' },
  { uri: 'https://images.tokopedia.net/img/cache/700/hDjmkQ/2022/7/8/7a05c984-0237-4841-8b54-bd3f3affc29b.jpg' },
  { uri: 'https://images.tokopedia.net/img/cache/700/hDjmkQ/2022/7/8/7a05c984-0237-4841-8b54-bd3f3affc29b.jpg' },
  { uri: 'https://images.tokopedia.net/img/cache/700/hDjmkQ/2022/7/8/7a05c984-0237-4841-8b54-bd3f3affc29b.jpg' },
  { uri: 'https://images.tokopedia.net/img/cache/700/hDjmkQ/2022/7/8/7a05c984-0237-4841-8b54-bd3f3affc29b.jpg' },
  { uri: 'https://images.tokopedia.net/img/cache/700/hDjmkQ/2022/7/8/7a05c984-0237-4841-8b54-bd3f3affc29b.jpg' },
  { uri: 'https://images.tokopedia.net/img/cache/700/hDjmkQ/2022/7/8/7a05c984-0237-4841-8b54-bd3f3affc29b.jpg' },
  { uri: 'https://images.tokopedia.net/img/cache/700/hDjmkQ/2022/7/8/7a05c984-0237-4841-8b54-bd3f3affc29b.jpg' },
  { uri: 'https://images.tokopedia.net/img/cache/700/hDjmkQ/2022/7/8/7a05c984-0237-4841-8b54-bd3f3affc29b.jpg' },
  { uri: 'https://images.tokopedia.net/img/cache/700/hDjmkQ/2022/7/8/7a05c984-0237-4841-8b54-bd3f3affc29b.jpg' },
  { uri: 'https://images.tokopedia.net/img/cache/700/hDjmkQ/2022/7/8/7a05c984-0237-4841-8b54-bd3f3affc29b.jpg' },
  { uri: 'https://images.tokopedia.net/img/cache/700/hDjmkQ/2022/7/8/7a05c984-0237-4841-8b54-bd3f3affc29b.jpg' },
  { uri: 'https://images.tokopedia.net/img/cache/700/hDjmkQ/2022/7/8/7a05c984-0237-4841-8b54-bd3f3affc29b.jpg' },
  { uri: 'https://images.tokopedia.net/img/cache/700/hDjmkQ/2022/7/8/7a05c984-0237-4841-8b54-bd3f3affc29b.jpg' },
  { uri: 'https://images.tokopedia.net/img/cache/700/hDjmkQ/2022/7/8/7a05c984-0237-4841-8b54-bd3f3affc29b.jpg' },
  { uri: 'https://images.tokopedia.net/img/cache/700/hDjmkQ/2022/7/8/7a05c984-0237-4841-8b54-bd3f3affc29b.jpg' },
  { uri: 'https://images.tokopedia.net/img/cache/700/hDjmkQ/2022/7/8/7a05c984-0237-4841-8b54-bd3f3affc29b.jpg' },
  { uri: 'https://images.tokopedia.net/img/cache/700/hDjmkQ/2022/7/8/7a05c984-0237-4841-8b54-bd3f3affc29b.jpg' },
  { uri: 'https://images.tokopedia.net/img/cache/700/hDjmkQ/2022/7/8/7a05c984-0237-4841-8b54-bd3f3affc29b.jpg' },
  { uri: 'https://images.tokopedia.net/img/cache/700/hDjmkQ/2022/7/8/7a05c984-0237-4841-8b54-bd3f3affc29b.jpg' },
  { uri: 'https://images.tokopedia.net/img/cache/700/hDjmkQ/2022/7/8/7a05c984-0237-4841-8b54-bd3f3affc29b.jpg' },
  { uri: 'https://images.tokopedia.net/img/cache/700/hDjmkQ/2022/7/8/7a05c984-0237-4841-8b54-bd3f3affc29b.jpg' },
  { uri: 'https://images.tokopedia.net/img/cache/700/hDjmkQ/2022/7/8/7a05c984-0237-4841-8b54-bd3f3affc29b.jpg' },
  { uri: 'https://images.tokopedia.net/img/cache/700/hDjmkQ/2022/7/8/7a05c984-0237-4841-8b54-bd3f3affc29b.jpg' },
  { uri: 'https://images.tokopedia.net/img/cache/700/hDjmkQ/2022/7/8/7a05c984-0237-4841-8b54-bd3f3affc29b.jpg' },
  { uri: 'https://images.tokopedia.net/img/cache/700/hDjmkQ/2022/7/8/7a05c984-0237-4841-8b54-bd3f3affc29b.jpg' },
  { uri: 'https://images.tokopedia.net/img/cache/700/hDjmkQ/2022/7/8/7a05c984-0237-4841-8b54-bd3f3affc29b.jpg' },
  { uri: 'https://images.tokopedia.net/img/cache/700/hDjmkQ/2022/7/8/7a05c984-0237-4841-8b54-bd3f3affc29b.jpg' },
  { uri: 'https://images.tokopedia.net/img/cache/700/hDjmkQ/2022/7/8/7a05c984-0237-4841-8b54-bd3f3affc29b.jpg' },
  { uri: 'https://images.tokopedia.net/img/cache/700/hDjmkQ/2022/7/8/7a05c984-0237-4841-8b54-bd3f3affc29b.jpg' },
  { uri: 'https://images.tokopedia.net/img/cache/700/hDjmkQ/2022/7/8/7a05c984-0237-4841-8b54-bd3f3affc29b.jpg' },
  { uri: 'https://images.tokopedia.net/img/cache/700/hDjmkQ/2022/7/8/7a05c984-0237-4841-8b54-bd3f3affc29b.jpg' },
  { uri: 'https://images.tokopedia.net/img/cache/700/hDjmkQ/2022/7/8/7a05c984-0237-4841-8b54-bd3f3affc29b.jpg' },
  { uri: 'https://images.tokopedia.net/img/cache/700/hDjmkQ/2022/7/8/7a05c984-0237-4841-8b54-bd3f3affc29b.jpg' },
  { uri: 'https://images.tokopedia.net/img/cache/700/hDjmkQ/2022/7/8/7a05c984-0237-4841-8b54-bd3f3affc29b.jpg' },
  { uri: 'https://images.tokopedia.net/img/cache/700/hDjmkQ/2022/7/8/7a05c984-0237-4841-8b54-bd3f3affc29b.jpg' },
  { uri: 'https://images.tokopedia.net/img/cache/700/hDjmkQ/2022/7/8/7a05c984-0237-4841-8b54-bd3f3affc29b.jpg' },
  { uri: 'https://images.tokopedia.net/img/cache/700/hDjmkQ/2022/7/8/7a05c984-0237-4841-8b54-bd3f3affc29b.jpg' },
  { uri: 'https://images.tokopedia.net/img/cache/700/hDjmkQ/2022/7/8/7a05c984-0237-4841-8b54-bd3f3affc29b.jpg' },
  { uri: 'https://images.tokopedia.net/img/cache/700/hDjmkQ/2022/7/8/7a05c984-0237-4841-8b54-bd3f3affc29b.jpg' },
  { uri: 'https://images.tokopedia.net/img/cache/700/hDjmkQ/2022/7/8/7a05c984-0237-4841-8b54-bd3f3affc29b.jpg' },
  { uri: 'https://images.tokopedia.net/img/cache/700/hDjmkQ/2022/7/8/7a05c984-0237-4841-8b54-bd3f3affc29b.jpg' },
  { uri: 'https://images.tokopedia.net/img/cache/700/hDjmkQ/2022/7/8/7a05c984-0237-4841-8b54-bd3f3affc29b.jpg' },
  { uri: 'https://images.tokopedia.net/img/cache/700/hDjmkQ/2022/7/8/7a05c984-0237-4841-8b54-bd3f3affc29b.jpg' },
  { uri: 'https://images.tokopedia.net/img/cache/700/hDjmkQ/2022/7/8/7a05c984-0237-4841-8b54-bd3f3affc29b.jpg' },
  { uri: 'https://images.tokopedia.net/img/cache/700/hDjmkQ/2022/7/8/7a05c984-0237-4841-8b54-bd3f3affc29b.jpg' },
  { uri: 'https://images.tokopedia.net/img/cache/700/hDjmkQ/2022/7/8/7a05c984-0237-4841-8b54-bd3f3affc29b.jpg' },
  { uri: 'https://images.tokopedia.net/img/cache/700/hDjmkQ/2022/7/8/7a05c984-0237-4841-8b54-bd3f3affc29b.jpg' },
  { uri: 'https://images.tokopedia.net/img/cache/700/hDjmkQ/2022/7/8/7a05c984-0237-4841-8b54-bd3f3affc29b.jpg' },
  { uri: 'https://images.tokopedia.net/img/cache/700/hDjmkQ/2022/7/8/7a05c984-0237-4841-8b54-bd3f3affc29b.jpg' },
  { uri: 'https://images.tokopedia.net/img/cache/700/hDjmkQ/2022/7/8/7a05c984-0237-4841-8b54-bd3f3affc29b.jpg' },
  { uri: 'https://images.tokopedia.net/img/cache/700/hDjmkQ/2022/7/8/7a05c984-0237-4841-8b54-bd3f3affc29b.jpg' },
  { uri: 'https://images.tokopedia.net/img/cache/700/hDjmkQ/2022/7/8/7a05c984-0237-4841-8b54-bd3f3affc29b.jpg' },
  { uri: 'https://images.tokopedia.net/img/cache/700/hDjmkQ/2022/7/8/7a05c984-0237-4841-8b54-bd3f3affc29b.jpg' },
  { uri: 'https://images.tokopedia.net/img/cache/700/hDjmkQ/2022/7/8/7a05c984-0237-4841-8b54-bd3f3affc29b.jpg' },
  { uri: 'https://images.tokopedia.net/img/cache/700/hDjmkQ/2022/7/8/7a05c984-0237-4841-8b54-bd3f3affc29b.jpg' },
  { uri: 'https://images.tokopedia.net/img/cache/700/hDjmkQ/2022/7/8/7a05c984-0237-4841-8b54-bd3f3affc29b.jpg' },
  { uri: 'https://images.tokopedia.net/img/cache/700/hDjmkQ/2022/7/8/7a05c984-0237-4841-8b54-bd3f3affc29b.jpg' },
  { uri: 'https://images.tokopedia.net/img/cache/700/hDjmkQ/2022/7/8/7a05c984-0237-4841-8b54-bd3f3affc29b.jpg' },
  { uri: 'https://images.tokopedia.net/img/cache/700/hDjmkQ/2022/7/8/7a05c984-0237-4841-8b54-bd3f3affc29b.jpg' },
  { uri: 'https://images.tokopedia.net/img/cache/700/hDjmkQ/2022/7/8/7a05c984-0237-4841-8b54-bd3f3affc29b.jpg' },
  { uri: 'https://images.tokopedia.net/img/cache/700/hDjmkQ/2022/7/8/7a05c984-0237-4841-8b54-bd3f3affc29b.jpg' },
  { uri: 'https://images.tokopedia.net/img/cache/700/hDjmkQ/2022/7/8/7a05c984-0237-4841-8b54-bd3f3affc29b.jpg' },
  { uri: 'https://images.tokopedia.net/img/cache/700/hDjmkQ/2022/7/8/7a05c984-0237-4841-8b54-bd3f3affc29b.jpg' },
  { uri: 'https://images.tokopedia.net/img/cache/700/hDjmkQ/2022/7/8/7a05c984-0237-4841-8b54-bd3f3affc29b.jpg' },
  { uri: 'https://images.tokopedia.net/img/cache/700/hDjmkQ/2022/7/8/7a05c984-0237-4841-8b54-bd3f3affc29b.jpg' },
  { uri: 'https://images.tokopedia.net/img/cache/700/hDjmkQ/2022/7/8/7a05c984-0237-4841-8b54-bd3f3affc29b.jpg' },
  { uri: 'https://images.tokopedia.net/img/cache/700/hDjmkQ/2022/7/8/7a05c984-0237-4841-8b54-bd3f3affc29b.jpg' },
  { uri: 'https://images.tokopedia.net/img/cache/700/hDjmkQ/2022/7/8/7a05c984-0237-4841-8b54-bd3f3affc29b.jpg' },
  { uri: 'https://images.tokopedia.net/img/cache/700/hDjmkQ/2022/7/8/7a05c984-0237-4841-8b54-bd3f3affc29b.jpg' },
  { uri: 'https://images.tokopedia.net/img/cache/700/hDjmkQ/2022/7/8/7a05c984-0237-4841-8b54-bd3f3affc29b.jpg' },
  { uri: 'https://images.tokopedia.net/img/cache/700/hDjmkQ/2022/7/8/7a05c984-0237-4841-8b54-bd3f3affc29b.jpg' },
  { uri: 'https://images.tokopedia.net/img/cache/700/hDjmkQ/2022/7/8/7a05c984-0237-4841-8b54-bd3f3affc29b.jpg' },
  { uri: 'https://images.tokopedia.net/img/cache/700/hDjmkQ/2022/7/8/7a05c984-0237-4841-8b54-bd3f3affc29b.jpg' },
  { uri: 'https://images.tokopedia.net/img/cache/700/hDjmkQ/2022/7/8/7a05c984-0237-4841-8b54-bd3f3affc29b.jpg' },
  { uri: 'https://images.tokopedia.net/img/cache/700/hDjmkQ/2022/7/8/7a05c984-0237-4841-8b54-bd3f3affc29b.jpg' },
  { uri: 'https://images.tokopedia.net/img/cache/700/hDjmkQ/2022/7/8/7a05c984-0237-4841-8b54-bd3f3affc29b.jpg' },
  { uri: 'https://images.tokopedia.net/img/cache/700/hDjmkQ/2022/7/8/7a05c984-0237-4841-8b54-bd3f3affc29b.jpg' },
  // Tambahkan URI gambar lainnya
];

const ScrollViewExample = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        {images.map((image, index) => (
          <Image key={index} source={image} style={styles.image} />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  image: {
    width: 100,
    height: 100,
    margin: 5,
  },
});

export default ScrollViewExample;
