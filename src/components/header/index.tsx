import ButtonPrimary from '../button'

const Header = () => {
  return (
    <header className='bg-gray-900'>
      <nav className='flex justify-between'>
        <div className='pl-[150px]'>
          <ul className='flex gap-2 py-6 text-white'>
            <li className='pr-[44px] text-[14px]'>
              <a>
                Features
              </a>
            </li>
            <li className='pr-[44px] text-[14px]'>
              <a>
                Business
              </a>
            </li>
            <li className='pr-[24px] text-[14px]'>
              <a>
                Education
              </a>
            </li>
            <li className='pr-[165px] text-[14px]'>
              <a>
                Resources
              </a>
            </li>
          </ul>
        </div>
        <div className='flex items-center gap-2 pr-10'>
          <ButtonPrimary
            bg='bg-Light_Lightness_Yellow_0'
            fill
            content='Upgrade'
            icon='icon-lightning'
          />
          <ButtonPrimary
            bg='bg-Light_Lightness_Purple_0'
            fill
            content='Create Quiz'
            icon='icon-plus'
          />
          <ButtonPrimary
            fill={false}
            content='My Library'
            icon='icon-book'
          />
          <ButtonPrimary
            fill
            icon='icon-profile'
            bg='bg-Light_Lightness_Purple_0'
            fullRadius
          />
        </div>
      </nav>
    </header>
  )
}

export default Header