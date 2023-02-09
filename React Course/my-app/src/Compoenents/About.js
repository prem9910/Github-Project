import React,{useState} from 'react'

export default function About() {

    var[myStyle, setMyStyle] = useState({
        color:'black',
        backgroundColor:'white'
    
      })
      const lightmode = ()=>{
        if(myStyle.color === 'white'){
          setMyStyle({
              color:'black',
              backgroundColor:'white'
          })
          
        }
        // setMyStyle(console.log('lightmode'));
    
      }
    
      const darkmode = ()=>{
        if(myStyle.color === 'black'){
            setMyStyle({
                color:'white',
                backgroundColor:'black'
            })
        }
        // setMyStyle(console.log('darkmode'))
      }


  return (
    <>
    <div className='container' style={myStyle}>
      <h1>About Us</h1>
      <hr className="dropdown-divider"/>
      <h5>This is the subheading for about us</h5>
      <p><strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, necessitatibus?</strong> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi asperiores, eos nam quaerat repellat obcaecati explicabo enim, ipsam odit nihil, non sunt dolorem est ab nostrum ut blanditiis. Laudantium, iste? Quia iste tenetur <code>prem</code> recusandae blanditiis qui, officiis libero cumque quis beatae nulla ea nihil neque a corrupti voluptatibus ab et obcaecati veritatis voluptates nobis consequatur vel error. Optio, aut odio repudiandae maiores a sit vitae quae, fuga quia molestiae non culpa illo alias placeat repellendus voluptates, tempora impedit laboriosam nesciunt.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi asperiores, eos nam quaerat repellat obcaecati explicabo enim, ipsam odit nihil, non sunt dolorem est ab nostrum ut blanditiis. Laudantium, iste? Quia iste tenetur recusandae blanditiis qui, officiis libero cumque quis beatae nulla ea nihil neque a corrupti voluptatibus ab et obcaecati veritatis voluptates nobis consequatur vel error. Optio, aut odio repudiandae maiores a sit vitae quae, fuga quia molestiae non culpa illo alias placeat repellendus voluptates, tempora impedit laboriosam nesciunt.</p>
      <p>Lorem ipsum dolor sit amet, <code>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita similique neque quo?</code> consectetur adipisicing elit. Animi asperiores, eos nam quaerat repellat obcaecati explicabo enim, ipsam odit nihil, non sunt dolorem est ab nostrum ut blanditiis. Laudantium, iste? Quia iste tenetur recusandae blanditiis qui, officiis libero cumque quis beatae nulla ea nihil neque a corrupti voluptatibus ab et obcaecati veritatis voluptates nobis consequatur vel error. Optio, aut odio repudiandae maiores a sit vitae quae, fuga quia molestiae non culpa illo alias placeat repellendus voluptates, tempora impedit laboriosam nesciunt.</p>
    </div>
    <div className="container" >
        <button className="btn btn-light mx-2" onClick={lightmode} >Light</button>
        <button className="btn btn-dark mx-2"  onClick={darkmode} >Dark</button>
    </div>
    </>
  )
}
