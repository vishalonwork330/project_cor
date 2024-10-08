import React from 'react'
import './Examdate.css'
import DateImg from '../../img/dateImg.svg'

const Examdate = () => {

    return (
        <div className="exam-dateCont">
            <div className='examInner'>
                <div className ='first-examCont'>
                    <h2>Upcoming Examinations</h2>
                    <p>Enquire about the examination & register for the exams</p>
                </div>
                <div className='secondExamBox'>
                    <div className='singleExamDate-box'>
                        <div className='imgBox'>
                            <img src={DateImg} alt= ''/>
                        </div>
                        <div className='setDate-show'>
                            <h4>02th October 2014 </h4>
                            <p className="para">Level 1 exam</p>
                        </div>
                    </div>
                    <div className='singleExamDate-box'>
                        <div className='imgBox'>
                            <img src={DateImg} alt= ''/>
                        </div>
                        <div className='setDate-show'>
                            <h4>Nov-Dec 2016 </h4>
                            <p className="para">Level 2</p>
                            <p className="para">Lorem Ipsum</p>
                            <p className="para">Lorem Ipsum</p>
                        </div>
                    </div>
                    <div className='singleExamDate-box'>
                        <div className='imgBox'>
                            <img src={DateImg} alt= ''/>
                        </div>
                        <div className='setDate-show'>
                            <h4>Ongoing this year </h4>
                            <p className="para">Level 3 (Grad)</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Examdate;