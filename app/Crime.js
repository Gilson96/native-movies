import { View, Text, ScrollView, TouchableHighlight, Image, ImageBackground } from 'react-native'
import { useState } from 'react'
import { useGetCrimeMoviesQuery } from '../features/Movies/moviesByGenreApi'
import { useGetCrimeSeriesQuery } from '../features/Series/seriesByGenreApi'
import * as Progress from 'react-native-progress';
import { useNavigation } from '@react-navigation/native';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function Crime({ route }) {
    const [isActive, setIsActive] = useState('movie')
    const { data: crimeMovies = [], isLoading } = useGetCrimeMoviesQuery()
    const { data: crimeSeries = [] } = useGetCrimeSeriesQuery()
    const navigation = useNavigation();

    if (isLoading) return <Progress.Circle size={30} indeterminate={true} />
    return (

        <View className='flex flex-col justfiy-center items-center bg-[#090E17] h-full w-full p-2'>
            <TouchableHighlight
                activeOpacity={0.6}
                underlayColor="transparent"
                className='absolute top-[4rem] left-3'
                onPress={() => { navigation.navigate('Category') }}
            >
                <AntDesign name="leftcircle" size={35} color="#6b7280" />
            </TouchableHighlight>
            <View className='flex flex-row justify-between items-center border border-slate-300 w-[10rem] h-[4rem] rounded-full mt-12 px-5 py-2'>
                <Text
                    className={`${isActive === 'movie' ? 'text-white ' : 'text-slate-500'} text-lg`}
                    onPress={() => { setIsActive('movie') }}
                >
                    Movie
                </Text>
                <Text
                    className={`${isActive === 'serie' ? 'text-white' : 'text-slate-500'} text-lg`}
                    onPress={() => { setIsActive('serie') }}
                >
                    Serie
                </Text>
            </View>


            {isActive === 'movie' &&
                <ScrollView className='w-full mt-5 mb-[5rem]'>
                    <View className='flex flex-row justify-center items-center flex-wrap gap-2'>
                        {crimeMovies.results.filter(movie => movie.backdrop_path !== null).map((movie, index) => (
                            <TouchableHighlight
                                key={index}
                                onPress={() => {
                                    navigation.navigate('Movie', {
                                        movieId: movie.id
                                    });
                                }}
                                className='w-[48%]'
                            >
                                <View>
                                    <Image
                                        source={{ uri: `https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}` }}
                                        style={{ width: 160, height: 200, borderRadius: 10 }}
                                    />
                                    <Text className='text-white font-bold text-sm'>{movie.title}</Text>
                                </View>
                            </TouchableHighlight>
                        ))}
                    </View>
                </ScrollView>
            }

            {isActive === 'serie' &&
                <ScrollView className='w-full mt-5 mb-[5rem]'>
                    <View className='flex flex-row justify-center items-center flex-wrap gap-2'>
                        {crimeSeries.results.filter(serie => serie.backdrop_path !== null).map((serie, index) => (
                            <TouchableHighlight
                                key={index}
                                onPress={() => {
                                    navigation.navigate('Serie', {
                                        serieId: serie.id
                                    });
                                }}
                                className='w-[48%]'
                            >
                                <View>
                                    <Image
                                        source={{ uri: `https://image.tmdb.org/t/p/w1280/${serie.backdrop_path}` }}
                                        style={{ width: 160, height: 200, borderRadius: 10 }}
                                    />
                                    <Text className='text-white font-bold text-sm'>{serie.name}</Text>
                                </View>
                            </TouchableHighlight>
                        ))}
                    </View>
                </ScrollView>
            }


        </View>
    )
}