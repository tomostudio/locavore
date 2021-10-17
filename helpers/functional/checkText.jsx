import { useState, useEffect } from 'react'

export function checkText(text, font) {
  const [checkWidth, setWidth] = useState(false)

  useEffect(() => {
    const canvas = document.createElement('canvas')
    const context = canvas.getContext('2d')

    context.font = font

    setWidth(context.measureText(text).width + 60)
  }, [checkWidth])

  return checkWidth
}
