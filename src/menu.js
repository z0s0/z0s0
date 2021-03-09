import React from 'react'
import Link from 'next/link'

import {Menu} from 'antd'

export default () => 
  <Menu
    theme="light"
    mode="horizontal"
  >
    <Menu.Item>
      <Link href="/">About</Link>
    </Menu.Item>

    <Menu.Item>
      <Link href="/posts">Articles</Link>
    </Menu.Item>

    <Menu.Item>
      <Link href="/notes">Notes and Postmortems</Link>
    </Menu.Item>
  </Menu>
