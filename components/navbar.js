import React, { Fragment, useState } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const menuAgung = [
    { name: 'Product', href: './produk' },
    { name: 'AboutUs', href: 'aboutus' },
    { name: 'Marketplace', href: './marketplace' },
    { name: 'Admin', href: './admin' },
    { name: 'FAQ', href: './faq' }
]

export default function Navbar() {
    const [loggedIn, setLoggedIn] = useState(true)
    return (
        < Popover >
            <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
                <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
                    <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                        <div className="flex items-center justify-between w-full md:w-auto">
                            <Link href="/">
                                <a>
                                    <span className="sr-only">Workflow</span>
                                    <img
                                        alt="Workflow"
                                        className="h-8 w-auto sm:h-10"
                                        src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                                    />
                                </a>
                            </Link>
                            <div className="-mr-2 flex items-center md:hidden">
                                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                    <span className="sr-only">Open main menu</span>
                                    <MenuIcon className="h-6 w-6" aria-hidden="true" />
                                </Popover.Button>
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                        {menuAgung.map((item) => (
                            <a key={item.name} href={item.href} className="font-medium text-gray-500 hover:text-gray-900">
                                {item.name}
                            </a>
                        ))}
                        {loggedIn ?
                            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500"
                                onClick={() => setLoggedIn(false)}>
                                Log in
                            </a>
                            :
                            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500"
                                onClick={() => setLoggedIn(true)}>
                                Profile
                            </a>
                        }
                    </div>
                </nav>
            </div>

            <Transition
                as={Fragment}
                enter="duration-150 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                <Popover.Panel
                    focus
                    className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                >
                    <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="px-5 pt-4 flex items-center justify-between">
                            <div>
                                <img
                                    className="h-8 w-auto"
                                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                                    alt=""
                                />
                            </div>
                            <div className="-mr-2">
                                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                    <span className="sr-only">Close main menu</span>
                                    <XIcon className="h-6 w-6" aria-hidden="true" />
                                </Popover.Button>
                            </div>
                        </div>
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {menuAgung.map((item) => (
                                <href
                                    key={item.name}
                                    to={item.href}
                                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                                >
                                    {item.name}
                                </href>
                            ))}
                        </div>
                        <a
                            href="#"
                            className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100"
                        >
                            Log in
                        </a>
                    </div>
                </Popover.Panel>
            </Transition>
        </Popover >
    )
}