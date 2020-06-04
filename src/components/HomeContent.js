import React from 'react'

export default function HomeContent() {
    return (
        <div className="container text-center">
            <section className="col-md-12 ftco-animate text-center" style={{ height: '50vh', marginTop: '20vh' }}>
                <div style={{ backgroundColor: 'yellow', height: '30px', position: 'relative', top: '180px', zIndex: '-1' }}>
                </div>
                <h1 style={{ color: 'black', fontWeight: '600' }}>
                    GROW YOUR TEAM WITH<br />ASIA'S #1 YOUNG PROFESSIONS<br />
                        & GRADUATES RECRUITMENT PLATFORM
                    </h1>
                <h4 style={{ color: 'black' }}>
                    Glints Talent Solutions offers a full stack of free job posting, premium recruitment marketplace solution, strategic offshoring and millennial employer branding. Find the top young professionals and graduates you need.
                    </h4>
            </section>

            <section className='row m-5' style={{ height: '100vh' }}>
                <div className="col-5 card p-3" style={{ width: "18rem" }}>
                    <div className="text-center">
                        <img style={{ width: "30%" }} src="https://employers.glints.vn/images/landing/glints/solutions/solution-job-portal.png" className="card-img-top" alt="..." /></div>
                    <div className="card-body">
                        <h1 className="card-title text-dark">Job Portal</h1>
                        <p className="card-text">
                            Post Unlimited Job Openings for FREE!</p>

                        <ul className="list-group list-group-flush text-dark">
                            <li className="list-group-item">Unlimited Jobs</li>
                            <li className="list-group-item">Unlimited Posting Duration</li>
                            <li className="list-group-item">Unlimited Company Admin</li>
                            <li className="list-group-item">Application Tracking System</li>
                            <li className="list-group-item">Personalised Company Page</li>
                        </ul>
                    </div>
                </div>
                <div className="col-2"></div>
                <div className="col-5 card p-3" style={{ width: "18rem" }}>
                    <div className="text-center">
                        <img style={{ width: "30%" }} src="https://employers.glints.vn/images/landing/glints/solutions/solution-talent-hunt.png" className="card-img-top" alt="..." />
                    </div>
                    <div className="card-body">
                        <h1 className="card-title text-dark">Talents Hunt</h1>
                        <p className="card-text">
                            Hire Top Talents Fast and Cost-Efficiently</p>

                        <ul className="list-group list-group-flush text-dark">
                            <li className="list-group-item">Unlimited Jobs</li>
                            <li className="list-group-item">Unlimited Posting Duration</li>
                            <li className="list-group-item">Unlimited Company Admin</li>
                            <li className="list-group-item">Application Tracking System</li>
                            <li className="list-group-item">Personalised Company Page</li>
                            <li className="list-group-item">Faster Hiring Process</li>
                            <li className="list-group-item">Access to Curated Talent Database</li>
                            <li className="list-group-item">Candidate Recommendations by System & Dedicated Consultant</li>
                            <li className="list-group-item">Application Tracking System</li>
                            <li className="list-group-item">Fair and Simple Pricing</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="col-md-12 ftco-animate text-center" style={{ height: '75vh', marginTop: '20vh' }}>
                <div style={{ backgroundColor: 'yellow', height: '30px', position: 'relative', top: '60px', zIndex: '-1' }}>
                </div>
                <h1 style={{ color: 'black', fontWeight: '600' }}>
                    GROW YOUR TALENT PIPELINE WITH US
                    </h1>
                <h4 style={{ color: 'black' }}>
                    The stats don’t lie. Find out the best way to build your talent-pipeline with our dedicated recruiters, AI, and community of like-minded hiring managers
                    </h4>

                <div className='row m-5'>
                    <div className='col-4'>
                        <h5 style={{ color: 'black' }}>We've Helped</h5>
                        <h1 style={{ color: 'red', fontWeight: '1000', fontSize: '75px' }}>981,216</h1>
                        <h5 style={{ color: 'black' }}>
                            Young Professionals
                            To Discover Their Dream Careers
                    </h5>
                    </div>

                    <div className='col-4'>
                        <h5 style={{ color: 'black' }}>We've Empowered</h5>
                        <h1 style={{ color: 'red', fontWeight: '1000', fontSize: '75px' }}>29,437</h1>
                        <h5 style={{ color: 'black' }}>
                            Companies Worldwide
                            To Build Successful Teams
                    </h5>
                    </div>

                    <div className='col-4'>
                        <h5 style={{ color: 'black' }}>Explore</h5>
                        <h1 style={{ color: 'red', fontWeight: '1000', fontSize: '75px' }}>2,866</h1>
                        <h5 style={{ color: 'black' }}>
                            Hot Opportunities
                            Posted Monthly
                    </h5>
                    </div>
                </div>
            </section>

            <section className="col-md-12 ftco-animate text-center">
                <div style={{ backgroundColor: 'yellow', height: '30px', position: 'relative', top: '60px', zIndex: '-1' }}>
                </div>
                <h1 style={{ color: 'black', fontWeight: '600' }}>
                    GROW YOUR TALENT PIPELINE WITH US
                    </h1>
                <a href="/post-job"><button className="btn-lg btn-danger mt-5">POST JOBS FOR FREE</button></a>
                <h5 className="text-dark">It won't take long</h5>
                <div className="container p-0">
                    <img alt='img' width="100%" src="https://employers.glints.vn/images/landing/glints/cta-banner-1400.png" />
                </div>
            </section>
        </div >
    )
}
