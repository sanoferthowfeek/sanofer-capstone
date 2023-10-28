import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';



function Sidebar() {
  return (
    <div className='container-fluid'>
        <div className='row'>
<div className='col-auto min-vh-50 bg-light'>
    <div className='nav'>
    <ul>
        <il>
            <a className='nav-link px-2'>
                <i className='bi-house' /><span className='ms-1 d-none d-sm-inline'>
                    Add Recipes
                    </span>
            </a>
            <a className='nav-link px-2'>
                <i className='bi-house' /><span className='ms-1 d-none d-sm-inline'>
                    Saved Recipes
                    </span>
            </a>
        </il>
    </ul>
    </div>
</div>
        </div>
    </div>
  )
}

export default Sidebar