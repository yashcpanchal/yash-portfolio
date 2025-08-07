import "./Skills.css";
import skillsData from "../Data/SkillsData.js";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

function Skills() {
    return (
        <div>
            <h2>Skills</h2>
            <section id="skills" className='skills'>
                <Swiper
                    // Swiper modules
                    modules={[Navigation]}
                    
                    // --- Core settings that apply to all screen sizes ---
                    loop={true} 
                    centeredSlides={true}
                    speed={800} 
                    navigation={true}
                    loopAdditionalSlides={1} // Prevents blank spaces when looping

                    // --- Default Settings (for Small Screens) ---
                    // This creates the "one page + edge of container" display.
                    slidesPerView={1.3}
                    spaceBetween={15}
                    
                    // --- Responsive Settings (for Larger Screens) ---
                    // This object overrides the default settings on wider screens.
                    breakpoints={{
                        // When screen width is 1350px or more, render the 3-page carousel.
                        1350: {
                            slidesPerView: 3,
                            spaceBetween: 30
                        }
                    }}
                    
                    className="mySwiper"
                >
                    {skillsData.map((skill, index) => (
                        <SwiperSlide key={index}>
                            <div className='skillcard'>
                                <h3>{skill.section}</h3>
                                <div className="entries">
                                    {skill.content.map((entry, idx) =>
                                        <div className="side" key={idx}>
                                            <h4>{entry.name}</h4>
                                            {entry.icon}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>
        </div>
    );
}

export default Skills;