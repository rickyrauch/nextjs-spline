

'use client'
 
import { useEffect } from 'react'
import Spline from '@splinetool/react-spline';

export default function Example() {
  useEffect(() => {
    console.log('in useEffect')
  })
  return     <Spline scene="https://prod.spline.design/NIPW5fd1nsLmLfC7/scene.splinecode" />
}