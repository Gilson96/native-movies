import { View, Text, Image, ScrollView, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import { useGetTrendingSeriesQuery } from '../features/Series/allSeriesApi'
import { TouchableHighlight } from 'react-native'
import PopularSeries from '../components/PopularSeries'
import TopRatedSeries from '../components/TopRatedSeries'
import Footer from '../components/Footer'
import Search from '../components/Search'
import { useSearchMoviesQuery } from '../features/Movies/allMoviesApi'
import { useSearchSeriesQuery } from '../features/Series/allSeriesApi'
import { useNavigation } from '@react-navigation/native';
import heroImageFallback from '../assets/images/hero-banner.jpg'
import Feather from '@expo/vector-icons/Feather';

export default function Home() {
  const [serieImage, setSerieImage] = useState('')
  const [serieTitle, setSerieTitle] = useState('')
  const [serieId, setSerieId] = useState('')
  const navigation = useNavigation();

  const { data: trendingSeries = [], isLoading } = useGetTrendingSeriesQuery()

  if (isLoading) return <Text>Loading</Text>

  return (
    <>

      {/* Home */}
      <ScrollView className='h-full w-full bg-[#090E17]'>

        {serieImage === '' ?
          // fallback
          <ImageBackground
            source={heroImageFallback}
            resizeMode="cover"
            className='h-[25rem] w-full flex flex-col justify-end items-start'
          >
            <View
              style={{ backgroundColor: 'rgba(0,0,0, 0.60)', height: '100%', width: '100%' }}
              className='px-3 pb-[1rem] justify-center items-center gap-5'
            >
              <View className='flex flex-row gap-2 justify-center items-center'>
                <Text className='text-white font-bold text-[2rem]'>native-movies</Text>
                <Feather name="film" size={50} color="white" />
              </View>
            </View>
          </ImageBackground>
          :
          <ImageBackground
            source={{ uri: `https://image.tmdb.org/t/p/w1280/${serieImage}` }}
            resizeMode="cover"
            className='h-[25rem] w-full flex flex-col justify-end items-start'
          >
            <View
              style={{ backgroundColor: 'rgba(0,0,0, 0.60)', height: '100%', width: '100%' }}
              className='px-3 pb-[1rem] justify-end items-start gap-5'
            >
              <Text className='text-white font-bold text-xl'>{serieTitle}</Text>
              <View className='w-[10rem] h-[3rem] flex justify-center items-center bg-blue-400 rounded-full p-2'>
                <Text onPress={() => navigation.navigate('Serie', { serieId: serieId })} className='text-white font-bold text-lg'>See More</Text>
              </View>
            </View>
          </ImageBackground>
        }
        <ScrollView horizontal={true}>
          {trendingSeries.results.filter(serie => serie.backdrop_path !== null).map((serie, index) => (
            <>
              <TouchableHighlight
                key={index}
                onPress={() => {
                  setSerieId(serie.id)
                  setSerieTitle(serie.name)
                  setSerieImage(serie.backdrop_path)
                }}
                className='w-[12rem]'
              >
                <Image
                  source={{ uri: `https://image.tmdb.org/t/p/w1280/${serie.backdrop_path}` }}
                  style={{ width: 160, height: 100, borderRadius: 10 }}
                />
              </TouchableHighlight>
            </>
          ))}
        </ScrollView>

        <View className='mt-[4rem] px-3'>
          <Text className='text-2xl text-white mb-3 font-bold'>Popular</Text>
          <PopularSeries />
        </View>

        <View className='mt-[2rem] mb-[5rem] px-3'>
          <Text className='text-2xl text-white mb-3 font-bold'>Top Rated</Text>
          <TopRatedSeries />
        </View>

      </ScrollView>

      <Footer />
    </>
  )
}