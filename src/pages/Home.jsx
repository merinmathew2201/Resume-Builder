import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      {/* landing section */}
      <div style={{ height: '90vh', backgroundImage: 'url("https://images.pexels.com/photos/7643998/pexels-photo-7643998.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }} className="d-flex justify-content-center align-items-center">
        <div className="row container-fluid">
          <div className="col-md-4"></div>
          <div className="col-md-4 rounded shadow p-5 text-center" style={{ backgroundColor: 'rgba(255,255,255,0.6)' }}>
            <h3>Designed to get hired. Your skills, your story,your next job - all in one.</h3>
            <Link to={'/resume'} className='btn text-light' style={{ backgroundColor: 'purple' }}>Make Your Resume</Link>
          </div>
          <div className="col-md-4"></div>
        </div>

      </div>
      {/* tools */}
      <div className="container">

        <h1 className=" text-center mt-5">Tools</h1>
        <div className='row align-items-center my-4'>
          <div className="col-md-6">
            <h5>Resume</h5>
            <p>Create unlimited new resumes and easily edit them afterwards.</p>
            <h5>Cover Letters</h5>
            <p>Easily write professional cover Letters.</p>
            <h5>Jobs</h5>
            <p>Automatically receive new and relevant jobs.</p>
            <h5>Applications</h5>
            <p>Effortlessly manage and track your job applications in an oraganised manner.</p>
          </div>
          <div className="col-md-6">
            <img className='w-100' src="https://good-resume.com/wp-content/uploads/2017/03/Free-Professional-2-Page-Resume-Design-CV-Template-Ai-File-2.jpg" alt="" />
          </div>
        </div>
      </div>
      {/* pics */}
      <div style={{ height: '90vh', backgroundImage: 'url("https://img.freepik.com/free-photo/people-business-meeting-high-angle_23-2148911819.jpg?semt=ais_hybrid&w=740&q=80")', backgroundSize: 'cover', backgroundPosition: 'top', backgroundAttachment: 'fixed' }} >

      </div>
      {/* testimony */}
      <div className="container">
        <h1 className=" text-center my-5">Testimony</h1>
        <div className='row align-items-center'>
          <div className="col-md-6 ">
            <h3 className='my-5'>Trusted by professionals worldwide.</h3>
            <p>At LiveCareer, we don't just help you create résumés — we help you land the job. Whether you're a seasoned professional or just starting out, our tools are designed to get results.</p>
            <p>In fact, users who used LiveCareer reported getting hired an average of 48 days faster.</p>
            <p>Join thousands of job-seekers who’ve fast-tracked their careers with a résumé that truly stands out.</p>
          </div>
          <div className="col-md-6">
            <div className="row mb-3 ">
              <div className="col-md-3 ">
                <img style={{width:'150px', height:'120px'}} src="https://img.freepik.com/free-photo/handsome-man-smiling-happy-face-portrait-close-up_53876-145493.jpg?semt=ais_hybrid&w=740&q=80" alt="" />
              </div>
              <div className="col-md-3">
                <img style={{width:'150px', height:'120px'}} src="https://cdn.prod.website-files.com/6318be76dbd6930c5f04cb53/631a5b3cda08e18ebf63f147_AdobeStock_246344306-scaled.jpeg" alt="" />
              </div>
              <div className="col-md-3">
                <img style={{width:'150px', height:'120px'}} src="https://img.freepik.com/free-photo/magnificent-pretty-woman-with-dark-narrow-eyes-pleasant-smile-shrugging-her-shoulders-having-nice-doubtful-look_273609-7417.jpg?semt=ais_hybrid&w=740&q=80" alt="" />
              </div>
              <div className="col-md-3">
                <img style={{width:'150px', height:'120px'}} src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?semt=ais_hybrid&w=740&q=80" alt="" />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-3">
                <img style={{width:'150px', height:'120px'}} src="https://plus.unsplash.com/premium_photo-1705009607254-5618bb0d0c35?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29tYW4lMjBzbWlsaW5nfGVufDB8fDB8fHww&fm=jpg&q=60&w=3000" alt="" />
              </div>
              <div className="col-md-3">
                <img style={{width:'150px', height:'120px'}} src="https://img.freepik.com/free-photo/handsome-man-smiling-happy-face-portrait-close-up_53876-143272.jpg?semt=ais_hybrid&w=740&q=80" alt="" />
              </div>
              <div className="col-md-3">
                <img style={{width:'150px', height:'120px'}} src="https://img.freepik.com/free-photo/handsome-smiling-man-looking-with-disbelief_176420-19591.jpg?semt=ais_hybrid&w=740&q=80" alt="" />
              </div>
              <div className="col-md-3">
                <img style={{width:'150px', height:'120px'}} src="https://st4.depositphotos.com/1017228/20976/i/450/depositphotos_209768304-stock-photo-smiling-young-african-girl-denim.jpg" alt="" />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-3">
                <img style={{width:'150px', height:'120px'}} src="https://img.freepik.com/free-photo/young-determined-armenian-curlyhaired-female-university-student-listen-carefully-asignment-look-confident-ready-task-cross-hands-chest-smiling-selfassured-standing-white-background_176420-56066.jpg?semt=ais_hybrid&w=740&q=80" alt="" />
              </div>
              <div className="col-md-3">
                <img style={{width:'150px', height:'120px'}} src="https://img.freepik.com/free-photo/confident-attractive-caucasian-guy-beige-pullon-smiling-broadly-while-standing-against-gray_176420-44508.jpg?semt=ais_hybrid&w=740&q=80" alt="" />
              </div>
              <div className="col-md-3">
                <img style={{width:'150px', height:'120px'}} src="https://img.freepik.com/premium-photo/happy-girl-smiling-beauty-portrait-young-happy-positive-laughing-brunette-woman-white-background-isolated-european-woman-positive-human-emotion-facial-expression-body-language_80942-7130.jpg" alt="" />
              </div>
              <div className="col-md-3">
                <img style={{width:'150px', height:'120px'}} src="https://st3.depositphotos.com/9881890/16972/i/450/depositphotos_169724388-stock-photo-handsome-smiling-man.jpg" alt="" />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-3">
                <img style={{width:'150px', height:'120px'}} src="https://img.freepik.com/free-photo/handsome-cheerful-man-with-happy-smile_176420-18028.jpg" alt="" />
              </div>
              <div className="col-md-3">
                <img style={{width:'150px', height:'120px'}} src="https://img.freepik.com/free-photo/closeup-portrait-beautiful-smiling-brunette-model-trendy-female-posing-street_158538-17031.jpg?semt=ais_hybrid&w=740&q=80" alt="" />
              </div>
              <div className="col-md-3">
                <img style={{width:'150px', height:'120px'}} src="https://img.freepik.com/free-photo/closeup-portrait-handsome-smiling-model-sexy-stylish-man-dressed-shirt-jeans-fashion-hipster-male-posing-near-white-wall-studio-isolated_158538-26713.jpg?semt=ais_hybrid&w=740&q=80" alt="" />
              </div>
              <div className="col-md-3">
                <img style={{width:'150px', height:'120px'}} src="https://img.freepik.com/free-photo/portrait-beautiful-smiling-blond-model-dressed-summer-hipster-clothes-trendy-girl-posing-street-background-funny-positive-woman_158538-5479.jpg?semt=ais_hybrid&w=740&q=80" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Home