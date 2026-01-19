import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function LazyImage({ src, alt, className = '', onLoad = () => {} }) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [error, setError] = useState(false)
  const [imageSrc, setImageSrc] = useState(src)

  useEffect(() => {
    // Preload image
    const img = new Image()
    img.onload = () => {
      setIsLoaded(true)
      onLoad()
    }
    img.onerror = () => {
      setError(true)
      setIsLoaded(true)
    }
    img.src = src
  }, [src, onLoad])

  const handleError = () => {
    setError(true)
    setIsLoaded(true)
  }

  return (
    <motion.div
      className={`relative overflow-hidden w-full h-full ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {/* Loading skeleton */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-r from-dark-light via-dark-light to-dark-lighter animate-pulse" />
      )}

      {/* Error fallback */}
      {error ? (
        <div className={`w-full h-full bg-dark-light flex items-center justify-center`}>
          <div className="text-center">
            <div className="text-3xl mb-2">📷</div>
            <p className="text-gray-400 text-sm">Image unavailable</p>
          </div>
        </div>
      ) : (
        <motion.img
          src={imageSrc}
          alt={alt}
          className={`w-full h-full object-cover`}
          onError={handleError}
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          loading="lazy"
        />
      )}
    </motion.div>
  )
}
