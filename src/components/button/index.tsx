interface Prop{
    icon?: string,
    content?: string,
    bg?: string,
    fullRadius?: boolean,
    fill?: boolean,
}

const ButtonPrimary = ({icon, content, bg, fullRadius, fill}:Prop) => {
  return (
    <button
      className={`
        ${fill ? bg : 'bg-transparent text-white'} 
        ${fullRadius ? 'rounded-full w-[40px] flex justify-center items-center' : 'rounded-lg'}
        px-4 py-3
        `}
    >
      {
        <span className='flex items-center gap-1'>
          <i className={`${icon}`}></i>
          <p>{content}</p>
        </span>
      }
    </button>
  )
}

export default ButtonPrimary