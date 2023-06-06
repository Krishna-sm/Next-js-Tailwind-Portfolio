import React, { Suspense } from 'react'

const Footer = () => {
  return (
    <>
            <section>
                <div className="py-5 text-center dark:bg-gray-900 dark:text-white font-xl font-serif ">
                    <p>Copyright@ <Suspense fallback={null}>
                        {new Date().getFullYear()} 
                       
                        </Suspense>
                        | Krishna Bansal
                          </p>
                </div>
            </section>
    </>
  )
}

export default Footer