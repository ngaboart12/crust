import Image from 'next/image'
import { Hero } from './ui/home/Hero'
import { Whatwedo } from './ui/home/Whatwedo'
import { Ourservice } from './ui/home/Ourservice'
import { Ourworks } from './ui/home/Ourworks'
import { Ourteam, Ourteams } from './ui/home/Ourteam'
import Sayaboutus from './ui/home/Sayaboutus'
import Slider from './ui/home/Slider'
import Contactus from './ui/home/Contactus'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  justify-between w-full overflow-hidden ">
     <Hero/>
     <Whatwedo/>
     <Ourservice/>
     <Ourworks/>
     <Ourteam/>
     <Sayaboutus/>
     <Slider/>
     <Contactus/>
    </main>
  )
}
