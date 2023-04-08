// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference types="@welldone-software/why-did-you-render" />
import whyDidYouRender from '@welldone-software/why-did-you-render'
import React from 'react'

if (process.env.NODE_ENV === 'development') {
  if (typeof window !== 'undefined') {
    whyDidYouRender(React, {
      trackAllPureComponents: true,
    })
  }
}
