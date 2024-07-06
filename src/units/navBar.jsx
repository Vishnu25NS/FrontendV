function NavBar()
{
    return(
        <div style={{height:"100px",backgroundImage:'url(navbg.jpg)',
            padding:'10px',backgroundSize:'cover',display:'flex',
         textEmphasisColor:'Highlight',
         justifyContent:'space-between',
         display:'flex'
         ,border:'solid white 2px',width:'98.45%'
        }}>
  <text style={{fontSize:'30px',
               fontStyle:'normal',
               fontFamily:"sans-serif",
               color:"white",
               display:"flex",
               alignContent:'left',
               marginLeft:'20px',
               marginTop:'30px'}}><b><i>EXPRESS</i></b></text>
               <div style={{display:'flex',
                justifyContent:'space-between',
                gap:'60px',
                marginTop:'60px',
                height:'50px',width:'600px',
                marginRight:'20px'}}>
               <text style={{color:'black',
                textDecoration:'underline',fontSize:'20px',opacity:'100%'}}><a href="http://localhost:3000">Home</a></text>
             <text style={{color:'black',
                textDecoration:'underline',fontSize:'20px',opacity:'100%'}}><a href="http://localhost:3000/register">Contact</a></text>
                 <text style={{color:'black',
                textDecoration:'underline',fontSize:'20px',opacity:'100%'}}><a href="http://localhost:3000/register">Booking</a></text>
                <text style={{color:'black',
                textDecoration:'underline',fontSize:'20px',opacity:'100%'}}><a href="http://localhost:3000/register">About</a></text>
                
               </div>
</div>
    )
}
export default NavBar;