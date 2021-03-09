import '../styles/globals.css'
import Menu from '../src/menu'
import 'antd/dist/antd.css';
import {Row, Col, Layout} from 'antd'

const App = ({Component, pageProps}) =>
   <Layout>
     <Menu/>
     <Layout.Content style={{minHeight: "1200px"}}>
       <Row style={{marginTop: "2%"}}>
          <Col offset={3} span={18}>
          <Component {...pageProps} />
        </Col>
       </Row>
     </Layout.Content>
   </Layout>
export default App
