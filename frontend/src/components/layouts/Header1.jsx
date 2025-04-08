import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { HiMenuAlt3 } from "react-icons/hi";
import Logo from '../../assets/Images/AceLogo.png'
import { Link } from 'react-router-dom';
import { IoArrowRedo } from "react-icons/io5";

const navigation = [
  { name: 'Other Products', href: '/Products' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
  return (
   <div className=' w-full z-50 '>
     <Disclosure as="nav" className="bg-white shadow-md w-full  ">
      <div className="mx-auto max-w-7xl  sm:px-6 lg:px-8 xl:px-0 ">
        <div className="flex h-16 items-center justify-between">
          <Link>  <div className=" flex flex-1 md:items-center lg:justify-start gap-1">
            <img src={Logo} alt="Company Logo" className="h-10 pl-2 xl:h-10" />
           <span className=" mt-3  flex text-sm sm:text-base md:mt-1  font-semibold md:font-normal md:text-[17px] xl:font-semibold">ACE <span className='md:hidden'>.in</span> <span className='hidden ml-2 md:block'>Software Solutions Pvt. Ltd</span></span>
          </div>
          </Link> 


          {/* Desktop Navigation */}
          <div className=" mr-5">
            <div className="flex space-x-6">
              {navigation.map((item) => (
              <Link
                  key={item.name}
                  to={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : ' bg-blue-500 text-white',
                    'rounded-md px-2 py-1 sm:py-2 text-10 font'
                  )}
                >
                 <div className='flex gap-1 text-[12px] lg:text-[14px]'> <span className='mt-0.5'><IoArrowRedo /></span>  {item.name} </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* <DisclosurePanel className="lg:hidden absolute bg-white w-full z-50">
        <div className="space-y-1 px-4 pt-2 pb-3 flex-col flex items-start">
          {navigation.map((item) => (
            
            <DisclosureButton>
            <Link
              key={item.name}
              to={item.href}
              className={classNames(
                item.current
                  ? 'bg-gray-900 text-white'
                  : 'text-gray-700 hover:bg-gray-800 hover:text-white',
                'block rounded-md px-3 py-2 text-base text-[13px]'
              )}
            >
                <span>{item.name}</span>
 
            </Link>
          </DisclosureButton>
          
          ))}
        </div>
      </DisclosurePanel> */}
    </Disclosure>
   </div>
  )
}
