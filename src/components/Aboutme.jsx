import React from 'react'

const Aboutme = () => {
  return (
    <div className='max-w-[1550px] mx-auto px-7'>
        <h1 data-aos="fade-zoom-in" className='text-[36px] font-bold font-roboto-mono uppercase mt-[20px] mb-[45px] text-center'>About Me</h1>
        <div className='flex justify-between max-lg:flex-col max-lg:gap-[30px] max-lg:mb-[70px]'>
            <div data-aos="fade-up" data-aos-duration="600" className='w-[31.5%] shadow-[0_0_4px_1px_rgb(0,0,0,0.15)] rounded-lg max-lg:w-[100%]'>
                <div className='flex justify-center items-center w-full bg-[#FEFEFE] border-b-[1px] border-black/25 rounded-t-lg h-[43px] relative'>
                    <div className='flex gap-[7px] absolute left-4 top-1/2 -translate-y-1/2'>
                        <div className='bg-[#F05953] aspect-square w-[12px] rounded-full'></div>
                        <div className='bg-[#F6BC2D] aspect-square w-[12px] rounded-full'></div>
                        <div className='bg-[#39C640] aspect-square w-[12px] rounded-full'></div>
                    </div>
                    <p className='text-[15px]'>Bio</p>
                </div>
                <div className='bg-[#F5F5F5] rounded-b-lg px-6 py-5'>
                    <p className='text-sm font-medium text-black/50'>Name:</p>
                    <p className='text-sm'>Christopher R. Penticostes</p>
                    <p className='text-sm font-medium text-black/50 mt-[20px]'>Address:</p>
                    <p className='text-sm'>Imus, Cavite</p>
                    <p className='text-sm font-medium text-black/50 mt-[20px]'>Description:</p>
                    <p className='text-sm text-justify'>Passionate Full Stack Web Developer with strong academic and internship experience in modern web technologies. Skilled in designing responsive user interfaces and integrating front-end with robust back-end systems using PHP, Node.js, and MySQL. Eager to contribute to innovative tech projects by delivering clean, scalable, and highperformance code. Known for being a fast learner, team player, and detail-oriented problem solver.</p>
                </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="800" className='w-[31.5%] shadow-[0_0_4px_1px_rgb(0,0,0,0.15)] rounded-lg max-lg:w-[100%]'>
                <div className='flex justify-center items-center w-full bg-[#FEFEFE] border-b-[1px] border-black/25 rounded-t-lg h-[43px] relative'>
                    <div className='flex gap-[7px] absolute left-4 top-1/2 -translate-y-1/2'>
                        <div className='bg-[#F05953] aspect-square w-[12px] rounded-full'></div>
                        <div className='bg-[#F6BC2D] aspect-square w-[12px] rounded-full'></div>
                        <div className='bg-[#39C640] aspect-square w-[12px] rounded-full'></div>
                    </div>
                    <p className='text-[15px]'>Education</p>
                </div>
                <div className='bg-[#F5F5F5] rounded-b-lg px-6 py-5'>
                    <p className='text-sm font-medium text-black/50'>School:</p>
                    <p className='text-sm'>Cavite State University - Imus Campus</p>
                    <p className='text-sm font-medium text-black/50 mt-[20px]'>Course:</p>
                    <p className='text-sm'>Bachelor of Science in Information Technology</p>
                    <p className='text-sm font-medium text-black/50 mt-[20px]'>GPA:</p>
                    <p className='text-sm'>1.45</p>
                    <p className='text-sm font-medium text-black/50 mt-[20px]'>Courses:</p>
                    <p className='text-sm text-justify'>Full Stack Web Development, Network Management, System Administration, Cybersecurity, Quality Assurance, Arduino, Multimedia, and other practices.</p>
                    <p className='text-sm font-medium text-black/50 mt-[20px]'>Award:</p>
                    <p className='text-sm'>Best Web Design (2023)</p>
                    <p className='text-sm mt-[20px] font-medium'>Expected to Graduate with Cum Laude</p>
                </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="1000" className='w-[31.5%] shadow-[0_0_4px_1px_rgb(0,0,0,0.15)] rounded-lg max-lg:w-[100%]'>
                <div className='flex justify-center items-center w-full bg-[#FEFEFE] border-b-[1px] border-black/25 rounded-t-lg h-[43px] relative'>
                    <div className='flex gap-[7px] absolute left-4 top-1/2 -translate-y-1/2'>
                        <div className='bg-[#F05953] aspect-square w-[12px] rounded-full'></div>
                        <div className='bg-[#F6BC2D] aspect-square w-[12px] rounded-full'></div>
                        <div className='bg-[#39C640] aspect-square w-[12px] rounded-full'></div>
                    </div>
                    <p className='text-[15px]'>Internship Experience</p>
                </div>
                <div className='bg-[#F5F5F5] rounded-b-lg px-6 py-5'>
                    <p className='text-sm font-medium text-black/50'>Company Name:</p>
                    <p className='text-sm'>Wellness PRO Incorporated</p>
                    <p className='text-sm font-medium text-black/50 mt-[20px]'>Position:</p>
                    <p className='text-sm'>Web Developer Intern</p>
                    <p className='text-sm font-medium text-black/50 mt-[20px]'>Address:</p>
                    <p className='text-sm'>Pasig, Metro Manila</p>
                    <p className='text-sm font-medium text-black/50 mt-[20px]'>Key Responsibilities:</p>
                    <ul className='list-disc pl-5 text-sm text-justify'>
                        <li>Built and customized a WordPress website aligned with business branding.</li>
                        <li>Collaborated with cross-functional teams on UI/UX improvements and CMS management.</li>
                        <li>Gained exposure to real-world web development workflows and team collaboration.</li>
                        <li>Strengthened communication and troubleshooting skills during client and team meetings.</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Aboutme
