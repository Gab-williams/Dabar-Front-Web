import Link from 'next/link'
import InstagramSidebarSlider from '../slider/InstagramSidebarSlider'
import SidePostSlider from '../slider/SidePostSlider'
import Authorside from "@/components/elements/AuthorSidebar"
import React, {useState, useEffect} from "react"
import axios from 'axios'
export default function BlogSidebar2({selectedx}) {
  const [categoryMenux, SetcategoryMenux] = useState([])
      const categoryMenu = [
        {
          title: "Business Insights",
          img:"/assets/img/category/side_category02.jpg",
          subcategories: [
            "Industry Insights",
            "Entrepreneurship",
            "Leadership & Management",
            "Global Economy",
            "Corporate Responsibility",
          ],
        },
        {
          title: "Technology Trends",
          img:"/assets/img/category/side_category01.jpg",
          subcategories: [
            "Technology & Innovation",
            "Blockchain & Cryptocurrency",
            "Artificial Intelligence & Machine Learning",
          ],
        },
        {
          title: "Marketing & Finance",
          img:"/assets/img/category/side_category09.jpg",
          subcategories: ["Marketing & Advertising", "Finance & Investment"],
        },
        {
          title: "Workplace & Culture",
          img:"/assets/img/category/side_category04.jpg",
          subcategories: [
            "Human Resources",
            "Diversity & Inclusion",
            "Career Development",
          ],
        },
        {
          title: "Productivity & Innovation",
          img:"/assets/img/category/side_category06.png",
          subcategories: ["Productivity & Tools", "Innovation Implementation"],
        },
        {
          title: "Multimedia & Events",
          img:"/assets/img/category/side_category08.png",
          subcategories: ["Events & Conferences", "Multimedia Content"],
        },
        {
          title: "Opinions & Editorials",
          img:"/assets/img/category/side_category07.png",
          subcategories: ["Opinion & Editorial"],
        },
      ];

      useEffect(()=>{
       let trendcate = document.querySelector(".trendcate")
       const changlang = async (selectedx, word) => {
        if(selectedx != '' && word != ""){
        const options = {
            method: 'POST',
            url: 'https://deepl-translator2.p.rapidapi.com/translate',
            headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': '7bddd58440msh9a827296af53740p1be7eajsn6674d57991b0',
                'X-RapidAPI-Host': 'deepl-translator2.p.rapidapi.com'
            },
            data: {
                source_lang: 'EN',
                target_lang: selectedx,
                text: word
            }
        };
       try {
        let res = await axios.request(options);
        return res?.data
       } catch (error) {
          console.log(error)
       }
      
      }
      
    };
   

        const whole = async()=>{
          if (selectedx === 'GB') {
         let cate =   categoryMenu.map((item) => {
        
              return {
                title:item.title,
                img: item.img,
         
              };
          })
            SetcategoryMenux(cate);
        } else if (selectedx != 'GB') {
          let anstrendcate = await changlang(selectedx, trendcate.innerText)
          console.log("here is what i want to change", anstrendcate)
          trendcate.innerHTML =  anstrendcate != undefined?anstrendcate.data:""
          const translatedData = await Promise.all(categoryMenu.map(async (item) => {
            let title = await changlang(selectedx, item.title);
      
            return {
              title:title?title.data:item.title,
              img: item.img,
       
            };
        }));
        SetcategoryMenux(translatedData);
        
  
        }else{
          let cate =   categoryMenu.map((item) => {
        
            return {
              title:item.title,
              img: item.img,
       
            };
        })
          SetcategoryMenux(cate);
        }

        }

        whole()
      

      },[selectedx])



    return (
        <>
        
          
            <aside className="blog-sidebarb">
           
                <div className="widget sidebar-widget widget_categories ">
                    <h2 className="widget-title text-center trendcate">Trending Category</h2>
                    <ul className="list-wrap">

                        {categoryMenux.map((item, index)=>{
                            return  <li key={index}>
                            <div className="thumb"><Link  href={`/business?hello=${encodeURIComponent(item.title)}`}><img src={item.img} alt="img" /></Link></div>
                            <Link href={`/business?hello=${encodeURIComponent(item.title)}`}>{item.title}</Link>
                            
                        </li>
                        })}
                      
                        
                      
                    </ul>
                </div>
                <div className="widget sidebar-widget">
                    <SidePostSlider />
                </div>
                <div className="widget sidebar-widget">
          <h4 className="widget-title text-center">Dabar White Paper</h4>
          <div className="sidebarInsta__wrap">
          <InstagramSidebarSlider />
          {/* <div className="swiper-container sidebarInsta-active">
              
              </div> */}
            {/* <div className="sidebarInsta__top">
              <div className="sidebarInsta__logo">
                <img src="/assets/img/instagram/insta_logo.png" alt="img" />
              </div>
              <div className="sidebarInsta__info">
                <h6 className="name">
                  <Link href="#">instagram/Dabar</Link>
                </h6>
                <span className="designation">Your lens into ...</span>
              </div>
            </div> */}
            <div className="sidebarInsta__slider-wrap">
             
            </div>
            {/* <div className="sidebarInsta__bottom">
              <Link
                href="https://www.instagram.com/the.dabar/?igshid=YzAwZjE1ZTI0Zg%3D%3D"
                target="_blank"
                className="btn"
              >
                <i className="fab fa-instagram" />
                <span className="text">Follow Me</span>
              </Link>
            </div> */}
          </div>
        </div>
      </aside>
    </>
  );
}
