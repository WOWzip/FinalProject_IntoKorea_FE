import React from "react";
import { NavLink } from "react-router-dom";
import SidebarItem from "./SidebarItem";
import styled from "styled-components";

    
const Side = styled.div`
display: flex;
border-right: 1px solid #e0e0e0;
flex-direction: column;
align-items: center;
justify-content: center;
width: 300px; /* 변경된 부분 */
height: auto;
background-color: #f8f9fa; /* 변경된 부분 */
`


const Menu = styled.div`
margin-top: 30px;
width: 200px;
height: 100vh;
display: flex;
flex-direction: column;
`
    const StyledNavLink = styled(NavLink)`
    font-size: 25px;
    color: gray; 
    text-decoration: none; 
    &:hover {
        color: magenta;
    }
    &.active {
        color: magenta;
    }
`;

function MyPageSidebar () {


    const menus = [
        {name: "마이페이지", path:"/Mypage"},
        {name:"즐겨찾기", path:"/BookMark"},
        {name:"여행 일기", path:"/History"},
        {name:"Q&A", path:"/QnA"}
    ];


    return (
        <Side>
            <Menu>
                {menus.map((menu, index) =>{
                    return(
                        <StyledNavLink 
                        to={menu.path}
                        key={index}
                        exact="true"> 
                        <SidebarItem menu={menu}/> 
                        </StyledNavLink>
                    )
                })}
            </Menu>
        </Side>
    )

}

export default MyPageSidebar;