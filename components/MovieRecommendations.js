import { View, Text, ScrollView, TouchableHighlight, Image } from 'react-native'
import React from 'react'
import { useGetMovieRecommendationsQuery } from '../features/Movies/allMoviesApi'
import * as Progress from 'react-native-progress';
import { useNavigation } from '@react-navigation/native';

export default function MovieRecommendations({ movieId }) {
    const { data: movieRecommendations = [], isLoading } = useGetMovieRecommendationsQuery(movieId)
    const navigation = useNavigation();

    return (
        <>
            {
                isLoading ?
                    <Progress.Circle size={30} indeterminate={true} />
                    :
                    <ScrollView horizontal={true}>
                        {movieRecommendations.results.filter((movie)=> movie.backdrop_path !== null).map((movie, index) => (
                            <>
                                <TouchableHighlight
                                    key={index}
                                    className='w-[14rem] h-full'
                                    onPress={() => {
                                        navigation.navigate('Movie', {
                                            movieId: movie.id
                                        });
                                    }}
                                >
                                    <View>
                                        <Image
                                            source={{ uri: `https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}` }}
                                            style={{ width: 180, height: 200, borderRadius: 10 }}
                                        />
                                        <Text className='text-white'>{movie.title}</Text>
                                    </View>
                                </TouchableHighlight>
                            </>
                        ))}
                    </ScrollView>
            }
        </>

    )
}