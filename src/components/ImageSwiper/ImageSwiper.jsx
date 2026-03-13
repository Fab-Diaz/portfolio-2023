// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
export var ImageSwiper = function (_a) {
  var images = _a.images,
    _b = _a.height,
    height = _b === void 0 ? '100%' : _b,
    _c = _a.objectFit,
    objectFit = _c === void 0 ? 'cover' : _c,
    _d = _a.margin,
    margin = _d === void 0 ? '20px -20px' : _d
  return (
    <Swiper
      loop={true}
      grabCursor={true}
      slidesPerView={1.2}
      spaceBetween={10}
      centeredSlides={true}
      style={{ margin: margin }}
    >
      {images.map(function (image) {
        return (
          <SwiperSlide key={image} style={{ height: height }}>
            <LazyLoadImage
              effect="blur"
              src={'/static/images/'.concat(image)}
              alt={image}
              width="100%"
              height="100%"
              style={{
                objectFit: objectFit,
              }}
            />
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}
