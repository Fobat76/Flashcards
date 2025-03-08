import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Flashcards from './components/Flashcards'
import pokemon from './assets/pokemons'

function App() {


  return (
    <>
      <Header/>
      <Flashcards data={pokemon}/>
    </>
  )
}

export default App
