import { View, Text, TouchableHighlight } from 'react-native'
import { useState } from 'react'
import Entypo from '@expo/vector-icons/Entypo';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';


export default function Footer({ showModal, naviagtion }) {
    const [isActive, setIsActive] = useState('')
    const navigation = useNavigation();

    return (
        <View className='absolute bottom-0 h-[5rem] bg-gray-950/80 w-full flex flex-row justify-between items-center px-5'>

            <TouchableHighlight
                className=''
                onPress={() => { setIsActive('home'); navigation.navigate('Home') }}
            >
                <View className='flex flex-col justify-center items-center gap-1'>
                    <Entypo name="home" size={30} color={isActive === 'home' ? '#3b82f6' : '#d1d5db'} />
                    <Text className={`${isActive === 'home' ? 'text-blue-500' : 'text-gray-300'}  text-xs`}>Movies</Text>
                </View>
            </TouchableHighlight>

            <TouchableHighlight
                className=''
                onPress={() => {
                    setIsActive('explore');
                    navigation.navigate('Explore')
                }}
            >
                <View className='flex flex-col justify-center items-center gap-1'>
                    <Entypo name="magnifying-glass" size={30} color={isActive === 'explore' ? '#3b82f6' : "#d1d5db"} />
                    <Text className={`${isActive === 'explore' ? 'text-blue-500' : 'text-gray-300'}  text-xs`}>Explore</Text>
                </View>
            </TouchableHighlight>

            <TouchableHighlight
                className=''
                onPress={() => { setIsActive('category'); navigation.navigate('Category') }}
            >
                <View className='flex flex-col justify-center items-center gap-1'>

                    <MaterialIcons name="category" size={30} color={isActive === 'category' ? '#3b82f6' : "#d1d5db"} />
                    <Text className={`${isActive === 'category' ? 'text-blue-500' : 'text-gray-300'}  text-xs`}>Categories</Text>
                </View>
            </TouchableHighlight>

            <TouchableHighlight
                className=''
                onPress={() => { setIsActive('tv'); navigation.navigate('SeriesHome') }}
            >
                <View className='flex flex-col justify-center items-center gap-1'>
                    <Entypo name="tv" size={30} color={isActive === 'tv' ? '#3b82f6' : "#d1d5db"} />
                    <Text className={`${isActive === 'tv' ? 'text-blue-500' : 'text-gray-300'}  text-xs`}>Series</Text>
                </View>
            </TouchableHighlight>

        </View>
    )
}