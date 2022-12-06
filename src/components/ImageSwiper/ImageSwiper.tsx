// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

export type ImageSwiperProps = {
  images: string[]
  objectFit?: 'cover' | 'contain'
}

export const ImageSwiper = ({
  images,
  objectFit = 'cover',
}: ImageSwiperProps): JSX.Element => (
  <Swiper
    loop={true}
    grabCursor={true}
    slidesPerView={1.2}
    spaceBetween={10}
    centeredSlides={true}
    style={{ margin: '40px -20px' }}
  >
    {images.map((image) => (
      <SwiperSlide key={image}>
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
