import React from 'react'
import { Routes,Route,Link} from "react-router-dom";
import { Layout,Typography,Space } from 'antd';
import { Navbar , Homepage , Exchanges , CryptoDetails , Cryptocurrent, News} from './components'
import './App.css';

const App = () => {
    return (
        <div className='app'>
            <div className='navbar'>
                <Navbar/>

            </div>
            <div className='main'>
                <Layout>
                    <div className='routes'>
                        <Routes>
                            <Route exact path ="/" element={<Homepage/>} />
                            
                            <Route exact path ="/cryptocurrent" element = {<Cryptocurrent/>}/>
                                
                            <Route exact path ="/exchanges" element={<Exchanges/>}/>
                                
                            <Route exact path ="/news" element={ <News/>}/>
                               
                            <Route exact path ="/crypto/:coinId" element={<CryptoDetails/>}/>
                               
                        </Routes>

                    </div>
                </Layout>

            
            <div className='footer'>
                <Typography.Title level={5} style={{color : 'white' , textAlign : 'center'}}>
                    Cyptoverse <br />
                    All rights reserverd
                </Typography.Title>
                <Space>
                    <Link to = "/">Home</Link>
                    <Link to = "/exchanges">Exhanges</Link>
                    <Link to = "/news">News</Link>
                </Space>
                </div>

            </div>

        </div>
    )
}

export default App
