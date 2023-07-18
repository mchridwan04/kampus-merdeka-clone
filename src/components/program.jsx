import { BsChevronDown } from 'react-icons/Bs';


const program = [
   { name: 'Kampus Mengajar', href: '#', current: true },
   { name: 'Magang Bersertifikat', href: '#', current: false },
   { name: 'Studi Ideoendent Bersertifikat', href: '#', current: false },
   { name: 'Pertukaran Mahasiswa Merdeka', href: '#', current: false },
   { name: 'Program Lainnya', href: '#', current: false },
]
function classNames(...classes) {
   return classes.filter(Boolean).join(' ')
}

export default function Program() {
   return (
      <>
         <div className='bg-white'>
            <div className='mx-auto max-w-7xl px-2 sm:px-2 lg:px-20'>
               <div className="">
                  <div className="hidden sm:ml-6 sm:block ">
                     <div className="flex space-x-2">
                        {program.map((item, index) => (
                           <a
                              key={item.name}
                              href={item.href}
                              className={classNames(
                                 item.current ? ' text-black font-bold hover:text-blue-600 hover:bg-gray-600/10'
                                    : 'hover:bg-gray-600/10 hover:text-blue-600',
                                 ' px-3 py-3 text-lg font-semibold flex items-center pr-10'
                              )}
                              aria-current={item.current ? 'page' : undefined}
                           >
                              {item.name}
                              {index !== program.length - 1 && (
                                 <BsChevronDown className='h-5 w-5 items-center ' /> // Add the arrow-down icon for all items except the last one
                              )}
                           </a>
                        ))}
                        <div />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}
