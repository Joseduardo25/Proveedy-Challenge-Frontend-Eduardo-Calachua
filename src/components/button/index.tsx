interface Prop{
    style?: string,
    icon?: string,
    content?: string,
    fontSize?: string,
    bg?: string,
    fullRadius?: boolean,
    fill?: boolean,
    padding?: string,
    borderRadius?: boolean,
    width?: boolean
}

const ButtonPrimary = ({style, icon, content, bg, fullRadius, fill, fontSize, padding, borderRadius, width}:Prop) => {
  return (
    <button
    className={`
    ${fill ? bg : 'bg-transparent text-white'} 
    ${fullRadius ? 'rounded-full w-[39px] flex justify-center items-center' : 'rounded-lg'}
    ${padding || 'px-4 py-3' }
    ${borderRadius ||'rounded-full'}
    ${width || 'w-[auto]'}
    ${style}
        `}
    >
      {
        <span className='flex items-center gap-1'>
          <i className={`${icon}`}></i>
          <p className={fontSize ||'text-[14px]'}>{content}</p>
        </span>
      }
    </button>
  )
}

export default ButtonPrimary