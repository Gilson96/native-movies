import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import { useGetMovieActorsQuery } from '../features/Movies/allMoviesApi'
import * as Progress from 'react-native-progress';
import { useNavigation } from '@react-navigation/native';

export default function MovieActors({ movieId }) {
    const { data: movieActors, isLoading } = useGetMovieActorsQuery(movieId)
    const navigation = useNavigation();

    console.log(movieActors)
    return (
        <>
            {
                isLoading ?
                    <Progress.Circle size={30} indeterminate={true} />
                    :
                    <ScrollView horizontal={true}>
                        {movieActors.cast.filter(actors => actors.profile_path !== null).map((actor, index) => (
                            <>
                                <View className='w-[14rem]'>
                                    <Image
                                        source={{ uri: `https://image.tmdb.org/t/p/w342/${actor.profile_path}` }}
                                        style={{ width: 180, height: 200, borderRadius: 10 }}
                                    />
                                    <View className='flex flex-row justify-start items-center flex-wrap'>
                                        <Text className='text-white'>{actor.name} as </Text>
                                        <Text className='text-white'>'{actor.character}'</Text>
                                    </View>
                                </View>
                            </>
                        ))}
                    </ScrollView>
            }
        </>
    )
}