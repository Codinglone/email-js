import { useRef, useState } from "react"
import emailjs from "@emailjs/browser"


function App() {
  const [feedBack, setFeedBack] = useState(null)
  const form = useRef()
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_aov11xg', 'YOUR_SERVICE_KEY', form.current, 'YOUR_PUBLIC_KEY')
    .then((result) => {
      setFeedBack(result.text)
    },
    (error) => {
      setFeedBack(error)
    })
  }
  return (
    <main>
      <h1>Sending E-mails with React and Email JS </h1>
      {feedBack && <h1>{feedBack}</h1>}
      <form ref={form}>
      <input type="text" name="user_name" required onChange={(e) => setEmail(e.target.value)} />
      <br />
      <input type="email" name="user_email" required onChange={(e) => setEmail(e.target.value)} />
      <br />
      <h1>Enter a message</h1>
      <textarea  name="message" cols="30" rows="10" required onChange={(e) => setMessage(e.target.value)}></textarea>
      <br />
      <button onClick={handleSubmit}>Send E-mail</button>
      </form>
    </main>
  )
}

export default App
