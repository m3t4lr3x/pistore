import React from 'react'

function Links() {
  return (
    <div className='flex flex-row m-5 justify-center items-center text-yellow-400 '>
        <ul className="w-60">
            <li className="hover:text-gray-300 flex justify-center w-full border-2 mb-2 py-2"><i className=' mr-1 bi bi-tiktok'></i> Tiktok</li>
            <li className="hover:text-gray-300 flex justify-center w-full border-2 mb-2 py-2"><i className=' mr-1 bi bi-instagram'></i> Instagram</li>
            <li className="hover:text-gray-300 flex justify-center w-full border-2 mb-2 py-2"><i className=' mr-1 bi bi-facebook'></i> Facebook</li>
        </ul>
    </div>
  )
}

export default Links