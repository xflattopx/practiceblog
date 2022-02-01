import { useState } from 'react';
import BlogList from './BlogList';


const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
      ])

    return ( 
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs" />
            <BlogList blogs={blogs.filter((blog) => blog.author === "mario" )} title="Marios Blogs" />
        </div>
    
     );
}
 
export default Home;


/**Graveyard 
 *   //let name = 'Chase'
    // const [name, setName] = useState('Chase');
    // const [age, setAge] = useState('25');

    // const handleClick = (e) => {
    //     setName('William');
    //     setAge('30');
    //     console.log("Hi Chase", e)
    // }
 * 
 * 
 * 
*/