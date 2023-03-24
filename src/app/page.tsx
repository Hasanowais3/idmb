import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Header from '../../components/Header'
import Navbar from '../../components/Navbar'
import Result from '../../components/Result'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <section>
      <div>
        {/* Header */}
        <Header/>
        {/* navbar */}
        <Navbar/>

        {/* result */}
        <Result/>

      </div>
    </section>
    
  )
}
