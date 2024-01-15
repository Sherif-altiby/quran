import React from 'react'
import Azkar from './Azkar'
import { data } from '../Data/AzkarAlnoumData'
import { useMainContext } from '../../Context/MainContext'

const AzkarSleep = () => {
  const { theme } = useMainContext()
  return (
    <div className={`praying_azkar ${theme} `} >
    <Azkar data={data} nameOfAzkar={' اذكار النوم '} />
 </div>
  )
}

export default AzkarSleep