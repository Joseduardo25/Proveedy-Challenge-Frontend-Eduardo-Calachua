import Card, {ImageType}from '@/components/card'
import Header from '@/components/header'
import RowSection from '@/components/row'
import Image from 'next/image'
import ImageLaptop from '../../public/laptop.png'
import ImageUpInformation from '../../public/up-information.png'
import ImagePublishEasy from '../../public/publish-easy.png'
import ImagePerformance from '../../public/performance.png'
import ButtonPrimary from '@/components/button'
import FeatureText from '@/components/featureText'

export default function Home() {
  return (
    <main className="">
      <Header/>
      <section className='bg-Light_Lightness_white h-[674px]  flex items-center'>
        <RowSection>
          <>
            <div className='flex flex-col items-center w-1/2 px-8'>
              <div className='leading-10 flex flex-col gap-3'>
                <h1 className='text-4x1 text-Light_Lightness_3 text-5xl mt-[27px] mb-[21px] w-4/5'>
                  Ya no abandones los estudios por falta de tutor
                </h1>
                <p className='text-Light_Lightness_2'>Servicio de tutoria académica personalizada.</p>
                <p className='text-Light_Lightness_3 w-[508px] leading-7 w-4/5'>
                  Convierte con facilidad cualquier video, documento o 
                  URL en un curso interactivo con asistente inteligente. 
                  Perfecto para empresas, profesionales y estudiantes.
                </p>
                <a className='text-Light_Lightness_Purple_2 mt-[11px]' href="#">Potenciado por Inteligencia Artificial</a>
                <div className='mt-8 flex items-center gap-8'>
                  <ButtonPrimary
                    padding='px-2 py-0'
                    fill
                    content='Crea un tutor gratis'
                    bg='bg-Light_Lightness_Purple_0'
                    fontSize='text-[16px]'
                  />
                  <span className='text-Light_Lightness_1 text-sm'>
                    Saber más <i className='icon-arrow-rigtht'></i> 
                  </span>
                </div>
              </div>
            </div>
            <div className='w-1/2 flex justify-end relative'>
              <Image className='w-4/5 object-fit h-full absolute top-0 bottom-0 right-0' src={ImageLaptop} alt='image laptop' width={579} height={447}/>
            </div>
          </>
        </RowSection>
      </section>
      <section className='bg-Light_Lightness_5 h-[532px]'>
        <h1 className='container px-10 py-10 mx-auto text-Light_Lightness_3 text-[18px] text-center'>
          Usa Inteligencia artificial para mejorar tu aprendizaje.
        </h1>
        <div className='grid grid-cols-3 place-items-center gap-2 mt-10'>
          <Card
            icon={ImageType.info}
            title='Sube tu información'
            content='Educativa, procesa PDF, MP4, MP3. Crear tu libreria de
            documentos que alimentaran a tu tutor inteligente.'
          />
          <Card
            icon={ImageType.info}
            title='Generación de ficha'
            content='Resumen con palabras claves, puntos claves, resumen y 
            capítulos recomendados para un fácil aprendizaje.'
          />
          <Card
            icon={ImageType.info}
            title='Tutor virtual'
            content='Crea cuestionarios para facilitar el aprendizaje y responde
            en base al contenido académico generado. '
          />
          </div>
      </section>
      <section className='bg-Light_Lightness_white  pt-[128px] pb-[96px]'> 
        <RowSection>
          <>
            <div className='w-1/2'>
              <Image src={ImageUpInformation} alt='image laptop' width={536} height={536}/>
            </div>
            <FeatureText
            styles='px-[56px] w-1/2'
            link='Crea'
            title='Sube tu información fácil'
            description='Te presentamos la nueva forma de estudiar con resúmenes 
                          generados por la IA, cuestionarios lúdicos y asistentes virtuales.'
            buttonContent='Create a Quiz for Free'
            buttonBg='bg-Light_Lightness_Purple_1'
            >
              <>
                <div>
                  <span className='text-Light_Lightness_1 text-[16px]'>
                    <i className='icon-dobleArrow text-Dark_Darkness_black text-[16px] mr-[12px]'></i>Fast.
                    <p className='text-Light_Lightness_4 text-[16px] pb-[30px] leading-7'>
                      question formats. Consistently come up with new ideas 
                      and inspiration, while saving time and effort.
                    </p>
                  </span>
                  <span className='text-Light_Lightness_1 text-[16px]'>
                    <i className='icon-reload text-Dark_Darkness_black text-[16px] mr-[12px]'></i>Flexible.
                    <p className='text-Light_Lightness_4 text-[16px] pb-[35px] leading-7'>
                      in-the-blank style questions. Upload files like PDFs, 
                      DOCs, and PPTs to create quizzes and exams.
                    </p>
                  </span>
                  <span className='text-Light_Lightness_1 text-[16px]'>
                    <i className='icon-integrated text-Dark_Darkness_black text-[16px] mr-[12px]'></i>Integrated.
                    <p className='text-Light_Lightness_4 text-[16px] pb-[35px] leading-7'>
                      flashcards in a single click. Quizgecko can even 
                      generate entire quizzes from Youtube videos.
                    </p>
                  </span>
                </div>
              </>
            </FeatureText>
          </>
        </RowSection>
      </section>
      <section className='bg-Light_Lightness_white pr-[32px] py-[96px]'>
        <RowSection>
          <>
            <FeatureText
            styles='w-1/2 px-[32px]'
            link='Share & Embed'
            title='Publish with ease'
            description='Effortlessly share and embed quizzes with your team, students, 
                          or use them as study aids – get everyone engaged and enhance 
                          learning experiences in just seconds.'
            buttonContent='Create a Quiz for Free'
            buttonBg='bg-Light_Lightness_Purple_1'
            >
              <>
                <div>
                  <span className='text-Light_Lightness_1 text-[16px]'>
                    <i className='icon-share text-Dark_Darkness_black text-[16px] mr-[12px]'></i>Share.
                    <p className='text-Light_Lightness_4 text-[16px] pb-[32px] leading-7'>
                      Share quizzes effortlessly with students or colleagues.
                    </p>
                  </span>
                  <span className='text-Light_Lightness_1 text-[16px]'>
                    <i className='icon-cloud text-Dark_Darkness_black text-[16px] mr-[12px]'></i>Export.
                    <p className='text-Light_Lightness_4 text-[16px] pb-[31px] leading-7'>
                      Download as text, csv and Aiken format for seamless integration 
                      into your learning management system or classroom setting
                    </p>
                  </span>
                  <span className='text-Light_Lightness_1 text-[16px]'>
                    <i className='icon-embed text-Dark_Darkness_black text-[16px] mr-[12px]'></i>Embed.
                    <p className='text-Light_Lightness_4 text-[16px] pb-[31px] leading-7'>
                      Add quizzes in your own website, LMS or blog. Perfect for 
                      lead generation, engaging your users
                    </p>
                  </span>
                </div>
              </>
            </FeatureText>
            <div className='w-1/2 flex justify-end relative'>
              <Image  src={ImagePublishEasy} alt='image ' width={536} height={536}/>
            </div>
          </>
        </RowSection>
      </section>
      <section className='bg-Light_Lightness_white pr-[48px] pt-[112px] pb-[176px]'>
        <RowSection>
          <>
            <div className='w-1/2'>
              <Image src={ImagePerformance} alt='image laptop' width={536} height={536}/>
            </div>
            <FeatureText
            styles='w-1/2 px-[56px]'
            link='Analyze'
            title='Measure performance'
            description='Reports and stats to understand how individuals and groups performed. 
                          Auto-graded quizzes make marking a thing of the past.'
            buttonContent='Create a Quiz for Free'
            buttonBg='bg-Light_Lightness_Purple_1'
            >
              <>
                <div>
                  <span className='text-Light_Lightness_1 text-[16px]'>
                    <i className='icon-check text-Dark_Darkness_black text-[16px] mr-[12px]'></i>Auto Grading.
                    <p className='text-Light_Lightness_4 text-[16px] mb-[63px] leading-7'>
                      Intelligently evaluates and grades short answer questions, going the 
                      extra mile by offering valuable suggestions on how to improve and 
                      attain higher scores.
                    </p>
                  </span>
                </div>
              </>
            </FeatureText>
          </>
        </RowSection>
      </section>
      
    </main>
  )
}
