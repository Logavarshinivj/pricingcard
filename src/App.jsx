import './App.css'
import {useState} from 'react';
export default function App() {
    const cardapi=[
        {
            category:"Free",
            cost:"$0/month",
            user:"single user",
            gb:"50GB Storage",
            projects:"unlimited private projects",

        }
    ]
    return(
        <div className="App">
        <Cart/>
        </div>
    )
}

function Cart(){
    return(
        <div className="container">
            <div className="card">
            <div className="card-container">
            <div className="features1">
                <div className="category1">
                <p>FREE</p>
                <h2>$0/month</h2>
                <hr/>
                </div>
                <div className="pricing1">
                <p>✔️ Single User</p>
                <p>✔️ 5GB Storage</p>
                <p>✔️ Unlimited Public Projects</p>
                <p>✔️ Community Access</p>
                <p><del>❌ Unlimited Private Projects</del></p>
                <p><del>❌ Dedicated Phone Support</del></p>
                <p><del>❌ Free Subdomain</del></p>
                <p><del>❌ Monthly Status Reports</del></p>
                </div>
                <div className="button">    
                <button className='btn'>BUY</button>
                </div>
            </div>
            <div className="features2">
                <div className='category2'>
                <p>PLUS</p>
                <h2>$9<b className='month'>/month</b></h2>
                <hr/>
                </div>
                <div className="pricing2">
                <p><b>✔️ 5 Users</b></p>
                <p>✔️ 50GB Storage</p>
                <p>✔️ Unlimited Public Projects</p>
                <p>✔️ Community Access</p>
                <p>✔️ Unlimited Private Projects</p>
                <p>✔️ Dedicated Phone Support</p>
                <p>✔️ Free Subdomain</p>
                <p><del>❌ Monthly Status Reports</del></p>
                </div>
                <div className="button">    
                <button className='btn'>BUY</button>
                </div>
            </div>
            <div className="features3">
                <div className="category3">
                <p>PRO</p>
                <h2>$49/month</h2>
                <hr/>
                </div>
                <div className="pricing3">
                <p><b> ✔️Unlimited Users</b></p>
                <p>✔️ 150GB Storage</p>
                <p>✔️ Unlimited Public Projects</p>
                <p>✔️ Community Access</p>
                <p>✔️ Unlimited Private Projects</p>
                <p>✔️ Dedicated Phone Support</p>
                <p><b>✔️ Unlimited </b>Free Subdomains</p>
                <p>✔️ Monthly Status Reports</p>
                </div>
                <div className="button">    
                <button className='btn'>BUY</button>
                </div>
            </div>
            </div>
            </div>
        </div>
    )
}   