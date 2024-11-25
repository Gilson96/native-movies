import { View, Text, ScrollView, TouchableHighlight, Image } from 'react-native'
import React from 'react'
import { useGetSerieRecommendationsQuery } from '../features/Series/allSeriesApi'
import * as Progress from 'react-native-progress';
import { useNavigation } from '@react-navigation/native';

export default function SerieRecommendations({ serieId }) {
    const { data: serieRecommendations = [], isLoading } = useGetSerieRecommendationsQuery(serieId)
    const navigation = useNavigation();

    console.log(serieRecommendations)

    return (
        <>
            {
                isLoading ?
                    <Progress.Circle size={30} indeterminate={true} />
                    :
                    <ScrollView horizontal={true}>
                        {serieRecommendations.results.filter((serie)=> serie.backdrop_path !== null).map((serie, index) => (
                            <>
                                <TouchableHighlight
                                    key={index}
                                    className='w-[14rem] h-full'
                                    onPress={() => {
                                        navigation.navigate('Serie', {
                                            serieId: serie.id
                                        });
                                    }}
                                >
                                    <View>
                                        <Image
                                            source={{ uri: `https://image.tmdb.org/t/p/w1280/${serie.backdrop_path}` }}
                                            style={{ width: 180, height: 200, borderRadius: 10 }}
                                        />
                                        <Text className='text-white'>{serie.name}</Text>
                                    </View>
                                </TouchableHighlight>
                            </>
                        ))}
                    </ScrollView>
            }
        </>

    )
}