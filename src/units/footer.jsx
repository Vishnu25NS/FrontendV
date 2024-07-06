import { getByPlaceholderText } from "@testing-library/react";

function Footer()
{
    return(
        <div style={{backgroundColor:'black',
            display:'flex',
            justifyContent:'center',height:'50px',
            border:"solid white 2px"
            ,width:"98.45%",padding:'10px'
        }}>
           <text style={{fontStyle:'italic',
            fontSize:'20px',color:'white'
           }}>Contact:vishnu2003kannan@gmail.com<br />Copyright@2024;Designed by Vishnu
        </text>
        </div>
    )
}
export default Footer;