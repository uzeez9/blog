// src/components/home/ArticleCard.jsx
function ArticleCard({ article }) {
    return (
      <div className="bg-white rounded-lg overflow-hidden shadow-md">
        <div className="h-48 bg-gray-200">
          {/* Image will go here */}
        </div>
        <div className="p-4">
          <h3 className="font-bold text-lg mb-2">{article.title}</h3>
          {article.category && (
            <span className="bg-orange-500 text-white px-2 py-1 rounded-full text-sm">
              {article.category}
            </span>
          )}
        </div>
      </div>
    );
  }
  
  export default ArticleCard;