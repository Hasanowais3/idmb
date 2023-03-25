import Image from 'next/image'
import React from 'react'
import HeaderIcon from './HeaderIcon';
import { HomeIcon, UserIcon, PhoneIcon, InformationCircleIcon} from '@heroicons/react/24/solid';


const Header = () => {
  return (
    <div>
        <div className=''>
        <HeaderIcon Icon={HomeIcon}  Title="Home"/>
        <HeaderIcon Icon={UserIcon}  Title="ACCOUNT"/>
        <HeaderIcon Icon={PhoneIcon}  Title="CONTACT"/>
        <HeaderIcon Icon={InformationCircleIcon}  Title="ABOUT"/>
        </div>
        <Image
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/800px-IMDB_Logo_2016.svg.png"
        alt="idmb-logo"
        width={100}
        height={100}/>
    </div>
  )
}

export default Header