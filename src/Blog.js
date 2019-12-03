import React, { Component } from "react";
import Nav from './Nav';
import Hero from './Hero';
import Footer from './Footer';

class Blog extends Component {

    render(){

        return(
            <div className="blogPage">
                <header>
                    <Nav />
                    <Hero />
                </header>

                <div className="wrapper blogSection">
                    <h2>A Blog Post: Here's a subtitle too</h2>
                    <h3>By: Person Person</h3>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, eius. Nam earum architecto molestiae porro ut, praesentium vitae sequi similique corrupti tempore fugit dolores illum, vero quidem molestias dolore ab consectetur ipsam temporibus cum! Quod sint saepe nostrum aut! Hic aspernatur, blanditiis error pariatur quam ullam repellat, eum nobis facilis neque alias itaque unde veniam incidunt veritatis. Voluptas itaque unde commodi similique ad, inventore officiis. Maiores voluptate soluta excepturi facilis deleniti sint error commodi molestias alias veritatis adipisci, sequi rerum quia quidem, dignissimos reprehenderit modi neque in placeat earum porro vero! Praesentium voluptates est corporis iste velit quis explicabo adipisci.</p>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam aut dolorum aspernatur perferendis quasi corporis doloremque enim dolores aliquam animi totam mollitia delectus a placeat unde itaque quibusdam cum numquam, maiores nam, voluptatibus cumque amet officia! Doloremque adipisci quasi eligendi accusantium error, rerum expedita incidunt totam ducimus perspiciatis nesciunt, placeat molestias vero libero earum possimus accusamus similique impedit asperiores odit! Reiciendis perspiciatis doloribus id nobis, ratione magni a nesciunt ad reprehenderit molestiae possimus iusto obcaecati aut necessitatibus temporibus non earum consequuntur. Nam, libero recusandae ad distinctio voluptas, esse optio pariatur facilis, ratione minima voluptate ullam consequuntur? Omnis nihil deserunt quam placeat ipsum quidem obcaecati eum, sequi minima voluptates provident optio perspiciatis non quas! Vitae ad non saepe necessitatibus quae reprehenderit, neque doloribus accusamus. Quod itaque qui ipsa soluta repudiandae alias, ullam quibusdam exercitationem et dolorem reprehenderit placeat quam unde doloribus nostrum dolor velit laudantium quia facilis atque voluptatem molestiae! Vero!</p>

                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus voluptatem quas aliquam temporibus facilis neque fugit porro, reiciendis fuga perspiciatis, totam incidunt voluptatum corporis iure quisquam quam quibusdam corrupti, culpa modi dolor odio! Ipsum optio non tempore vero, nisi dignissimos voluptas numquam voluptates? Modi reiciendis iste voluptates! Rem, aliquid quae provident modi repudiandae natus. Dolor, incidunt quia. Ut, quos molestias? Architecto illo tempore delectus reprehenderit similique, temporibus perferendis nisi rerum odio cupiditate ipsa expedita laborum repellat magni quod iste! Rerum?</p>
                </div>

                <Footer />
            </div>
        )
    }
}

export default Blog;