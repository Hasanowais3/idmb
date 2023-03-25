import Image from 'next/image'
import HeaderIcon from './HeaderIcon';
import { HomeIcon, UserIcon, PhoneIcon, InformationCircleIcon} from '@heroicons/react/24/solid';


const Header = () => {
  return (
    <div className='bg-gray-700 text-gray-200 flex flex-col items-center p-6 select-none sm:flex-row justify-between'>
        <div className='flex'>
        <HeaderIcon Icon={HomeIcon}  Title="Home"/>
        <HeaderIcon Icon={UserIcon}  Title="ACCOUNT"/>
        <HeaderIcon Icon={PhoneIcon}  Title="CONTACT"/>
        <HeaderIcon Icon={InformationCircleIcon}  Title="ABOUT"/>
        </div>
        <Image
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/800px-IMDB_Logo_2016.svg.png"
        alt="idmb-logo"
        width={100}
        height={100}
        className='cursor-pointer active:brightness-110'/>
    </div>
  )
}

export default Header