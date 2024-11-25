import { View, Text, ScrollView, TouchableHighlight, ImageBackground, TextInput, Image } from 'react-native'
import { useState } from 'react'
import { useSearchMoviesQuery } from '../features/Movies/allMoviesApi'
import { useSearchSeriesQuery } from '../features/Series/allSeriesApi'
import * as Progress from 'react-native-progress';
import { useNavigation } from '@react-navigation/native';
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import { Menu, Divider } from 'react-native-paper';

export default function Explore({ route }) {
    const [isActive, setIsActive] = useState('movie')
    const [openFilter, setOpenFilter] = useState()
    const [text, onChangeText] = useState('')
    const [visible, setVisible] = useState(false);
    const { data: searchMovies = [], isLoading } = useSearchMoviesQuery(text)
    const { data: searchSeries = [] } = useSearchSeriesQuery(text)

    const openMenu = () => setVisible(true);
    const navigation = useNavigation();
    const closeMenu = () => setVisible(false);

    if (isLoading) return <Progress.Circle size={30} indeterminate={true} />
    return (

        <View className='flex flex-col justfiy-between items-center bg-[#090E17] h-full w-full p-2'>

            <View className='flex flex-row w-full justify-between items-center mt-12 px-2'>

                <TouchableHighlight
                    activeOpacity={0.6}
                    underlayColor="transparent"
                    onPress={() => { navigation.navigate('Home') }}
                >
                    <AntDesign name="leftcircle" size={35} color="#6b7280" />
                </TouchableHighlight>

                <View className=''>
                    <TextInput
                        placeholder="search"
                        onChangeText={onChangeText}
                        value={text}
                        className='border border-slate-200 bg-slate-200 w-[15rem] h-[3rem] p-3 mr-1 rounded-2xl flex justify-center items-center'
                    />
                    <View className='absolute left-[12.5rem] top-2'>
                        <Entypo name="magnifying-glass" size={25} color="black" />
                    </View>
                </View>

                <Menu
                    visible={visible}
                    onDismiss={closeMenu}
                    contentStyle={{ width: 90, top: 70, left: 5, backgroundColor: '#090E17', borderWidth: 1, borderColor: 'grey' }}
                    anchor={<TouchableHighlight onPress={openMenu} className=''><AntDesign name="bars" size={35} color="white" /></TouchableHighlight>}>
                    <Menu.Item onPress={() => { setIsActive('movie') }} title="movies" />
                    <Divider />
                    <Menu.Item onPress={() => { setIsActive('serie') }} title="series" />
                </Menu>

            </View>

            {isActive === 'movie' &&
                <ScrollView className='w-full mt-5'>
                    <View className='flex flex-row justify-center items-center flex-wrap gap-2'>
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
                <ScrollView className='w-full mt-5'>
                    <View className='flex flex-row justify-center items-center flex-wrap gap-2'>
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