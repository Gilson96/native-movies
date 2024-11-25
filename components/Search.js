import { Modal, Portal } from 'react-native-paper';
import { Text, View, TextInput } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import React from 'react'

export default function Search({ hideModal, children, text, onChangeText, setIsActive, isActive }) {

    return (
        <Portal>
            <Modal visible={true} onDismiss={hideModal} contentContainerStyle={containerStyle}>


                <View className='w-full h-[2rem] flex flex-row justify-between items-center mt-2'>
                    <View className='flex flex-row items-center w-[9rem] h-[4rem] rounded-full px-2 py-2 gap-1'>
                        <Text
                            className={`${isActive === 'movie' ? 'text-blue-500 bg-black' : 'text-slate-500 border border-slate-500'} text-sm rounded-full py-2 px-3`}
                            onPress={() => { setIsActive('movie') }}
                        >
                            Movie
                        </Text>
                        <Text
                            className={`${isActive === 'serie' ? 'text-blue-500 bg-black' : 'text-slate-500 border border-slate-500'} text-sm rounded-full py-2 px-3`}
                            onPress={() => { setIsActive('serie') }}
                        >
                            Serie
                        </Text>
                    </View>
                    <TextInput
                        placeholder="search "
                        onChangeText={onChangeText}
                        value={text}
                        className='border border-slate-200 w-[50%] h-[3rem] p-3 mr-1 rounded-2xl flex justify-center items-center'
                    />
                    <Text onPress={hideModal}>
                        <Entypo name="cross" size={24} color="black" />
                    </Text>
                </View>

                {children}

            </Modal>
        </Portal>

    )
}

const containerStyle = {
    backgroundColor: 'white',
    padding: 10,
    width: 90 + '%',
    height: 70 + '%',
    marginLeft: 20,
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'center',
    gap: 5,
    borderRadius: 10,
    overflow: 'hidden'
};