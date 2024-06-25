import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"


export default function InstagramSidebarSlider() {
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
                    <SwiperSlide className="sidePost__item" style={{ backgroundImage: 'url("/assets/img/category/side_postwhite.png")', width: 300, height: 420 }}>
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
                    background-size: cover;
                    background-position: center;
                    width: 100%;
                    height:500px; /* Set a height for the slides */
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
