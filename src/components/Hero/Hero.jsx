import React from 'react'
import Image1 from '../../assets/hero/women.png'
import Image2 from '../../assets/hero/shopping.png'
import Image3 from '../../assets/hero/sale.png'

const imageList = [
    {
        id: 1,
        img: Image1,
        title: "Upto 50% off on all Men's Wear",
        description: "Duis pariatur veniam adipisicing nulla. Consequat reprehenderit et eu excepteur cupidatat cillum occaecat ea Lorem aliquip do. Est labore culpa voluptate laborum duis.Aliqua consequat aliquip ullamco aliquip esse adipisicing do proident in veniam.",
    },

    {
        id: 2,
        img: Image2,
        title: "Upto 30% off on all Women's Wear",
        description: "Duis pariatur veniam adipisicing nulla. Consequat reprehenderit et eu excepteur cupidatat cillum occaecat ea Lorem aliquip do. Est labore culpa voluptate laborum duis.Aliqua consequat aliquip ullamco aliquip esse adipisicing do proident in veniam.",
    },

    {
        id: 3,
        img: Image3,
        title: "Upto 70% off on all Products Sale",
        description: "Duis pariatur veniam adipisicing nulla. Consequat reprehenderit et eu excepteur cupidatat cillum occaecat ea Lorem aliquip do. Est labore culpa voluptate laborum duis.Aliqua consequat aliquip ullamco aliquip esse adipisicing do proident in veniam.",
    },

]

const Hero = () => {
  return (
    <div className='relative overflow-hidden min-h-[550px] sm:min-h-[650px] gb-gray-100 
    flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200'>
        {/*Background Pattern*/}
        <div className='h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9'>
        </div>
      {/*Hero Selection*/}
        <div className='container pb-8 sm:pb-0 '>
            <div>
                <div className='grid grid-cols-1 sm:grid-cols-2 '>
                    {/*Text Content section*/}
                    <div>
                        <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold '>Lorem, ipsum dolor.</h1>
                        <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, dignissimos.</p>
                        <div>
                            <button className='bg-gradient-to-r from-primary to-secondary hover:scale-105 
                            duration-200  py-2 px-4 rounded-full '>
                                Order Now
                            </button>
                        </div>
                    </div>
                    {/*Image section*/}
                    <div>
                        <img src="" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero
