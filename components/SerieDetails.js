import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

export default function MovieDetails({ serieDetails }) {

    console.log(serieDetails)
    return (
        <View className='flex flex-row justify-start items-center gap-[5rem]'>

            <View className='flex flex-col gap-2'>
                <View>
                    <Text className='text-white'>Country</Text>
                    <Text className='text-gray-500'>{serieDetails.origin_country.join('/')}</Text>
                </View>
                <View>
                    <Text className='text-white'>Seasons</Text>
                    <Text className='text-gray-500'>{serieDetails.number_of_seasons}</Text>
                </View>
                <View>
                    <Text className='text-white'>Release Date</Text>
                    <Text className='text-gray-500'>{serieDetails.first_air_date}</Text>
                </View>
                <View>
                    <Text className='text-white'>Official Website</Text>
                    <Link href={serieDetails.homepage}><Text className='text-gray-500 underline'>Homepage</Text></Link>
                </View>
                
            </View>

            <View className='flex flex-col gap-2'>
                <View>
                    <Text className='text-white'>rating</Text>
                    <Text className='text-gray-500'>{serieDetails.vote_average.toFixed(1)}</Text>
                </View>
                <View>
                    <Text className='text-white'>Languages</Text>
                    <Text className='text-gray-500'>{serieDetails.spoken_languages.map(language => language.english_name)}</Text>
                </View>
                <View>
                    <Text className='text-white'>Companies</Text>
                    {serieDetails.production_companies.map(company =>
                        <View className='flex flex-col'>
                            <Text className='text-gray-500'>{company.name}</Text>
                        </View>
                    )}
                </View>
            </View >
        </View >
    )
}