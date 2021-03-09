import '../styles/globals.css'
import Head from 'next/head'
import Menu from '../src/menu'
import 'antd/dist/antd.css';
import {Row, Col, Layout} from 'antd'

const App = ({Component, pageProps}) =>
  <Layout>
    <Head>
        <title>Vladislav Kovalenko</title>
      </Head>
      
     <Menu/>
     <Layout.Content style={{minHeight: "1200px"}}>
       <Row style={{marginTop: "2%"}}>
          <Col span={18}>
          <Component {...pageProps} />
        </Col>
       </Row>
     </Layout.Content>
   </Layout>
   
export default App
