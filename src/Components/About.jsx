import React from 'react'
import Footer from './Home/footer'

function About() {
  return (
    <div style={{width:'100%'}}>
      <div style={{ height: '100vh', width: '100%' }}>
        <img src="https://www.urbansciencemep.com/_next/static/images/about-1-fcabb8ead6b6f55150f09d642c983f7f.jpg" alt="" height='100%' />
      </div>
      <div style={{ height: '100vh', width: '100%', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
        <h1>About Us</h1>
        <p style={{ width: '80%', display: 'flex', alignItems: 'flex-start', lineHeight: '2rem', justifyContent: 'flex-start' }}>Lorem100
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum non nobis molestias quidem alias odio eius fugiat omnis quod? Laboriosam nam aliquid vitae vero sunt voluptatibus eligendi accusantium qui repudiandae tenetur magnam minima quidem, earum nihil, quos fugit obcaecati iusto neque sequi iste! Corporis, saepe. Suscipit dolore asperiores natus deserunt cum ipsum, qui voluptates cumque eligendi quasi dolor incidunt omnis porro aperiam non sequi nemo debitis dolorum, ipsam corporis architecto quod! Autem rem vel eos perferendis magnam voluptatibus veniam, cupiditate expedita quis optio at praesentium, reprehenderit voluptatem saepe vitae iste aliquam laborum quisquam libero distinctio? Minima velit voluptates optio obcaecati, dolorem earum, fugit non error distinctio consequuntur natus culpa explicabo quo, molestiae numquam nam. Recusandae, omnis voluptas. Enim quia, aut nisi praesentium culpa molestiae eveniet quibusdam reprehenderit. Obcaecati sunt repudiandae totam odit impedit at! Neque vero molestiae veritatis hic nulla ratione nesciunt. Enim error amet consequatur doloremque, iusto aperiam culpa nostrum non inventore accusamus, beatae recusandae repellendus hic. Non cum sed necessitatibus distinctio a, modi quis recusandae quasi impedit in nobis nihil deserunt ut vel, sint, quod quos ab et quibusdam aut veritatis. Inventore totam accusantium dignissimos expedita sunt itaque eveniet incidunt saepe repudiandae, officia debitis id beatae vel consequuntur
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum non nobis molestias quidem alias odio eius fugiat omnis quod? Laboriosam nam aliquid vitae vero sunt voluptatibus eligendi accusantium qui repudiandae tenetur magnam minima quidem, earum nihil, quos fugit obcaecati iusto neque sequi iste! Corporis, saepe. Suscipit dolore asperiores natus deserunt cum ipsum, qui voluptates cumque eligendi quasi dolor incidunt omnis porro aperiam non sequi nemo debitis dolorum, ipsam corporis architecto quod! Autem rem vel eos perferendis magnam voluptatibus veniam, cupiditate expedita quis optio at praesentium, reprehenderit voluptatem saepe vitae iste aliquam laborum quisquam libero distinctio? Minima velit voluptates optio obcaecati, dolorem earum, fugit non error distinctio consequuntur natus culpa explicabo quo, molestiae numquam nam. Recusandae, omnis voluptas. Enim quia, aut nisi praesentium culpa molestiae eveniet quibusdam reprehenderit. Obcaecati sunt repudiandae totam odit impedit at! Neque vero molestiae veritatis hic nulla ratione nesciunt. Enim error amet consequatur doloremque, iusto aperiam culpa nostrum non inventore accusamus, beatae recusandae repellendus hic. Non cum sed necessitatibus distinctio a, modi quis recusandae quasi impedit in nobis nihil deserunt ut vel, sint, quod quos ab et quibusdam aut veritatis. Inventore totam accusantium dignissimos expedita sunt itaque eveniet incidunt saepe repudiandae, officia debitis id beatae vel consequuntur.</p>

      </div>

      <div style={{ height:'50vh', width: '100%', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
        <form action=""  style={{width:'80%',height:'50%' ,display:'flex',alignItems:'center',justifyContent:'center'}} >
          <fieldset style={{width:'100%',height:'50%',display:'flex',alignItems:'center',justifyContent:'center',padding:'80px',fontSize:'1.5rem' }} >
            <legend style={{marginLeft: 'calc(50% - 15px - 80%)',fontSize:'1.5rem',fontWeight:'bold'}}>Register your interest</legend>
            <label htmlFor=""  style={{padding:'0px'}}  >Name</label>
            <input type="text"    />
            <label htmlFor=""  style={{padding:'50px'}}  >Email</label>
            <input type="email"     />
            <label htmlFor=""  style={{padding:'50px'}}  >Phone Number</label>
            <input type="number"     />
            {/* <legend>Submit</legend> */}
          </fieldset>
        </form>
      </div>
      <Footer/>
    </div>
  )
}

export default About