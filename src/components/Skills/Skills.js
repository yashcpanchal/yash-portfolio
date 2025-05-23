import "./Skills.css";
import skillsData from "../Data/SkillsData.js";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";


function Skills() {
    return (
        <div>
            <h2>Skills</h2>
                <section id="skills" className='skills'>
                    <Swiper
                        modules={[Navigation, Pagination]}
                        navigation
                        pagination={{clickable: true}}
                        spaceBetween={20}
                        slidesPerView={3}
                        loop={true}
                        breakpoints={{
                            10: { slidesPerView: 1 }, // for smaller screens
                        }}
                    >
                        {skillsData.map((skills, index) => (
                            <SwiperSlide key={index}>
                                <div className='skillcard' key={index}>
                                    <h3>{skills.section}</h3>
                                    <div className="entries">
                                        {skills.content.map((entry, index) =>
                                            <span className="side" key={index}>
                                                <h4>{entry.name}</h4>
                                                {entry.icon}
                                            </span>
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