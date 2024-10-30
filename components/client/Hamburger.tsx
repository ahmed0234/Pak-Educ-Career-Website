'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/navigation'

interface DropdownItem {
  name: string
  link: string
}

interface NavItem {
  name: string
  dropdownItems: DropdownItem[]
}

export default function HamburgerSidebar() {
  const [isOpen, setIsOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const router = useRouter()

  const toggleSidebar = () => setIsOpen(!isOpen)

  const toggleDropdown = (name: string) => {
    setOpenDropdown(prev => (prev === name ? null : name))
  }

  const handleItemClick = (link: string) => {
    router.push(link)
    setIsOpen(false)
  }

  const sidebarVariants = {
    open: { x: 0 },
    closed: { x: '-100%' },
  }

  const navItems: NavItem[] = [
    {
      name: 'Cities',
      dropdownItems: [
        { name: 'Islamabad', link: '/city/Islamabad' },
        { name: 'Rawalpindi', link: '/city/Rawalpindi' },
        { name: 'Lahore', link: '/city/Lahore' },
        { name: 'Karachi', link: '/city/Karachi' },
        { name: 'Faislabad', link: '/city/Faislabad' },
        { name: 'Multan', link: '/city/Multan' },
        { name: 'Peshawar', link: '/city/Peshawar' },
      ],
    },
    {
      name: 'Programs',
      dropdownItems: [
        { name: 'BS', link: '/programs/bsPrograms' },
        { name: 'BS 5th Semester', link: '/programs/bs5thPrograms' },
        { name: 'ADP', link: '/programs/adpPrograms' },
        { name: 'MPhil', link: '/programs/mphilPrograms' },
        { name: 'PhD', link: '/programs/phdPrograms' },
        { name: 'Diploma', link: '/programs/diplomaPrograms' },
      ],
    },
    {
      name: 'Sector',
      dropdownItems: [
        { name: 'Govt', link: '/sector/Government' },
        { name: 'Semi Govt', link: 'Semi%20Government' },
        { name: 'Private', link: '/sector/Private' },
      ],
    },
    {
      name: 'Province',
      dropdownItems: [
        { name: 'Punjab', link: '/province/Punjab' },
        { name: 'Sindh', link: '/province/Sindh' },
        { name: 'KPK', link: '/province/KPK' },
        { name: 'AJK', link: '/province/AJK' },
        { name: 'Balochistan', link: '/province/Balochistan' },
      ],
    },
  ]

  return (
    <div className=" lg:hidden">
      {/* Hamburger Button */}
      <button
        onClick={toggleSidebar}
        className="p-2 rounded-md bg-white shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label="Toggle Sidebar"
      >
        <div className="w-6 h-5 flex flex-col justify-between">
          <span className={`w-full h-0.5 bg-gray-600 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
          <span className={`w-full h-0.5 bg-gray-600 transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-full h-0.5 bg-gray-600 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </div>
      </button>

      {/* Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={sidebarVariants}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-40 overflow-y-auto"
          >
            <nav className="p-4">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Menu</h2>
              <ul className="space-y-2">
                {navItems.map((item, index) => (
                  <li key={index}>
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className="w-full flex items-center justify-between text-gray-700 hover:text-blue-500 transition-colors duration-200 py-2"
                    >
                      <span className="text-lg">{item.name}</span>
                      <svg
                        className={`w-4 h-4 transition-transform duration-200 ${
                          openDropdown === item.name ? 'transform rotate-180' : ''
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <AnimatePresence>
                      {openDropdown === item.name && (
                        <motion.ul
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="ml-4 mt-2 space-y-2"
                        >
                          {item.dropdownItems.map((subItem, subIndex) => (
                            <motion.li
                              key={subIndex}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: subIndex * 0.1 }}
                            >
                              <button
                                onClick={() => handleItemClick(subItem.link)}
                                className="block w-full text-left text-gray-600 hover:text-blue-500 transition-colors duration-200"
                              >
                                {subItem.name}
                              </button>
                            </motion.li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-30"
            onClick={toggleSidebar}
          ></motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}