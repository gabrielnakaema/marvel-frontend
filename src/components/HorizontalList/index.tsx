import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import { NextButton } from './styles';
interface HorizontalListProps {
  listItems: React.ReactNode[];
}
SwiperCore.use([Pagination, Navigation]);

export const HorizontalList = (props: HorizontalListProps) => {
  return (
    props.listItems && (
      <Swiper
        slidesPerGroup={1}
        spaceBetween={10}
        loop={true}
        navigation={{ nextEl: '.next-nav-button' }}
        loopFillGroupWithBlank={true}
        breakpoints={{
          300: {
            slidesPerView: 1,
          },
          775: {
            slidesPerView: 2,
          },
          1180: {
            slidesPerView: 3,
          },
          1500: {
            slidesPerView: 4,
          },
        }}
      >
        {props.listItems.map((item, index) => {
          return <SwiperSlide key={index}>{item}</SwiperSlide>;
        })}
        <NextButton className="next-nav-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="2rem"
            viewBox="0 0 24 24"
            width="2rem"
            fill="transparent"
          >
            <path d="M0 0h24v24H0V0z" />
            <path
              fill="red"
              stroke="red"
              strokeWidth="1"
              d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"
            />
          </svg>
        </NextButton>
      </Swiper>
    )
  );
};
