import { ReactElement } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

export type ImageSwiperProps = {
  images: string[]
  height?: string
  objectFit?: 'cover' | 'contain'
  margin?: string
}

export const ImageSwiper = ({
  images,
  height = '100%',
  objectFit = 'cover',
  margin = '20px -20px',
}: ImageSwiperProps): ReactElement => {
  if (images.length === 0) return <></>

  const singleImage = images.length === 1
  const slideHeight = height

  if (singleImage) {
    return (
      <div style={{ margin, height: slideHeight }}>
        <LazyLoadImage
          effect="blur"
          src={`/static/images/${images[0]}`}
          alt={images[0]}
          width="100%"
          height="100%"
          style={{
            objectFit,
            width: '100%',
            height: '100%',
            display: 'block',
          }}
        />
      </div>
    )
  }

  return (
    <Swiper
      loop={images.length > 1}
      grabCursor={images.length > 1}
      slidesPerView={1.2}
      spaceBetween={10}
      centeredSlides={true}
      style={{ margin }}
    >
      {images.map((image) => (
        <SwiperSlide key={image} style={{ height: slideHeight }}>
          <LazyLoadImage
            effect="blur"
            src={`/static/images/${image}`}
            alt={image}
            width="100%"
            height="100%"
            style={{
              objectFit,
            }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
