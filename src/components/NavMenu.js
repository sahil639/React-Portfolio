/* eslint-disable prettier/prettier */
import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { MdClose, MdMenu } from 'react-icons/md';

const NavMenuStyles = styled.div`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem 0;
  background: var(--dark-bgs);
  ul{
      max-width: 1200px;
      margin: 0 auto;
      width: 98%;
      text-align: center;
      li{
          display: inline-block;
          border-radius: 10px;
          transition: 0.3s ease background-color;
          &:hover {
              background-color: var(--deep-dark);
          }
      }
      a{
          display: inline-block;
          font-family: 'RobotoMono Regular';
          padding: 1rem 2rem;
          font-size: 2rem;
          color: var(--gray-1);
          outline: none;
      }
      .active{
          color: var(--white);
      }
  }
  .mobile-menu-icon {
      position: absolute;
      right: 1rem;
      top: 1rem;
      width: 4rem;
      cursor: pointer;
      display:none;
      outline: none;
  }
  .closeNavIcon {
      display: none;
  }

  @media only screen and (max-width: 768px) {
      .mobile-menu-icon {
          display: block;
      }
      .navItems {
          --top: 1rem;
          transition: .3s ease transform;
          background-color: var(--deep-dark);
          padding: 2 rem;
          width: 90%;
          max-width: 300px;
          border-radius: 12px;
          position: absolute;
          right: 1rem;
          top: var(--top);
          .closeNavIcon {
          display: block;
          width: 3rem;
          margin: 0 0 0 auto;
          cursor: pointer;
      }
      }

  }
`;

export default function NavMenu() {
  return (
    <NavMenuStyles>
     <div className="mobile-menu-icon">
         <MdMenu />
     </div>
      <ul>
        <div className="navItems" />
        <div className="mobile-menu-icon">
           <MdClose />
        </div>
        <li>
           <NavLink to="/" exact >Home</NavLink>
        </li>
        <li>
           <NavLink to="/about">About</NavLink>
        </li>
        <li>
            <NavLink to="/projects">Projects</NavLink>
        </li>
        <li>
            <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
      </NavMenuStyles>
     )
    }
