import React from 'react'
import Footer from './Components/Home/footer'

const Contact = () => {
  return (
    <>
        <div className="container1" >
        <h2 style={{color:'blue'}} >Connect with us</h2>
            <div className="heading" style={{display:'flex'}}>
                <div className="left">
                    <div className='border' style={{display:'flex',flexDirection:'column',alignItems:'flex-start'}} >
                    <header style={{color:'blue',fontWeight:'bold'}} >Enquiry</header>
                    <p>enquiry@urbansciencemep.com</p>
                    <p>+91 8888 9999 999</p>
                    </div>
                    <div className='border' style={{display:'flex',flexDirection:'column',alignItems:'flex-start'}} >
                    <header style={{color:'blue',fontWeight:'bold'}}  >Placement Team</header>
                    <p>enquiry@urbansciencemep.com</p>
                    <p>+91 8888 9999 999</p>
                    </div>
                    <div style={{display:'flex',flexDirection:'column',alignItems:'flex-start'}}>
                    <header  style={{color:'blue',fontWeight:'bold'}}  >General Enquiry</header>
                    <p>enquiry@urbansciencemep.com</p>
                    <p>+91 8888 9999 999</p>
                    </div>
                </div>
                <div className="right" style={{display:'flex',flexDirection:'column',alignItems:'flex-start',gap:'10px',justifyContent:'space-around'}} >
                    <label htmlFor="email" style={{fontSize:'1.5rem',display:'flex',flexDirection:'column',alignItems:'flex-start' }} >Email
                        <input type="text" name="email" id="email" style={{width:'400px',height:'30px',marginTop:'10px'}} />
                    </label>
                    <label htmlFor="email" style={{fontSize:'1.5rem',display:'flex',flexDirection:'column',alignItems:'flex-start' }}  >Contact Number
                        <input type="number" name="email" id="email" style={{width:'400px',height:'30px',marginTop:'10px'}} />
                    </label>
                    <label htmlFor="email" style={{fontSize:'1.5rem',display:'flex',flexDirection:'column',alignItems:'flex-start' }}  >Message
                        <input type="text" name="email" id="email" style={{width:'400px',height:'100px',marginTop:'10px'}} />
                    </label>
                    <button style={{fontSize:'1.5rem',width:'100px',background:'blue',color:'white',border:'none',height:'40px'}}>Submit</button>
                </div>
            </div>
            <Footer/>
        </div>
    </>
  )
}

export default Contact