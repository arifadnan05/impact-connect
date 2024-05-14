import { FaBalanceScale, FaFemale } from "react-icons/fa"
import { FaEnvira, FaGraduationCap, FaHandHoldingMedical, FaPeopleCarryBox } from "react-icons/fa6"

const OurProgram = () => {
    return (
        <div>
            <section className="bg-white dark:bg-gray-900">
                <div className="container px-6 py-12 mx-auto">
                    <div className="flex flex-col items-center">
                        <h1 className="text-2xl font-semibold text-[#134D22] lg:text-4xl dark:text-white">Our Programs</h1>
                        <p className="mt-2 text-base text-center lg:text-2xl text-gray-500 dark:text-gray-300">We offer a range of programs focused on education, healthcare, environment, and more.</p>

                    </div>

                    <div className="grid grid-cols-1 gap-8 mt-8 lg:mt-16 md:grid-cols-2 xl:grid-cols-3">
                        <div>
                            <div className="inline-block p-3 text-white rounded-lg">
                                <span className="text-[#134D22] text-5xl"><FaGraduationCap /></span>
                            </div>

                            <div>
                                <h1 className="text-2xl font-semibold text-[#134D22] dark:text-white">Education</h1>

                                <p className="mt-2 text-base lg:text-lg text-gray-500 dark:text-gray-300">
                                    Our education programs include initiatives to improve literacy rates, support schools and teachers, and provide access to technology and resources.
                                </p>
                            </div>
                        </div>

                        <div>
                            <div className="inline-block p-3 text-white rounded-lg">
                                <span className="text-[#134D22] text-5xl"><FaHandHoldingMedical /></span>
                            </div>

                            <div>
                                <h1 className="text-2xl font-semibold text-[#134D22] dark:text-white">Healthcare</h1>

                                <p className="mt-2 text-base lg:text-lg text-gray-500 dark:text-gray-300">
                                    Our healthcare programs focus on improving access to quality care, promoting healthy behaviors, and preventing and treating diseases.
                                </p>
                            </div>
                        </div>

                        <div>
                            <div className="inline-block p-3 text-white  rounded-lg">
                                <span className="text-[#134D22] text-5xl"><FaEnvira /></span>
                            </div>

                            <div>
                                <h1 className="text-2xl font-semibold text-[#134D22] dark:text-white">Climate Change</h1>

                                <p className="mt-2 text-base lg:text-lg text-gray-500 dark:text-gray-300">
                                    Our environmental programs work to protect natural resources, promote sustainable practices, and mitigate the impact of climate change.
                                </p>
                            </div>
                        </div>

                        <div>
                            <div className="inline-block p-3 text-white rounded-lg">
                                <span className="text-[#134D22] text-5xl"><FaPeopleCarryBox /></span>
                            </div>

                            <div>
                                <h1 className="text-2xl font-semibold text-[#134D22] dark:text-white">
                                    Youth</h1>

                                <p className="mt-2 text-base lg:text-lg text-gray-500 dark:text-gray-300">
                                    We are committed to nurturing the next generation of leaders in Bangladesh. Our youth development programs provide opportunities for young people to develop their skills, gain confidence, and learn about social responsibility.
                                </p>
                            </div>
                        </div>

                        <div>
                            <div className="inline-block p-3 text-white rounded-lg">
                                <span className="text-[#134D22] text-5xl"><FaFemale /></span>
                            </div>

                            <div>
                                <h1 className="text-2xl font-semibold text-[#134D22] dark:text-white">Women</h1>

                                <p className="mt-2 text-base lg:text-lg text-gray-500 dark:text-gray-300">
                                    We believe in gender equality and are working to empower women and girls across Bangladesh. Our programs focus on promoting women rights, providing education and vocational training, and creating opportunities for economic empowerment.
                                </p>
                            </div>
                        </div>

                        <div>
                            <div className="inline-block p-3 text-white rounded-lg">
                                <span className="text-[#134D22] text-5xl"><FaBalanceScale /></span>
                            </div>

                            <div>
                                <h1 className="text-2xl font-semibold text-[#134D22] dark:text-white">Good Governance</h1>

                                <p className="mt-2 text-base lg:text-lg text-gray-500 dark:text-gray-300">
                                    We believe in the importance of good governance and are working to promote transparency, accountability, and civic engagement at all levels of society. We promote good governance and encourage civic engagement to build a better future for Bangladesh.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default OurProgram
