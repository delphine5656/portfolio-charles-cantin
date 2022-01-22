import React from 'react';
import Aside from '../../component/aside/Aside'
import Layout from '../../component/Layout'
import PostList from '../../component/PostList'
import './pages.css'

function Couple() {
  return (
    <>
          <Layout>
            <PostList />
          </Layout>
    <div className='aside'>
          <Aside/>
    </div>

    </>


)
}

export default Couple;

