import Image from "next/image"
import styles from './BannerImage.module.scss'
interface BannerImageProps {
  imageUri: string,
  title?: React.ReactNode
}
export const BannerImage:React.FC<BannerImageProps> = ({imageUri, title}) => {

  return (
    <>
      <section className="w-full">
        {
          title && (<div className='mt-12 mb-8 text-center'>{ title }</div>)
        }
        <div className={`${styles.bg_image} image-container flex flex-col`}>
          <Image
            src={imageUri}
            fill
            className="image-responsive"
            alt="banner"
          />
        </div>
      </section>
    </>
  )
}