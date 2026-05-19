import './App.css'
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { test } from './features/configurator/configuratorSlice';
import { accessories } from './data/accessories';

const BASE_IMG_CONFIG = "./assets/images/configurateur/"

function App() {
  const dispatch = useDispatch();

  return (
    <>
    <button
      aria-label="Increment value"
      onClick={() => dispatch(test())}
    >Bouton</button>
    <img src={new URL(BASE_IMG_CONFIG + accessories.exterior.items[1].image, import.meta.url)}/>
    </>
  );
}

export default App
