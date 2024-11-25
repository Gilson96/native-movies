import { View, Text, ImageBackground, TouchableHighlight, ScrollView } from 'react-native'
import { useGetSerieDetailsQuery } from '../features/Series/allSeriesApi'
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import SerieTabs from '../components/SerieTabs';

export default function Serie({ route }) {
    const { serieId } = route.params;
    const { data: serieDetails, isLoading } = useGetSerieDetailsQuery(serieId)

    const navigation = useNavigation();

    if (isLoading) return <Text>Loading</Text>

    return (
        <ScrollView className='h-full w-full bg-[#090E17] '>
            <ImageBackground
                source={{ uri: `https://image.tmdb.org/t/p/w1280/${serieDetails.backdrop_path}` }}
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
                    <Text className='text-white font-bold text-2xl'>{serieDetails.name}</Text>
                    <View className='flex flex-row w-full gap-2'>
                        {serieDetails.genres.map((genre, key) => (
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
                <Text className='text-gray-200 font-semibold'>{serieDetails.episode_run_time} min ep.</Text>
            </View>
            <Text className='text-white px-3 pt-1 text-justify'>{serieDetails.overview}</Text>

            <View className='mt-10'>
                <SerieTabs serieId={serieId} serieDetails={serieDetails}/>
            </View>

        </ScrollView>
    )
}