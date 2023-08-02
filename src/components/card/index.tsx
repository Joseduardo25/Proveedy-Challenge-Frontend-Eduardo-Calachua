import Image from 'next/image';
import chatbotImage from '../../../public/icons8-chatbot.png'
import dashboardImage from '../../../public/icons8-dashboard.png'
import quizImage from '../../../public/icons8-quiz.png'

export enum ImageType{
  check = 'check',
  info = 'info',
  robot = 'robot'
}

interface Prop{
  icon: ImageType;
  title: string;
  content: string;
}
const Card = ({icon, title, content}:Prop) => {
  const icons = {
    check:chatbotImage,
    info:dashboardImage,
    robot:quizImage,
  }

    return (
    <div className='flex flex-col gap-2 w-[293px] text-center'>
      <div className='flex items-center gap-2 justify-center pb-[17px]'>
        <div className='bg-Light_Lightness_Purple_3 h-[86px] w-[86px] flex justify-center items-center rounded-full'>
          <Image
            src={icons[icon] || ''}
            alt='icon'
            height={50}
            width={50}
          />
        </div>
        <h4 className='font-semiblod text-1x1 text-Light_Lightness_1'>{title}</h4>
      </div>
      <p className='text-Light_Lightness_4 leading-7 pb-[37px] text-start'>{content}</p>
      <span className='flex items-center gap-3 text-Light_Lightness_Purple_2'>
      <a className='text-[14px]' href='#'>Empieza aqui</a> <i className='icon-arrow-rigtht Light_Lightness_Purple_2'></i>
      </span>
    </div>
  )
}

export default Card