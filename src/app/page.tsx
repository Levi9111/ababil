import Image from 'next/image';
import homepageHero from '../../public/assets/homepage-hero.jpeg';
import runnerFranchise from '../../public/assets/runner-franchise.jpg';
import giftSite from '../../public/assets/shoe-gift-site.jpeg';
import treeTopper from '../../public/assets/tree-topper.jpg';
import augustCore from '../../public/assets/august-core.jpg';

import { Luxurious_Roman } from 'next/font/google';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { pacificoFont } from '@/components/Navbar/Navbar';
const romanFont = Luxurious_Roman({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-roman',
});

const data = [
  {
    title: 'Wool Runner Go',
    text: 'Sublimely Soft, Everyday Elevated',
    imgSrc: runnerFranchise,
  },
  {
    title: 'Wool Runner Mizzle',
    text: 'Weather-ready, Everyday Sneaker',
    imgSrc: giftSite,
  },
  {
    title: 'Tree Topper',
    text: 'Breezy High-Top Sneakers',
    imgSrc: treeTopper,
  },
];

const HomePage = () => {
  return (
    <>
      {/* Hero */}
      <div className='relative mt-14'>
        <div className='grid grid-cols-2 gap-[2px] '>
          <Image
            src={homepageHero}
            alt='Homepage Hero'
            height={500}
            width={500}
            className='w-full h-[600px]'
          />

          <Image
            src={homepageHero}
            alt='Homepage Hero'
            height={500}
            width={500}
            className='w-full h-[600px]'
          />
        </div>{' '}
        <div className='absolute top-2 right-3 flex flex-col items-end gap-3  text-white'>
          <h2 className={cn('text-7xl font-light', romanFont.className)}>
            Protected
          </h2>
          <h3 className='uppercase block text-4xl font-light'>By Nature</h3>
        </div>
        <div className='absolute bottom-5 right-3 flex flex-col items-end'>
          <h3 className='text-xl text-white uppercase font-light mb-5'>
            The new product colletion is here
          </h3>

          <button className='custom-btn'>
            <Link href='/shop'>Shop Now</Link>
          </button>
        </div>
      </div>

      {/* product grid */}
      <div className='px-6 py-6 grid grid-cols-3 gap-2'>
        {data.map((item) => (
          <div className='relative overflow-hidden group' key={item.title}>
            <Image
              src={item.imgSrc}
              alt={item.title}
              height={200}
              width={200}
              className='w-full h-[450px] hover:scale-110 transition-all duration-200'
            />

            <div className='absolute top-12 left-0 right-0 flex flex-col items-center'>
              <h3 className='text-white text-xl font-bold mb-3'>
                {item.title}
              </h3>
              <p className='text-white'>{item.text}</p>

              <button className='custom-btn absolute top-80 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                <Link href='/shop'>Shop Now</Link>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* announce */}
      <div className='relative'>
        <div className='h-[350px] w-full overflow-hidden '>
          <Image
            src={augustCore}
            alt='Core'
            width={1000}
            height={800}
            className='w-full'
          />
        </div>
        <h3 className='text-2xl font-semibold text-white uppercase z-20 absolute top-12 left-0 right-0 text-center'>
          We Make Better Things In A Better Way
        </h3>
        <p className='text-[18px] text-white z-20 absolute top-36 left-0 right-0 text-center'>
          By looking to the best innovators, we create products that deliver{' '}
          <span className='mt-2 block'>
            {' '}
            unrivaled comfort you feel good in and feel good about.
          </span>
        </p>

        <h2
          className={cn(
            'text-3xl font-extralight italic text-white absolute bottom-12 left-0 right-0 text-center',
            pacificoFont.className,
          )}
        >
          <Link href='/'>ababil</Link>
        </h2>
      </div>
    </>
  );
};

export default HomePage;
