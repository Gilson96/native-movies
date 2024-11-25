import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { TouchableHighlight } from 'react-native'
import MovieRecommendations from './MovieRecommendations'
import MovieActors from './MovieActors'
import MovieDetails from './MovieDetails'

export default function MovieTabs({movieId, movieDetails}) {
    const [isActive, setIsActive] = useState('recommendations')

    return (
        <View>
            <View className='w-full flex flex-row justify-center gap-[4rem]'>
                <TouchableHighlight
                    onPress={() => { setIsActive('recommendations') }}
                >
                    <View className='flex flex-col-reverse'>
                        <Text className={`${isActive === 'recommendations' ? 'text-blue-500' : 'text-gray-500'} pb-2`}>Recommendations</Text>
                        <View className={`w-[9.5rem] h-[1px] ${isActive === 'recommendations' ? 'bg-blue-500' : 'bg-gray-500'}  absolute -left-2`}></View>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight
                    onPress={() => { setIsActive('actors') }}
                >
                    <View className='flex flex-col-reverse'>
                        <Text className={`${isActive === 'actors' ? 'text-blue-500' : 'text-gray-500'} pb-2`}>Actors</Text>
                        <View className={`w-[4rem] h-[1px] ${isActive === 'actors' ? 'bg-blue-500' : 'bg-gray-500'}  absolute -left-2`}></View>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight
                    onPress={() => { setIsActive('about') }}
                    className='mr-4'
                >
                    <View className='flex flex-col-reverse pr-2'>
                        <Text className={`${isActive === 'about' ? 'text-blue-500' : 'text-gray-500'} pb-2`}>About</Text>
                        <View className={`w-[4rem] h-[1px] ${isActive === 'about' ? 'bg-blue-500' : 'bg-gray-500'}  absolute -left-2`}></View>
                    </View>
                </TouchableHighlight>
            </View>

            <View className='mb-3'>
                {isActive === 'recommendations' && 
                    <View className='px-2 pt-3'>
                        <MovieRecommendations movieId={movieId}/>
                    </View>
                }
                {isActive === 'actors' && 
                    <View className='px-2 pt-3'>
                        <MovieActors movieId={movieId}/>
                    </View>
                }              
                {isActive === 'about' && 
                    <View className='px-2 pt-3'>
                        <MovieDetails movieDetails={movieDetails}/>
                    </View>
                }              
            </View>
        </View>
    )
}