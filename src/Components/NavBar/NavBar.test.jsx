import React from 'react';
import {render, screen} from "@testing-library/react";
import { BrowserRouter as Router } from 'react-router-dom'
import NavBar from './NavBar';


const links = [
    { text: 'about', location: "/about" },
    { text: 'members', location: "/members" },
    { text: 'events', location: "/events" },
    { text: 'contact', location: "/contact" }
]


describe('NavBar', () => {
    const testSetup = (component) => (
      render(
        <Router>
          {component}
        </Router>
      )
    )
  
    test.each(links)(
      "Check if the NavBar has all links.",
      (link) => {
        testSetup(<NavBar />);
        const linkDom = screen.getByText(link.text);
        expect(linkDom).toHaveAttribute("href", link.location);
      }
    );
  
  })