import React from 'react'
import "../global.css"
import { store } from '../store'
import { Provider } from 'react-redux';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home'
import SeriesHome from './SeriesHome'
import Movie from './Movie'
import Serie from './Serie'
import Category from './Category'
import Action from './Action'
import Animation from './Animation'
import Comedy from './Comedy'
import Crime from './Crime'
import Documentary from './Documentary'
import Drama from './Drama'
import Explore from './Explore'
import { PaperProvider } from 'react-native-paper';
import Footer from '../components/Footer';

const Stack = createNativeStackNavigator();

function App() {

  return (
    <Provider store={store} >
      <PaperProvider>
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Home'>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="SeriesHome" component={SeriesHome} />
          <Stack.Screen name="Movie" component={Movie} />
          <Stack.Screen name="Serie" component={Serie} />
          <Stack.Screen name="Category" component={Category} />
          <Stack.Screen name="Explore" component={Explore} />

          {/* movies by genre */}
          <Stack.Screen name="Action" component={Action} />
          <Stack.Screen name="Animation" component={Animation} />
          <Stack.Screen name="Drama" component={Drama} />
          <Stack.Screen name="Comedy" component={Comedy} />
          <Stack.Screen name="Crime" component={Crime} />
          <Stack.Screen name="Documentary" component={Documentary} />

        </Stack.Navigator>
        <Footer/>
      </PaperProvider>
    </Provider>
  );
}

export default App

