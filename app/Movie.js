import { View, Text, ImageBackground, TouchableHighlight, ScrollView } from 'react-native'
import { useGetMovieDetailsQuery } from '../features/Movies/allMoviesApi'
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import MovieTabs from '../components/MovieTabs';

export default function Movie({ route }) {
    const { movieId } = route.params;
    const { data: movieDetails, isLoading } = useGetMovieDetailsQuery(movieId)

    const navigation = useNavigation();

    if (isLoading) return <Text>Loading</Text>

    return (
        <ScrollView className='h-full w-full bg-[#090E17]'>
            <ImageBackground
                source={{ uri: `https://image.tmdb.org/t/p/w1280/${movieDetails.backdrop_path}` }}
                resizeMode="cover"
                className='h-[25rem] w-full flex flex-col justify-end items-start'
            >
                <TouchableHighlight
                    activeOpacity={0.6}
                    underlayColor="transparent"
                    className='absolute z-10 top-12 left-2'
                    onPress={() => { navigation.navigate('Home') }}
                >
                    <AntDesign name="leftcircle" size={35} color="#6b7280" />
                </TouchableHighlight>
                <View
                    style={{ backgroundColor: 'rgba(0,0,0, 0.60)', height: '100%', width: '100%' }}
                    className='p-3 pb-[1rem] justify-end items-start gap-5'
                >
                    <Text className='text-white font-bold text-2xl'>{movieDetails.title}</Text>
                    <View className='flex flex-row w-full gap-2'>
                        {movieDetails.genres.map((genre, key) => (
                            <View
                                key={key}
                                className='w-auto h-auto p-2 border border-blue-400 rounded-full justify-center items-center text-gray-500'
                            >
                                <Text className='text-blue-400 text-xs'>{genre.name}</Text>
                            </View>
                        ))}
                    </View>
                </View>
            </ImageBackground>
            <View className='mt-[1rem] px-3 flex flex-row justify-between items-center'>
                <Text className='text-gray-200 font-semibold'>Overview</Text>
                <Text className='text-gray-200 font-semibold'>{movieDetails.runtime} min</Text>
            </View>
            <Text className='text-white px-3 pt-1 text-justify'>{movieDetails.overview}</Text>

            <View className='mt-10 mb-[5rem]'>
                <MovieTabs movieId={movieId} movieDetails={movieDetails}/>
            </View>

        </ScrollView>
    )
}