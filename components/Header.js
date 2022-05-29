import Image from 'next/image'

function Header() {
  return (
    <header className="flex flex-col m-5 justify-between items-center">
      <Image
          src="/pistore-logo.png"
          alt="Logo PiSTORE"
          className='flex flex-row'
          width={150}
          height={150}
          priority
        />
      <h1 className="text-3xl font-bold">
      <span className='text-yellow-400'>Pi </span>STORE
      </h1>
        {/* <Image
            className="object-contain"
            src=""
            width={200}
            height={100}
        /> */}
    </header>
  )
}

export default Header;