import React from 'react';
import { StyleSheet, Text, View, Pressable, FlatList, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { colors, recipeList } from '../Constants';

const RecipeCard = () => {
  const navigation = useNavigation();

  const handleRecipePress = (item) => {
    navigation.navigate('RecipeDetails', { item });
  };

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={recipeList}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => handleRecipePress(item)}
            style={styles.card}
          >
            <Image
              style={styles.image}
              source={item.image}
            />
            <Text style={styles.title}>{item.name}</Text>
            <View style={styles.details}>
              <Text>{item.time}</Text>
              <Text> | </Text>
              <Text>{item.rating}</Text>
              <FontAwesome
                name="star"
                color={colors.primary}
                size={16}
                style={styles.icon}
              />
            </View>
          </Pressable>
        )}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

export default RecipeCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    backgroundColor: colors.light,
    borderRadius: 16,
    alignItems: "center",
    paddingHorizontal: 8,
    paddingVertical: 26,
    marginVertical: 16,
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: "cover",
  },
  title: {
    fontWeight: '600',
    fontSize: 16,
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },
  icon: {
    marginLeft: 4,
  },
  columnWrapper: {
    justifyContent: "space-between",
  },
});