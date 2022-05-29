import React from 'react'
// import styles from '../styles/style.scss'

function Links() {
  return (
    <div className='flex flex-row m-5 justify-center items-center text-yellow-400 '>
        <ul className="w-60">
          <a target="_blank" rel="noreferrer" href="https://www.tiktok.com/@pistore.official">
            <li className="hover:text-gray-300 flex justify-center w-full border-2 mb-2 py-2 rounded">
                <i className='mr-1 bi bi-tiktok'></i> Tiktok
            </li>
          </a>
          <a target="_blank" rel="noreferrer" href="https://www.instagram.com/pistore.official/">
            <li className="hover:text-gray-300 flex justify-center w-full border-2 mb-2 py-2 rounded">
                <i className='mr-1 bi bi-instagram'></i> Instagram
            </li>
          </a>
          <a target="_blank" rel="noreferrer" href="https://web.facebook.com/pistore.official/">
            <li className="hover:text-gray-300 flex justify-center w-full border-2 mb-2 py-2 rounded">
                <i className='mr-1 bi bi-facebook'></i> Facebook
            </li>
          </a>
          <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UCImI3JHnCmim6BUPIOxPXnw/">
            <li className="hover:text-gray-300 flex justify-center w-full border-2 mb-2 py-2 rounded">
                <i className='mr-1 bi bi-youtube'></i> Youtube
            </li>
          </a>
        </ul>
    </div>
  )
}

export default Links