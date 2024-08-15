// @ts-nocheck
import React from 'react';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import { colors } from '../lib/color';

export default function Layout() {
  const { a, b, c } = useParams();
  
  const navLinks = colors.map(color => (
    <NavLink
      key={color.name}
      className={primo => primo ? 'active' : ''}
      to={`/color/${color.rgb.join('/')}`}
    >
      {color.name}
    </NavLink>
  ));

  return (
    <div className="container" style={{ backgroundColor: `#${a}${b}${c}` }}>
      <section className="list">
        {navLinks}
      </section>
      <Outlet />
    </div>
  );
}
