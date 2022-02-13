import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import '../../assets/css/navbar.css';
import '../../assets/css/style.css';
import { setAuth } from '../../redux/actions/Authentication';
import { pages } from '../../utils/params';

const Navbar = (props) => {
  const dispatch = useDispatch();

  return (
    <div id='navbar' className='d-flex flex-wrap'>
      <h4 style={{ margin: 0 }}>BAKARI</h4>
      <nav
        className='d-flex justify-content-between flex-wrap'
        style={{ flex: 1, margin: 0, marginLeft: '10px' }}
      >
        <div className='d-flex flex-wrap'>
          {Object.keys(pages).map((key, idx) => {
            return (
              <Link
                key={idx}
                className='link'
                to={`/admin/${pages[key].toLowerCase()}`}
              >
                {pages[key]}
              </Link>
            );
          })}
        </div>
        <div>
          <a
            className='link'
            href='#navbar'
            onClick={() => {
              dispatch(setAuth({ isLogin: false, user: {} }));
            }}
          >
            Logout
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
