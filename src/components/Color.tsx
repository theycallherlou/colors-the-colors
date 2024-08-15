import React from 'react';
import { useParams, Outlet } from 'react-router-dom';

export default function Color() {
  
  const { a, b, c } = useParams();
  
  return (
    <>
      <section className="color"
        style={ { backgroundColor: `#${a}${b}${c}` } }
      >
        <div>{ `#${a}${b}${c}` }</div>

        <Outlet />
      </section>
    </>
  );
}
