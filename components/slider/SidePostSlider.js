import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation, Pagination } from "swiper"
import Link from "next/link"

export default function SidePostSlider() {
    return (
        <>
            <Link href="https://tix.africa/discover/dabarevent" legacyBehavior>
                <a className="swiper-link" target="_blank" rel="noopener noreferrer">
                    <Swiper
                        modules={[Autoplay, Pagination, Navigation]}
                        slidesPerView={1}
                        spaceBetween={30}
                        loop={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                            el: '.block-gallery-pagination'
                        }}
                        className="sidePost-active"
                    >
                        <SwiperSlide className="sidePost__item" style={{ backgroundImage: 'url("/assets/img/category/side_post01.jpg")', width: 300 }}>
                            <div className="sidePost__content">
                                <span className="tag"></span>
                                {/* <h5 className="title tgcommon__hover"><Link href="/blog/1">Tips for helping to make your startup a success</Link></h5> */}
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="sidePost__item" style={{ backgroundImage: 'url("/assets/img/category/side_post02.jpg")', width: 300 }}>
                            <div className="sidePost__content">
                                <span className="tag"></span>
                                {/* <h5 className="title tgcommon__hover"><Link href="/blog/1">Tips for helping to make your startup a success</Link></h5> */}
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="sidePost__item" style={{ backgroundImage: 'url("/assets/img/category/side_post03.jpg")', width: 300 }}>
                            <div className="sidePost__content">
                                <span className="tag"></span>
                                {/* <h5 className="title tgcommon__hover"><Link href="/blog/1">Tips for helping to make your startup a success</Link></h5> */}
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </a>
            </Link>
            <style jsx>{`
                .sidePost__item {
                    cursor: pointer;
                }
                .swiper-link {
                    display: block;
                    height: 100%;
                    width: 100%;
                }
            `}</style>
        </>
    )
}
