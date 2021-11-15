import React from 'react';
import styled from "styled-components";

const DivBk = styled.div`
background-color: blueviolet;
margin: 2%;
`
const Ptg = styled.div`
padding: 5% 20%;
`


function About (){
    return(
        <DivBk> 
        <div>
            <h1> Water My Plants 2 </h1>
            <img src="https://jmflandscaping.com/wp-content/uploads/2020/12/giant-water-lily-20-most-interesting-plants-1024x678.jpg" alt = "test" />
            <Ptg> 
            <p>  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
                culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
                culpa qui officia deserunt mollit anim id est laborum. 
            </p>
            </Ptg>
        </div>
        </DivBk>
    )
}

export default About