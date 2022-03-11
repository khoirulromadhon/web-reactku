import React, { Component } from "react";
import './BlogPost.css';
import Post from "../../Component/BlogPost/Post";

class BlogPost extends Component{
    render(){
        return(
            // <p>Blog Artikel</p>
            // <div class="post-artikel">
            //     <div class="artikel">
            //         <div class="gambar-artikel">
            //             <img src="http://placeimg.com/80/80/tech" alt="Gambar Tumbnail Artikel" />
            //         </div>
            //         <div class="konten-artikel">
            //             <div class="judul-artikel">Judul Artikel</div>
            //             <p class="isi-artikel">Isi Artikel</p>
            //         </div>
            //     </div>
            // </div>
            <div class="post-artikel">
                <h2>Daftar Artikel</h2>
                <Post/>
            </div>
        )
    }
}

export default BlogPost;