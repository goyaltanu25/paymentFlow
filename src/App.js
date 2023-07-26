import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

// function loadScript(src) {
// 	return new Promise((resolve) => {
// 		const script = document.createElement('script')
// 		script.src = src
// 		script.onload = () => {
// 			resolve(true)
// 		}
// 		script.onerror = () => {
// 			resolve(false)
// 		}
// 		document.body.appendChild(script)
// 	})
// }

const __DEV__ = document.domain === "localhost";

function App() {
  // const [name, setName] = useState('Mehul')

  // async function displayRazorpay() {
  // 	const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

  // 	if (!res) {
  // 		alert('Razorpay SDK failed to load. Are you online?')
  // 		return
  // 	}

  // 	const data = await fetch('http://localhost:1337/razorpay', { method: 'POST' }).then((t) =>
  // 		t.json()
  // 	)

  // 	console.log(data)

  // 	const options = {
  // 		key: __DEV__ ? 'rzp_test_uGoq5ABJztRAhk' : 'PRODUCTION_KEY',
  // 		currency: data.currency,
  // 		amount: data.amount.toString(),
  // 		order_id: data.id,
  // 		name: 'Donation',
  // 		description: 'Thank you for nothing. Please give us some money',
  // 		image: 'http://localhost:1337/logo.svg',
  // 		handler: function (response) {
  // 			alert(response.razorpay_payment_id)
  // 			alert(response.razorpay_order_id)
  // 			alert(response.razorpay_signature)
  // 		},
  // 		prefill: {
  // 			name,
  // 			email: 'sdfdsjfh2@ndsfdf.com',
  // 			phone_number: '9899999999'
  // 		}
  // 	}
  // 	const paymentObject = new window.Razorpay(options)
  // 	paymentObject.open()
  // }
  const upiDeepLink = "upi://pay?pa=airtelpayments.payu@mairtel&pn=Airtel Payments Bank Limited&tr=17811237330&tid=PPPL17811237330260723132612&am=1.00&cu=INR&tn=UPI Transaction for PPPL17811237330260723132612"; // Replace this with the actual PhonePe deep-link URL

  const openApp = () => {
    window.location.href = upiDeepLink;
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={openApp}>Click here to open UPI app</button>
      </header>
    </div>
  );
}

export default App;
