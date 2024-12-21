import PropTypes from 'prop-types';

function Shorts({ title, url, views, likes }) {
  return (
    <div className="flex-shrink-0 w-[200px]">
      <div className="aspect-[9/16] bg-black mb-2">
        <iframe 
          src={url} 
          title={title} 
          className="w-full h-full" 
          frameBorder="0" 
          allowFullScreen
        ></iframe>
      </div>
      <div className="p-2">
        <h3 className="font-semibold truncate">{title}</h3>
        <div className="text-sm text-gray-600 flex gap-2">
          <span>{views} views</span>
          <span>•</span>
          <span>{likes} likes</span>
        </div>
      </div>
    </div>
  );
}

Shorts.propTypes = {  
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  views: PropTypes.string.isRequired,
  likes: PropTypes.string.isRequired
};

export default Shorts;