import PropTypes from 'prop-types';

function LongForm({ title, url, duration, views, channel }) {
  return (
    <div className="w-[calc(33%-8px)] min-w-[300px]">
      <div className="aspect-video bg-black mb-2">
        <iframe 
          src={url} 
          title={title} 
          className="w-full h-full" 
          allowFullScreen
        ></iframe>
      </div>
      <div className="p-2">
        <h3 className="font-semibold truncate">{title}</h3>
        <div className="text-sm text-gray-600">
          <p>{channel}</p>
          <div className="flex gap-2">
            <span>{views} views</span>
            <span>•</span>
            <span>{duration}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

LongForm.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  views: PropTypes.string.isRequired,
  channel: PropTypes.string.isRequired
};

export default LongForm;