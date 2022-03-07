import React from 'react'
import { LinkIcon, LocationMarkerIcon } from '@heroicons/react/solid';

const Menu = () => {
  return (
    <section className="showcase">
    <div className="overlay flex flex-col items-center justify-center text-white px-5">
    <div className='h-screen flex flex-col justify-center items-center'></div>
    <section className="dark:bg-coolGray-800 dark:text-coolGray-100">
	<div className="container mx-auto flex flex-col p-6">
		<h2 className="py-5 text-center lg:text-9xl md:text-7xl sm:text-5xl text-3xl font-black mb-14 scroll-p-1.5">Acitivities</h2>
		<div className="divide-y divide-coolGray-700 ">
			<div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
				<div className="flex items-center justify-center lg:col-span-1 col-span-full">
				<svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" 
				strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" /></svg>
				</div>
				<div className="flex flex-col justify-center mx-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
					<span className="text-xs tracking-wider uppercase dark:text-sky-400">Step 1 - guided tour</span>
					<span className="text-xl font-bold md:text-2xl">Best Walking Tour</span>
					<span className="mt-4 dark:text-coolGray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam facilis, voluptates error alias dolorem praesentium sit soluta iure incidunt labore explicabo eaque, quia architecto veritatis dolores, enim cons equatur nihil ipsum.</span>
				</div>
			</div>
			<div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
				<div className="flex items-center justify-center lg:col-span-1 col-span-full">
				<svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
				d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" /></svg>
				</div>
				<div className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
					<span className="text-xs tracking-wider uppercase dark:text-sky-400">Step 2 - Camping</span>
					<span className="text-xl font-bold md:text-2xl">Great Camping Facilities</span>
					<span className="mt-4 dark:text-coolGray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam facilis, voluptates error alias dolorem praesentium sit soluta iure incidunt labore explicabo eaque, quia architecto veritatis dolores, enim cons equatur nihil ipsum.</span>
				</div>
			</div>
			<div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
				<div className="flex items-center justify-center lg:col-span-1 col-span-full">
				<svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
				d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
				d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
				</div>
				<div className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
					<span className="text-xs tracking-wider uppercase dark:text-sky-400">Step 3 - Spotting</span>
					<span className="text-xl font-bold md:text-2xl">The most beatiful</span>
					<span className="mt-4 dark:bg-coolGray-800 dark:text-coolGray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam facilis, voluptates error alias dolorem praesentium sit soluta iure incidunt labore explicabo eaque, quia architecto veritatis dolores, enim cons equatur nihil ipsum.</span>
				</div>
			</div>
			</div>
		</div>
  </section>
</div>
</section>
  )
}

export default Menu
