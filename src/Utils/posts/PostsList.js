import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import GetAllProducts from "../../api/products";
import "../../styles/Home.css";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";

import Accordion from "../../Templates/Accordeon";

export const PostsList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetAllProducts());
  }, [dispatch]);

  const posts = useSelector((state) => state.posts.posts);

  const renderedPosts = posts.map((post) => (
    <article className="post-excerpt" key={post._id}>
      <br />
      <div style={{ float: "right", marginRight: 50 }}>
        <Avatar alt="Avatar" />
        <p>{post.user}</p>
      </div>
      <div style={{ marginLeft: 50 }}>
        <h2>{post.titre}</h2>
        <p>{post.price} $</p>
        <p>{post.description}</p>
      </div>

      <Accordion />
      <br />
      <div style={{ textAlign: "center" }}>
        <Link to={`/posts/${post._id}`} className="button muted-button">
          <Button variant="contained">Voir Plus</Button>
        </Link>
        <div>
          <br />
        </div>
      </div>
      <br />
      <div style={{ float: "right" }}></div>
    </article>
  ));

  return (
    <section className="posts-list">
      <h2 style={{ textAlign: "center" }}>Accueil</h2>
      <div className="HomeBox">{renderedPosts}</div>
    </section>
  );
};
