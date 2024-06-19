import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Gallery = () => {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    const badPhotos = [
        {
            image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            image: 'https://images.unsplash.com/photo-1562663474-6cbb3eaa4d14?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            image: 'https://images.unsplash.com/photo-1586105251261-72a756497a11?q=80&w=1916&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
    ]

    const goodPhotos = [
        {
            image: 'https://images.unsplash.com/photo-1613545325278-f24b0cae1224?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            image: 'https://images.unsplash.com/photo-1600585153490-76fb20a32601?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            image: 'https://images.unsplash.com/photo-1600047509358-9dc75507daeb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            image: 'https://images.unsplash.com/photo-1628744876497-eb30460be9f6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
    ]

  return (
    <div className=' pt-10 bg-gradient-to-t' id='gallery'>
        <h1 className=' text-transparent bg-clip-text bg-gradient-to-r from-[#000000] to-[#313131] text-lg uppercase text-center font-inter  mt-5'>JAK ODPOWIEDNIO ROBIĆ ZDJĘCIA? </h1>
        <div className=''>
            <div className=' px-2 py-5'>
                <h1 className=' text-3xl font-inter font-[500] py-2 ml-10'>ŹLE</h1>
                    <Carousel
                    swipeable={true}
                    draggable={true}
                    responsive={responsive}
                    ssr={true}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={5000}
                    transitionDuration={500}
                    containerClass="carousel-container"
                    className='z-[98]'
                    >
                        {badPhotos.map((badPhoto, i)=>{
                            return(
                                <div key={i}>
                                    <div>
                                        <img src={badPhoto.image} alt="badPhoto" className=' aspect-[9/11] sm:aspect-square lg:aspect-[12/9] object-cover p-1 my-4 rounded-[40px]' />
                                    </div>
                                </div>
                            )
                        })}
                    </Carousel>
            </div>

            <div className=' px-2 py-5'>
                <h1 className=' text-3xl font-inter font-[500] py-2 ml-10'>DOBRZE</h1>
                    <Carousel
                    swipeable={true}
                    draggable={true}
                    responsive={responsive}
                    ssr={true}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={5000}
                    transitionDuration={500}
                    containerClass="carousel-container"
                    className='z-[98]'
                    >
                        {goodPhotos.map((badPhoto, i)=>{
                            return(
                                <div key={i}>
                                    <img src={badPhoto.image} alt={`badPhoto ${i+1}`} className=' aspect-[9/11] sm:aspect-square lg:aspect-[12/9]  object-cover p-1 my-4 rounded-[40px]' />
                                </div>
                            )
                        })}
                    </Carousel>
            </div>

        </div>
    </div>
  )
}

export default Gallery