import Image from 'next/image';

import { GridContainer } from './grid';


import LogoImg from '../../public/logo.svg';
import SearchIcon from '/public/icon-search.svg';
import IconUser from '/public/icon-user.svg';


import Link from 'next/link';

const arrayMenu = [
    'Início',
    'Benefícios',
    'Para quém é o curso?',
    'Sobre nós'

]


export function Header() {
    const activedStyled = 'bg-green-actived rounded-full text-opacity-100';
    return (
        <header className='relative h-24 bg-green-primary flex items-center ' >
            <GridContainer className='flex items-center justify-evenly' >
                <Image src={LogoImg} alt='logo' />
                <div>

                </div>
                <div className='flex items-center gap-20'>
                    <nav className='flex gap-3' >
                        {
                            arrayMenu.map((item, index) => (
                                <Link href="#" key={index} className={`px-3 py-1 text-white text-opacity-40
                                    hover:text-opacity-100 transition-all ${index === 0 ? activedStyled : ''} `} >{item}</Link>
                            ))
                        }
                    </nav>
                    <div className='flex items-center gap-6 ' >
                        <button>
                            <Image src={SearchIcon} alt="search icon" />
                        </button>
                        <button className='flex items-center gap-2' >
                            <Image src={IconUser} alt="icon user" />
                            <span className='text-white font-medium' >Fazer login</span>
                        </button>
                    </div>
                </div>
            </GridContainer>
        </header>
    );
}
