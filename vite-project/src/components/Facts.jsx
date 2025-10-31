import LOGO from "../assets/react.svg"

export const Facts = () => {


    return (
        <main>
        
        <img src={LOGO} alt="React Logo" width={40}/>
        <h1>Fun Facts About React</h1>
        <ul>
            <li>Was first released in 2013.</li>
            <li>Was origanlly created by jordan walke</li>
            <li>Has well over 200k stars in github</li>
            <li>Is mantained by META</li>
            <li>Powers thousands of enterprised apps, including mobile apps</li>
        </ul>
        </main>
    )
}