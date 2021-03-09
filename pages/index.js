import React from 'react'
import Link from 'next/link'
import {Layout, Row, Col, Card, Button, Divider} from 'antd'

export default () => {
    return(
        <div>
            <Layout>
                
                <Row>
                    <Col span={4} style={{display: "flex", flexDirection: "column"}}>
                        <Link href="https://github.com/z0s0"><Button>Github</Button></Link>
                        <Divider/>
                        <Link href="https://www.linkedin.com/in/vladislav-kovalenko-468a07103/"><Button>LinkedIn</Button></Link>
                        <Divider/>
                        <Link href="https://twitter.com/VladisKov"><Button>Twitter</Button></Link>
                        <Divider/>
                        <Button type={"primary"} disabled children={"Download CV"}/>
                    </Col>

                    <Col span={19}>
                        <Card>
                            Hi, my name is Vlad and I'm a backend engineer based in Bangkok, Thailand.
                            I love statically typed languages, applied functional programming and table tennis.
                            On this website you can find my tech thoughts, social media and my experience description.
                            Also don't forget to visit <Link href="/notes">
                                <a>Notes and postmortems</a>
                            </Link>, these are my stories and things I wish I knew before.
                        </Card>
                    </Col>
                </Row>
            </Layout>
        </div>
    )
}
  
