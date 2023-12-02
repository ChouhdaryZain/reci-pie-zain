import React from 'react';
import { Image, StyleSheet, Text, View, Pressable, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { colors } from '../Constants';

const RecipeDetailsScreen = ({ navigation, route }) => {
    const { item } = route.params;

    return (
        <View style={{ backgroundColor: item.color, flex: 1 }}>
            <View style={styles.header}>
                <Pressable onPress={() => navigation.goBack()}>
                    <FontAwesome name='arrow-circle-left' size={28} color={'#fff'} />
                </Pressable>
                <Pressable>
                    <FontAwesome name='heart-o' size={28} color={'#fff'} />
                </Pressable>
            </View>
            <View style={styles.detailContainer}>
                <View style={styles.imageContainer}>
                    <Image source={item.image} style={styles.recipeImage} />
                </View>
                <Text style={styles.recipeTitle}>{item.name}</Text>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Text style={styles.description}>{item.description}</Text>
                    <View style={styles.infoContainer}>
                        {/* Time Required for recipe to cook */}
                        <View style={[styles.infoBox, { backgroundColor: 'rgba(255,0,0,0.38)' }]}>
                            <Text style={styles.infoEmoji}>⏱️</Text>
                            <Text style={styles.infoText}>{item.time}</Text>
                        </View>
                        {/* Difficulty Level of recipe */}
                        <View style={[styles.infoBox, { backgroundColor: 'rgba(135, 206, 235, 0.8)' }]}>
                            <Text style={styles.infoEmoji}>🥣</Text>
                            <Text style={styles.infoText}>{item.difficulty}</Text>
                        </View>
                        {/* Calories in a recipe */}
                        <View style={[styles.infoBox, { backgroundColor: 'rgba(255, 165, 0, 0.48)' }]}>
                            <Text style={styles.infoEmoji}>🔥</Text>
                            <Text style={styles.infoText}>{item.calories}</Text>
                        </View>
                    </View>
                    <View style={styles.ingredientsContainer}>
                        <Text style={styles.ingredientsTitle}>Ingredients:</Text>
                        {item.ingredients.map((ingredient, index) => (
                            <Text key={index} style={styles.ingredient}>{ingredient}</Text>
                        ))}
                    </View>
                    <View style={styles.stepsContainer}>
                        <Text style={styles.stepsTitle}>Steps:</Text>
                        {item.steps.map((step, index) => (
                            <Text key={index} style={styles.step}>{`${index + 1}) ${step}`}</Text>
                        ))}
                    </View>
                </ScrollView>
            </View>
        </View>
    );
}

export default RecipeDetailsScreen;

const styles = StyleSheet.create({
    header: {
        marginTop: 44,
        marginHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    detailContainer: {
        backgroundColor: "#fff",
        flex: 1,
        marginTop: 150,
        borderTopRightRadius: 56,
        borderTopLeftRadius: 56,
        alignItems: 'center',
        paddingHorizontal: 16,
    },
    imageContainer: {
        width: 300,
        height: 300,
        position: 'absolute',
        marginTop: -150,
        borderRadius: 56,
    },
    recipeImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    recipeTitle: {
        marginTop: 160,
        fontWeight: "bold",
        fontSize: 28,
        alignSelf: 'center',
        marginBottom: 16,
    },
    description: {
        marginVertical: 16,
        fontSize: 16,
        alignSelf: 'center',
        padding: 4,
    },
    infoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
    },
    infoBox: {
        marginTop: 8,
        padding: 16,
        borderRadius: 8,
        alignItems: 'center',
        width: '30%',
    },
    infoEmoji: {
        fontSize: 40,
    },
    infoText: {
        fontSize: 20,
        fontWeight: '500',
    },
    ingredientsContainer: {
        alignSelf: 'flex-start',
        marginTop: 22,
    },
    ingredientsTitle: {
        fontSize: 22, 
        fontWeight: '600', 
        marginBottom: 6,
    },
    ingredient: {
        fontSize: 18,
        marginLeft: 6,
        marginVertical: 4,
    },
    stepsContainer: {
        alignSelf: 'flex-start',
        marginTop: 22,
    },
    stepsTitle: {
        fontSize: 22, 
        fontWeight: '600',
    },
    step: {
        fontSize: 18,
        marginVertical: 4,
    },
});
