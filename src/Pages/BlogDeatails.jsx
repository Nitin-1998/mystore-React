import React from 'react'
import { useLocation } from 'react-router-dom'
import BlogComp from '../Components/BlogComponent/BlogComp'

const BlogDeatails = () => {

    const location = useLocation()
    // console.warn(location,"useLocation")

    const {data} = location.state
    // console.warn(data)

  return (
    <>
        <main className='dark:bg-slate-800 dark:text-white'>
            <div>
                <div>
                    <div>
                        {/* Image */}
                        <div>
                            <img className='w-full h-[400px] ' src={data.img} />
                            <p className='container text-gray-700 py-2 dark:text-white '>{data.date} by {data.author}</p>
                        </div>
                        
                        {/* Content */}
                        <div className='container py-10 '>
                            <p>{data.description}</p>
                        </div>
                        <div>
                            <BlogComp />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </>
  )
}

export default BlogDeatails