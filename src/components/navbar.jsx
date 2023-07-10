import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { BsFillPersonFill } from "react-icons/Bs";

const navigation = [
   { name: 'Beranda', href: '#', current: true },
   { name: 'Program', href: '#', current: false },
   { name: 'Butuh Bantuan?', href: '#', current: false },
]

function classNames(...classes) {
   return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
   return (
      <Disclosure as="nav" className="bg-black">
         {({ open }) => (
            <>
               <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-20">
                  <div className="relative flex h-20 items-center justify-between">
                     <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        {/* Mobile menu button*/}
                        <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                           <span className="sr-only">Open main menu</span>
                           {open ? (
                              <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                           ) : (
                              <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                           )}
                        </Disclosure.Button>
                     </div>
                     <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex flex-shrink-0 items-center mr-4">
                           <img
                              className="block h-10 w-auto lg:hidden"
                              src="https://www.kemdikbud.co.id/blog/wp-content/uploads/2022/08/LOGO-TUT-WURI-HANDAYANI-1-1024x1024.webp"
                              alt="Your Company"
                           />
                           <img
                              className="hidden h-10 w-auto lg:block"
                              src="https://www.kemdikbud.co.id/blog/wp-content/uploads/2022/08/LOGO-TUT-WURI-HANDAYANI-1-1024x1024.webp"
                              alt="Your Company"
                           />
                        </div>
                        <div className="flex flex-shrink-0 items-center">
                           <img
                              className="block h-10 w-auto lg:hidden"
                              src="https://unair.ac.id/wp-content/uploads/2021/03/AgHuw28Oq5ZQ4DuEl8LZyXfCgBHnSigOUrLR5Yxh-1024x546.png"
                              alt="Kampus Merdeka"
                           />
                           <img
                              className="hidden h-10 w-auto lg:block"
                              src="https://unair.ac.id/wp-content/uploads/2021/03/AgHuw28Oq5ZQ4DuEl8LZyXfCgBHnSigOUrLR5Yxh-1024x546.png"
                              alt="Kampus Merdeka"
                           />
                        </div>
                     </div>
                     <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

                        <div className="hidden sm:ml-6 sm:block">
                           <div className="flex space-x-4">
                              {navigation.map((item) => (
                                 <a
                                    key={item.name}
                                    href={item.href}
                                    className={classNames(
                                       item.current ? ' text-white' : 'text-white hover:bg-gray-700 hover:text-white',
                                       'rounded-md px-3 py-3 text-lg font-semibold'
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                 >
                                    {item.name}
                                 </a>
                              ))}
                              <div className='bg-white rounded-3xl pt-3.5 pr-4 pl-4 flex h-12'>
                                 <BsFillPersonFill className='mr-3 w-5 h-5 fill-gray-400' />
                                 <p className='text-sm font-bold'>Masuk ke Akun</p>
                              </div>
                           </div>

                        </div>
                     </div>
                  </div>
               </div>

               <Disclosure.Panel className="sm:hidden">
                  <div className="space-y-1 px-2 pb-3 pt-2">
                     {navigation.map((item) => (
                        <Disclosure.Button
                           key={item.name}
                           as="a"
                           href={item.href}
                           className={classNames(
                              item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                              'block rounded-md px-3 py-2 text-base font-medium'
                           )}
                           aria-current={item.current ? 'page' : undefined}
                        >
                           {item.name}
                        </Disclosure.Button>
                     ))}
                  </div>
               </Disclosure.Panel>
            </>
         )}
      </Disclosure>
   )
}
