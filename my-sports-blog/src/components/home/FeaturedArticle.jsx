// src/components/home/FeaturedArticle.jsx
function FeaturedArticle({ article }) {
    return (
      <div className="relative h-[400px] rounded-lg overflow-hidden mb-8">
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
        <div className="absolute bottom-0 left-0 p-6">
          <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm">
            {article.category}
          </span>
          <h1 className="text-white text-3xl font-bold mt-2">{article.title}</h1>
          <p className="text-gray-200 mt-2">{article.subtitle}</p>
        </div>
      </div>
    );
  }
  
  export default FeaturedArticle;