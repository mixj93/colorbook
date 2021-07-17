import React, { useState } from 'react'
import ProList from '@ant-design/pro-list'
import nipponData from '../data/nippon.json'
import '@ant-design/pro-list/dist/list.css'
import './App.css'

function App() {
  return (
    <ProList<{ name: string; id: string; hex: string }>
      size="small"
      grid={{ gutter: 16, column: 6 }}
      // metas={{
      //   title: {},
      //   subTitle: {},
      //   type: {},
      //   avatar: {},
      //   content: {
      //     render: (_, { name, hex }) => <div style={{ backgroundColor: hex }}>{name}</div>
      //   },
      //   actions: {}
      // }}
      renderItem={({ name, hex }) => <div style={{ padding: 24, backgroundColor: hex }}>{name}</div>}
      headerTitle="Nippon"
      dataSource={nipponData}
    />
  )
}

export default App
