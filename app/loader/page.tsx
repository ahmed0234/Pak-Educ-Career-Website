'use client'

import { motion } from "framer-motion"

export default function Loading() {
  return (
    <div className="container min-h-screen w-full flex flex-col items-center justify-center bg-zinc-950">
      {/* Main loader container */}
      <motion.div
        className="relative"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Outer rotating ring */}
        <motion.div
          className="w-24 h-24 rounded-full border-t-4 border-r-4 border-yellow-400/50"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Inner rotating ring */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-16 h-16 -mt-8 -ml-8 rounded-full border-t-4 border-l-4 border-pink-500/50"
          animate={{ rotate: -360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Center dot */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-4 h-4 -mt-2 -ml-2 bg-yellow-300 rounded-full"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        />
      </motion.div>

      {/* Loading text */}
      <motion.div
        className="mt-8 text-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h2 className="text-2xl font-bold bg-gradient-to-r from-yellow-500 to-pink-500 bg-clip-text text-transparent">
          Loading
        </h2>
        <motion.div
          className="text-yellow-500/80 mt-2"
          animate={{ opacity: [1, 0.5, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          Please wait while we prepare your content
        </motion.div>
      </motion.div>
    </div>
  )
}