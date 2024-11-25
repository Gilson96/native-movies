import { View, Text, ScrollView, TouchableOpacity, ImageBackground } from 'react-native'
import { useState } from 'react'
import { TouchableHighlight } from 'react-native'
import { useNavigation } from 'expo-router'
import Footer from '../components/Footer'
import Search from '../components/Search'
import { useSearchMoviesQuery } from '../features/Movies/allMoviesApi'
import { useSearchSeriesQuery } from '../features/Series/allSeriesApi'
import { useIsFocused } from '@react-navigation/native';

export default function Category() {
    const [isActive, setIsActive] = useState('')
    const [modalVisible, setVisible] = useState(false);
    const [text, onChangeText] = useState('')
    const isFocused = useIsFocused();
    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);

    const { data: searchMovies = [] } = useSearchMoviesQuery(text)
    const { data: searchSeries = [] } = useSearchSeriesQuery(text)

    const navigation = useNavigation()

    return (
        <View className='bg-[#090E17] w-full h-full  flex flex-cl justify-center items-center'>
            {modalVisible &&
                <View className='h-[10rem] absolute top-5 mt-5'>
                    <Search hideModal={hideModal} onChangeText={onChangeText} isActive={isActive} setIsActive={setIsActive}>

                        {isActive === 'movie' && <ScrollView className='w-full mt-5'>
                            <View className='flex flex-row flex-wrap gap-2'>
                                {searchMovies.results.map((movie, index) => (
                                    <TouchableHighlight
                                        key={index}
                                        onPress={() => {
                                            navigation.navigate('Movie', {
                                                movieId: movie.id
                                            });
                                        }}
                                        className='w-[48%]'
                                    >
                                        <ImageBackground
                                            source={{ uri: `https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}` }}
                                            style={{ width: 150, height: 150 }}
                                            className='justify-end'
                                        >
                                            <View style={{ backgroundColor: 'rgba(0,0,0, 0.40)', height: '100%', width: '100%', display: 'flex', justifyContent: 'flex-end', padding: 2 }}>
                                                <Text className='text-white font-bold text-sm'>{movie.title}</Text>
                                            </View>
                                        </ImageBackground>
                                    </TouchableHighlight>
                                ))}
                            </View>
                        </ScrollView>
                        }

                        {isActive === 'serie' && <ScrollView className='w-full mt-5'>
                            <View className='flex flex-row flex-wrap gap-2'>
                                {searchSeries.results.map((serie, index) => (
                                    <TouchableHighlight
                                        key={index}
                                        onPress={() => {
                                            navigation.navigate('Serie', {
                                                serieId: serie.id
                                            });
                                        }}
                                        className='w-[48%]'
                                    >
                                        <ImageBackground
                                            source={{ uri: `https://image.tmdb.org/t/p/w1280/${serie.backdrop_path}` }}
                                            style={{ width: 150, height: 150 }}
                                            className='justify-end'
                                        >
                                            <View style={{ backgroundColor: 'rgba(0,0,0, 0.40)', height: '100%', width: '100%', display: 'flex', justifyContent: 'flex-end', padding: 2 }}>
                                                <Text className='text-white font-bold text-sm'>{serie.name}</Text>
                                            </View>
                                        </ImageBackground>
                                    </TouchableHighlight>
                                ))}
                            </View>
                        </ScrollView>
                        }

                    </Search>
                </View>
            }

            <View className='flex flex-row justify-center items-center flex-wrap gap-5'>
                <TouchableOpacity
                    className='w-[12rem] h-[14rem] border border-orange-700 rounded-2xl justify-center items-center bg-orange-700'
                    onPress={() => navigation.navigate('Action')}
                >
                    <Text className='text-white font-bold text-2xl'>Action</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    className='w-[12rem] h-[14rem] border border-cyan-700 rounded-2xl justify-center items-center bg-cyan-700'
                    onPress={() => navigation.navigate('Animation')}
                >
                    <Text className='text-white font-bold text-2xl'>Animation</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    className='w-[12rem] h-[14rem] border border-yellow-700 rounded-2xl justify-center items-center bg-yellow-700'
                    onPress={() => navigation.navigate('Comedy')}
                >
                    <Text className='text-white font-bold text-2xl'>Comedy</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    className='w-[12rem] h-[14rem] border border-lime-700 rounded-2xl justify-center items-center bg-lime-700'
                    onPress={() => navigation.navigate('Crime')}
                >
                    <Text className='text-white font-bold text-2xl'>Crime</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    className='w-[12rem] h-[14rem] border border-purple-700 rounded-2xl justify-center items-center bg-purple-700'
                    onPress={() => navigation.navigate('Documentary')}
                >
                    <Text className='text-white font-bold text-2xl'>Documentry</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    className='w-[12rem] h-[14rem] border border-neutral-700 rounded-2xl justify-center items-center bg-neutral-700'
                    onPress={() => navigation.navigate('Drama')}
                >
                    <Text className='text-white font-bold text-2xl'>Drama</Text>
                </TouchableOpacity>
            </View >

            <Footer showModal={showModal} isFocused={isFocused}/>
        </View >
    )
}