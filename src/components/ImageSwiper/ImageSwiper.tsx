// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

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
  margin = '40px -20px',
}: ImageSwiperProps): JSX.Element => (
  <Swiper
    loop={true}
    grabCursor={true}
    slidesPerView={1.2}
    spaceBetween={10}
    centeredSlides={true}
    style={{ margin }}
  >
    {images.map((image) => (
      <SwiperSlide key={image} style={{ height }}>
        <img
          src={`/static/images/${image}`}
          alt={image}
          style={{
            objectFit,
            width: '100%',
            height: '100%',
          }}
        />
      </SwiperSlide>
    ))}
  </Swiper>
)
