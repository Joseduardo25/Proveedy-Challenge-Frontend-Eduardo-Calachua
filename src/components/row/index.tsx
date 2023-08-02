interface RowProps {
  children: JSX.Element;
  switchPosition?: boolean;
}
const RowSection = ({children, switchPosition}:RowProps) => {
  return (
    <div className='flex w-full xl:h-[550px]'>
      {children}
    </div>
  )
}

export default RowSection