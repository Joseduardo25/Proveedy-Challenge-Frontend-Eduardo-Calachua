import ButtonPrimary from '../button'

const Header = () => {
  return (
    <header className='bg-gray-900'>
      <nav className='flex justify-between'>
        <div className='pl-[195px]'>
          <ul className='flex gap-2 py-6 text-white'>
            <li>
              <a>
                Features
              </a>
            </li>
            <li>
              <a>
                Business
              </a>
            </li>
            <li>
              <a>
                Education
              </a>
            </li>
            <li>
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