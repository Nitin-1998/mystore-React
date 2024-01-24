import React from 'react'

const BrowsButton = ({title,btnBgColor,btnTxtColor}) => {
  return (
    <>
        <button className={`${btnBgColor} ${btnTxtColor} px-8 py-2 rounded-2xl mt-2 hover:scale-105 transition duration-200  `}>{title}</button>
    </>
  )
}

export default BrowsButton