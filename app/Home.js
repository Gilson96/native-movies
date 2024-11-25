import { View, Text, Image, ScrollView, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import { useGetTrendingMoviesQuery } from '../features/Movies/allMoviesApi'
import { TouchableHighlight } from 'react-native'
import PopularMovies from '../components/PopularMovies'
import Footer from '../components/Footer'
import Search from '../components/Search'
import { useSearchMoviesQuery } from '../features/Movies/allMoviesApi'
import { useSearchSeriesQuery } from '../features/Series/allSeriesApi'
import { useNavigation } from '@react-navigation/native';
import TopRatedMovies from '../components/TopRatedMovies'
import heroImageFallback from '../assets/images/hero-banner.jpg'
import Feather from '@expo/vector-icons/Feather';
import NativeCarousel from '../components/SpecialUI/Carousel'

export default function Home() {
  const [movieImage, setMovieImage] = useState('')
  const [movieTitle, setMovieTitle] = useState('')
  const [movieId, setMovieId] = useState('')
  const navigation = useNavigation();

  const { data: trendingMovies = [], isLoading } = useGetTrendingMoviesQuery()


  if (isLoading) return <Text>Loading</Text>

  return (
    <>

      {/* Home */}
      <ScrollView className='h-full w-full bg-[#090E17]'>

        {movieImage === '' ?
          // fallback
          <ImageBackground
            source={heroImageFallback}
            resizeMode="cover"
            className='h-[25rem] w-full flex flex-col justify-end items-start'
          >
            <View
              style={{ backgroundColor: 'rgba(0,0,0, 0.80)', height: '100%', width: '100%' }}
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
            source={{ uri: `https://image.tmdb.org/t/p/w1280/${movieImage}` }}
            resizeMode="cover"
            className='h-[25rem] w-full flex flex-col justify-end items-start'
          >
            <View
              style={{ backgroundColor: 'rgba(0,0,0, 0.50)', height: '100%', width: '100%' }}
              className='px-3 pb-[1rem] justify-end items-start gap-5'
            >
              <Text className='text-white font-bold text-4xl'>{movieTitle}</Text>
              <View></View>
              <View className='w-[10rem] h-[3rem] flex justify-center items-center bg-blue-400 rounded-full p-2'>
                <Text onPress={() => navigation.navigate('Movie', { movieId: movieId })} className='text-white font-bold text-lg'>See More</Text>
              </View>
            </View>
          </ImageBackground>
        }
        <ScrollView horizontal={true}>
          {trendingMovies.results.filter(movie => movie.backdrop_path !== null).map((movie, index) => (
            <>
              <TouchableHighlight
                key={index}
                onPress={() => {
                  setMovieId(movie.id)
                  setMovieTitle(movie.title)
                  setMovieImage(movie.backdrop_path)
                }}
                className='w-[12rem]'
              >
                <Image
                  source={{ uri: `https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}` }}
                  style={{  width: 160, height: 100, borderRadius: 10 }}
                />

              </TouchableHighlight>

            </>
          ))}
        </ScrollView>

        {/* popular movies */}
        <View className='mt-[2rem] px-3'>
          <Text className='text-2xl text-white mb-3 font-bold'>Popular</Text>
          <PopularMovies />
        </View>

        {/* top_rated movies */}
        <View className='mt-[5rem] mb-[5rem] px-3'>
          <Text className='text-2xl text-white mb-3 font-bold'>Top Rated</Text>
          <TopRatedMovies />
        </View>

      </ScrollView>

      <Footer />
    </>
  )
}