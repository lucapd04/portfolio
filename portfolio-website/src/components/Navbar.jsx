import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Logo from '../assets/images/logo.png'

const navigation = [
  { name: 'About', href: '#', current: true },
  { name: 'Projects', href: '#', current: false },
  { name: 'Resume', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="fixed left-0 right-0 top-0 z-50">
      <div className="bg-black py-4 backdrop-filter 
                backdrop-blur-md bg-opacity-60 px-2 sm:px-6 lg:px-8 shadow-lg">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block h-8 w-8 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden h-8 w-8 group-data-[open]:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch">
            <div className="flex flex-shrink-0 items-center">
              <img
                alt="Your Company"
                src={Logo}
                className="h-8 w-auto"
              />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4 text-white">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current ? 'underline' : 'hover:underline',
                      'rounded-md px-3 py-2 text-sm text-xl rubik-subtitle font-bold',
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden mx-auto overflow-hidden">
        <div className="space-y-1 py-2 bg-black py-4 backdrop-filter 
                backdrop-blur-md bg-opacity-60 shadow-lg">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? 'bg-zinc-900 text-white backdrop-filter backdrop-blur-md bg-opacity-60 shadow-lg' : 'text-gray-300 hover:bg-zinc-800 hover:text-white',
                'block w-full px-3 py-2 text-base font-medium text-left'
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}
