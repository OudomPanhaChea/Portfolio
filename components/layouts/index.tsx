import React, { Suspense } from 'react'
import Header from './Header'
import Footer from './Footer'

const ClientLayout: React.FC<{ children: React.ReactNode}> = ({ children }) => {
  return (
    <>
      <Suspense fallback={null}>
        <Header />
        {children}
        <Footer />
      </Suspense>
    </>
  )
}

export default ClientLayout
