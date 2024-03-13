import { Navbar } from '../components/NavBar'

export function ProjectsPage(props){
    return(
        <>
        <Navbar />
        <div>
            <h2>Projects</h2>
            <h3>Artist Shopfront</h3>
            <p> A MERN stack application.</p>
            <h3>Community Theatre Application</h3>
            <p>This powerful API allows you to store detailed information about each member, including their training history and qualifications.

With the Community Theatre Member Tracking API, you can effortlessly keep track of the amount of training each member has received, as well as their specific qualifications, such as acting experience, technical skills, or production expertise. Whether they're seasoned performers or newcomers to the stage, this API ensures that you have all the necessary information at your fingertips to effectively manage your community theatre talent pool.

Designed for simplicity and efficiency, the API offers seamless integration with your existing systems and applications. It provides easy-to-use endpoints for adding new members, updating training records, and retrieving member information. Plus, with robust security features, you can rest assured that your data is safe and protected at all times.

Say goodbye to cumbersome spreadsheets and outdated tracking methods. With the Community Theatre Member Tracking API, you can streamline your operations, improve communication, and ensure that your productions are filled with talented and qualified performers. Elevate your community theatre experience – start tracking your members with confidence today.</p>
            <h3>Terminal Application</h3>
        </div>
        </>
    )
}