import { useState } from "react";
import "./Community.css";

function Community() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [likedPosts, setLikedPosts] = useState([]);

  const categories = [
    "All",
    "General",
    "Dogs",
    "Cats",
    "Health",
    "Training",
    "Adoption",
  ];

  const posts = [
    {
      id: 1,
      avatar: "👨🏻",
      name: "Rahul Sharma",
      time: "2 hours ago",
      category: "Dogs",
      title: "Meet Bruno! 🐶",
      text: "Finally brought my little Labrador home today. He's already exploring every corner of the house!",
      pet: "🐕",
      likes: 24,
      comments: 8,
    },
    {
      id: 2,
      avatar: "👩🏻",
      name: "Priya Mehta",
      time: "5 hours ago",
      category: "Cats",
      title: "My cat discovered the cardboard box 😂",
      text: "Bought Luna a brand new bed. She obviously prefers the box it came in.",
      pet: "🐱",
      likes: 41,
      comments: 13,
    },
    {
      id: 3,
      avatar: "👨🏽",
      name: "Arjun Patel",
      time: "Yesterday",
      category: "Training",
      title: "Training tip that actually worked!",
      text: "Using small treats and positive reinforcement made a huge difference while teaching my dog to sit and stay.",
      pet: "🦮",
      likes: 35,
      comments: 11,
    },
    {
      id: 4,
      avatar: "👩🏼",
      name: "Sneha Kapoor",
      time: "Yesterday",
      category: "Health",
      title: "Pet vaccination reminder 💉",
      text: "Don't forget to keep your pet's vaccination schedule updated. Prevention is always better than treatment.",
      pet: "🐾",
      likes: 29,
      comments: 6,
    },
  ];

  const filteredPosts =
    activeCategory === "All"
      ? posts
      : posts.filter((post) => post.category === activeCategory);

  const toggleLike = (id) => {
    setLikedPosts((current) =>
      current.includes(id)
        ? current.filter((postId) => postId !== id)
        : [...current, id]
    );
  };

  return (
    <div className="community-page">

      {/* HERO */}
      <section className="community-hero">

        <div className="community-hero-content">

          <span className="community-badge">
            🐾 PETVERSE COMMUNITY
          </span>

          <h1>
            Pet parents
            <span>come together.</span>
          </h1>

          <p>
            Share your pet's journey, ask questions, exchange advice,
            and connect with thousands of fellow pet lovers.
          </p>

          <button
            className="community-main-btn"
            onClick={() =>
              document
                .getElementById("community-feed")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Explore Community →
          </button>

        </div>

        <div className="community-hero-art">

          <div className="community-orbit orbit-one"></div>
          <div className="community-orbit orbit-two"></div>

          <div className="community-big-pet">
            🐶
          </div>

          <div className="community-floating floating-one">
            🐱
          </div>

          <div className="community-floating floating-two">
            🐰
          </div>

          <div className="community-floating floating-three">
            🐾
          </div>

        </div>

      </section>

      {/* COMMUNITY STATS */}
      <section className="community-stats">

        <div className="community-stat">
          <strong>12K+</strong>
          <span>Pet Parents</span>
        </div>

        <div className="community-stat">
          <strong>8.5K+</strong>
          <span>Discussions</span>
        </div>

        <div className="community-stat">
          <strong>25K+</strong>
          <span>Pet Stories</span>
        </div>

        <div className="community-stat">
          <strong>4.9/5</strong>
          <span>Community Rating</span>
        </div>

      </section>

      {/* MAIN COMMUNITY AREA */}
      <section
        className="community-main"
        id="community-feed"
      >

        {/* LEFT SIDE */}
        <div className="community-feed">

          <div className="community-section-heading">

            <div>
              <span>COMMUNITY FEED</span>
              <h2>What's happening?</h2>
            </div>

            <button
              className="create-post-btn"
              onClick={() =>
                alert("Create post feature coming soon! 🐾")
              }
            >
              + Create Post
            </button>

          </div>

          {/* CATEGORY FILTER */}
          <div className="community-categories">

            {categories.map((category) => (
              <button
                key={category}
                className={
                  activeCategory === category
                    ? "category-active"
                    : ""
                }
                onClick={() =>
                  setActiveCategory(category)
                }
              >
                {category}
              </button>
            ))}

          </div>

          {/* POSTS */}
          <div className="community-posts">

            {filteredPosts.length === 0 ? (
              <div className="no-posts">
                🐾
                <h3>No posts found</h3>
                <p>Try selecting another category.</p>
              </div>
            ) : (
              filteredPosts.map((post) => {

                const liked = likedPosts.includes(post.id);

                return (
                  <article
                    className="community-post"
                    key={post.id}
                  >

                    {/* POST HEADER */}
                    <div className="post-header">

                      <div className="post-user-avatar">
                        {post.avatar}
                      </div>

                      <div className="post-user-info">
                        <strong>{post.name}</strong>
                        <span>
                          {post.time} · {post.category}
                        </span>
                      </div>

                      <button className="post-menu">
                        ⋯
                      </button>

                    </div>

                    {/* POST CONTENT */}
                    <div className="post-content">

                      <h3>{post.title}</h3>

                      <p>{post.text}</p>

                    </div>

                    {/* PET VISUAL */}
                    <div className="post-pet-image">
                      <span>{post.pet}</span>
                    </div>

                    {/* POST ACTIONS */}
                    <div className="post-actions">

                      <button
                        className={
                          liked ? "liked" : ""
                        }
                        onClick={() =>
                          toggleLike(post.id)
                        }
                      >
                        {liked ? "❤️" : "🤍"}
                        {post.likes +
                          (liked ? 1 : 0)}
                      </button>

                      <button>
                        💬 {post.comments}
                      </button>

                      <button>
                        🔗 Share
                      </button>

                    </div>

                  </article>
                );
              })
            )}

          </div>

        </div>

        {/* RIGHT SIDEBAR */}
        <aside className="community-sidebar">

          {/* JOIN CARD */}
          <div className="join-community-card">

            <div className="join-icon">
              🐾
            </div>

            <h3>Join the conversation</h3>

            <p>
              Share your pet's story and meet other animal lovers.
            </p>

            <button
              onClick={() =>
                alert("Registration is available from the navbar!")
              }
            >
              Join PetVerse
            </button>

          </div>

          {/* POPULAR TOPICS */}
          <div className="topics-card">

            <div className="sidebar-title">
              <h3>🔥 Popular Topics</h3>
            </div>

            <div className="topic">
              <span>🐶</span>

              <div>
                <strong>Dog Training</strong>
                <small>1.8K discussions</small>
              </div>

              <b>→</b>
            </div>

            <div className="topic">
              <span>🐱</span>

              <div>
                <strong>Cat Care</strong>
                <small>1.2K discussions</small>
              </div>

              <b>→</b>
            </div>

            <div className="topic">
              <span>🥗</span>

              <div>
                <strong>Pet Nutrition</strong>
                <small>940 discussions</small>
              </div>

              <b>→</b>
            </div>

            <div className="topic">
              <span>🏠</span>

              <div>
                <strong>Pet Adoption</strong>
                <small>720 discussions</small>
              </div>

              <b>→</b>
            </div>

          </div>

          {/* COMMUNITY RULES */}
          <div className="rules-card">

            <h3>💛 Community Guidelines</h3>

            <p>
              Be kind, respect other pet parents, and always
              put animal welfare first.
            </p>

            <button>
              Read Guidelines →
            </button>

          </div>

        </aside>

      </section>

      {/* BOTTOM CTA */}
      <section className="community-cta">

        <div className="cta-paw">
          🐾
        </div>

        <div>
          <span>YOUR STORY MATTERS</span>

          <h2>
            Every pet has a story.
            <br />
            What's yours?
          </h2>

          <p>
            Connect with people who understand why your pet
            isn't "just a pet".
          </p>
        </div>

        <button
          onClick={() =>
            alert("Create post feature coming soon! 🐾")
          }
        >
          Share Your Story →
        </button>

      </section>

    </div>
  );
}

export default Community;