import ButtonPrimary from '../button'

interface Prop {
  link: string;
  title: string;
  description: string;
  children: JSX.Element;
  styles?: string;
}

const FeatureText = ({link, title, description, children, styles}:Prop) => {
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
    </div>
  )
}

export default FeatureText