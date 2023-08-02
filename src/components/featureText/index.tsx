import ButtonPrimary from '../button'

interface Prop {
  link: string;
  title: string;
  description: string;
  children: JSX.Element;
  buttonContent: string;
  buttonBg: string;
  styles?: string;
}

const FeatureText = ({link, title, description, children, buttonContent, buttonBg, styles}:Prop) => {
  return (
    <div className={`${styles} flex flex-col items-left w-[507px]`}>
      <a className='text-Light_Lightness_Purple_2 text-[16px]' href='#'>{link}</a>
      <h1 className='text-[33px] text-Light_Lightness_1 text-left'>
        {title}
      </h1>
      <p className='text-Light_Lightness_4 text-[18px] mt-[34px] mb-[39px] leading-8'>
        {description}
      </p>
      <div>
        {children}
      </div>
      <ButtonPrimary
      borderRadius='rounded-lg'
      fill
      content={buttonContent}
      bg={buttonBg||'bg-Light_Lightness_Purple_0'}
      fontSize='text-[16px]'
      />
    </div>
  )
}

export default FeatureText