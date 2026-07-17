import React from 'react';

export default function Resume() {
    return (
        <section id="resume" className="resume section">
            <div className="container section-title" data-aos="fade-up">
                <h2>Resume</h2>
                <p>ខ្ញុំជានិស្សិតវិទ្យាសាស្ត្រកុំព្យូទ័រ ដែលចូលចិត្តសិក្សាអំពីការសរសេរកូដ
                    ការអភិវឌ្ឍន៍គេហទំព័រ និងបច្ចេកវិទ្យាថ្មីៗ។ ខ្ញុំតែងតែខិតខំអភិវឌ្ឍជំនាញ
                    និងបង្កើតគម្រោងជាក់ស្តែង ដើម្បីដោយប្រើបច្ចេកវិទ្យា។</p>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                        <h3 className="resume-title">Summary</h3>
                        <div className="resume-item pb-0">
                            <h4>Rorn Narrat</h4>
                            <p><em>អ្នករចនាក្រាហ្វិកដែលមានភាពច្នៃប្រឌិត និងទាន់ពេលវេលាកំណត់ ដែលមានបទពិសោធន៍ 1 ឆ្នាំក្នុងការរចនាសម្ភារៈទីផ្សារ ហើយក៏ជាអ្នកសរសេរកូដផងដែរ។</em></p>
                            <ul>
                                <li>Phnom Penh, Cambodia</li>
                                <li>(855) 96 273 2305</li>
                                <li>narrat401@gmail.com</li>
                            </ul>
                        </div>

                        <h3 className="resume-title">Education</h3>
                        <div className="resume-item">
                            <h4>និសិត្យឆ្នាំទី 2 &amp; Graphic Design Computer Science</h4>
                            <h5>2024 - 2026</h5>
                            <p><em>Western University, Phnom Penh, Cambodia</em></p>
                        </div>
                    </div>

                    <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
                        <h3 className="resume-title">Professional Experience</h3>
                        <div className="resume-item">
                            <h4>Programmer</h4>
                            <h5>2024 - Present</h5>
                            <p><em>Western University, Phnom Penh, Cambodia</em></p>
                            <ul>
                                <li>Lead in the design, development, and implementation of the graphic, layout, and production content.</li>
                                <li>Delegate tasks to the 3 members of the design team and provide counsel on all aspects of the project.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}