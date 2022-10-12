import React from 'react'
import GymClassList from '../components/GymClassList';
import Map from '../components/Map';

export default function Landing(){
  return (
    <div className="w-[90%] mx-auto mt-8">
        <Map />
        <GymClassList />
    </div>
  )
}