import React, { useEffect } from 'react';
import aboutImg from '../assets/img/team1.png';

export default function About() {
    useEffect(() => {
        import('../assets/vendor/purecounter/purecounter_vanilla.js')
            .then(() => {
                if (window.PureCounter) {
                    new window.PureCounter();
                }
            })
            .catch(err => console.error("PureCounter load error:", err));
    }, []);

    return (
        <>
            <section id="about" className="about section">
                <div className="container section-title" data-aos="fade-up">
                    <h2>About</h2>
                    <p>ខ្ញុំជានិស្សិតវិទ្យាសាស្ត្រកុំព្យូទ័រ ដែលចូលចិត្តសិក្សាអំពីការសរសេរកូដ
                        ការអភិវឌ្ឍន៍គេហទំព័រ និងបច្ចេកវិទ្យាថ្មីៗ។ ខ្ញុំតែងតែខិតខំអភិវឌ្ឍជំនាញ
                        និងបង្កើតគម្រោងជាក់ស្តែង ដើម្បីដោះស្រាយបញ្ហាដោយប្រើបច្ចេកវិទ្យា។</p>
                </div>

                <div className="container" data-aos="fade-up" data-aos-delay="100">
                    <div className="row gy-4 justify-content-center">
                        <div className="col-lg-4">
                            <img src={aboutImg} className="img-fluid" alt="Profile" />
                        </div>
                        <div className="col-lg-8 content">
                            <h2>UI/UX Designer &amp; Web Developer.</h2>
                            <p className="fst-italic py-3">
                                ខ្ញុំជានិស្សិតជំនាញវិទ្យាសាស្ត្រកុំព្យូទ័រ ដែលមានចំណង់ចំណូលចិត្តក្នុងការអភិវឌ្ឍគេហទំព័រ និងសរសេរកម្មវិធី។
                                ខ្ញុំតែងតែខិតខំសិក្សាបច្ចេកវិទ្យាថ្មីៗ អនុវត្តគម្រោងជាក់ស្តែង និងអភិវឌ្ឍជំនាញរបស់ខ្លួន
                                ដើម្បីក្លាយជាអ្នកអភិវឌ្ឍកម្មវិធីប្រកបដោយវិជ្ជាជីវៈ។
                            </p>
                            <div className="row">
                                <div className="col-lg-6">
                                    <ul>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>23 វិច្ឆិការ 2003</span></li>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span>www.narrat.com</span></li>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+88596 2732305</span></li>
                                        <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Phnom Penh, Cambodia</span></li>
                                    </ul>
                                </div>
                                <div className="col-lg-6">
                                    <ul>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>22</span></li>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Bachelor</span></li>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>narrat401@gmail.com</span></li>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section id="stats" className="stats section">
                <div className="container" data-aos="fade-up" data-aos-delay="100">
                    <div className="row gy-4">
                        <div className="col-lg-3 col-md-6">
                            <div className="stats-item">
                                <i className="bi bi-emoji-smile"></i>
                                <span className="purecounter" data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1">0</span>
                                <p><strong>Happy Clients</strong></p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="stats-item">
                                <i className="bi bi-journal-richtext"></i>
                                <span className="purecounter" data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1">0</span>
                                <p><strong>Projects</strong></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}