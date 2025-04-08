import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { HiMenuAlt3 } from "react-icons/hi";
import Logo from '../../assets/Images/AceLogo.png'
import { Link } from 'react-router-dom';

const navigation = [
  { name: 'About us', href: '/about', },
  { name: 'Products', href: '/products'},
  { name: 'Product Enquiry', href: '/ProductEnquire' },
  { name: 'Contact Us', href: '/contact' },
  { name: 'Dashboard', href: '/dashboard' },
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
          {/* Mobile Menu Button */}
          <Link to="/">  <div className=" flex flex-1 md:items-center lg:justify-start gap-1">
            <img src={Logo} alt="Company Logo" className="h-10 pl-2 xl:h-10" />
           <span className=" mt-3  flex text-sm sm:text-base md:mt-1  font-semibold md:font-normal md:text-[15px] xl:font-semibold">ACE <span className='md:hidden'>.in</span> <span className='hidden ml-2 md:block'>Software Solutions Pvt. Ltd</span></span>
          </div>
          </Link> 
          <Link to="/contact" className='lg:hidden font-bold text-[12px] px-1 rounded bg-black text-white py-1 items-center ml-40 sm:ml-70'>Book A Demo</Link>
          <div className="flex items-center lg:hidden md:justify-end">
            <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 gap-3 text-gray-600 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white">
              <HiMenuAlt3 className="block justify-end size-6 group-data-open:hidden font-black" aria-hidden="true"/>
              <XMarkIcon className="hidden size-6 group-data-open:block" aria-hidden="true" />
            </DisclosureButton>
          </div>

       
          

          {/* Desktop Navigation */}
          <div className="hidden md:hidden lg:block">
            <div className="flex space-x-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : ' hover:bg-gray-900 hover:text-white',
                    'rounded-md px-2 py-2 text-10 font'
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <DisclosurePanel className="lg:hidden absolute bg-white w-full z-50">
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
      </DisclosurePanel>
    </Disclosure>
   </div>
  )
}
