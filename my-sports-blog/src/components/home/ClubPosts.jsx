// src/components/home/ClubPosts.jsx
function ClubPosts({ posts }) {
    return (
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">Club Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <ArticleCard key={post.id} article={post} />
          ))}
        </div>
      </section>
    );
  }

  export default ClubPosts;