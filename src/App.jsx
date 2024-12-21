import LongForm from './components/LongForm';
import Shorts from './components/Shorts';

function VideoFeed() {
  const longFormVideos = [
    {
      title: "React Without Build Tool",
      url: "https://www.youtube.com/embed/jibQnzuwPkU",
      duration: "15:30",
      views: "1M",
      channel: "Velmurugan MG"
    },
    {
      title: "Learn Async and Defer",
      url: "https://www.youtube.com/embed/s5WtnwtbKT8",
      duration: "20:45",
      views: "8K",
      channel: "Velmurugan MG"
    },
    {
      title: "Learn Async and Defer",
      url: "https://www.youtube.com/embed/s5WtnwtbKT8",
      duration: "20:45",
      views: "8K",
      channel: "Velmurugan MG"
    }
  ];

  const shortsVideos = [
    {
      title: "Quick React Tip!",
      url: "https://www.youtube.com/embed/AeJYxNNG1WU",
      views: "500K",
      likes: "50K"
    },
    {
      title: "CSS Trick in 30s",
      url: "https://www.youtube.com/embed/1M71Hy0RjtA",
      views: "1M",
      likes: "100K"
    },
    {
      title: "Learn Subgrid",
      url: "https://www.youtube.com/embed/G8mWXKS1eKQ",
      views: "9012",
      likes: "901"
    }
  ];

  const trendingVideos = [
    {
      title: "🔥 The difficult year of big releases",
      url: "https://www.youtube.com/embed/-BQ_g6iGhkw",
      duration: "25:15",
      views: "2.5M",
      channel: "Tech Trends"
    },
    {
      title: "The Complete DevOps Roadmap",
      url: "https://www.youtube.com/embed/6GQRb4fGvtk",
      duration: "18:30",
      views: "1.2M",
      channel: "Code Master"
    }
  ];

  return (
    <div className="container mx-auto p-4">
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">
          Trending Now
        </h2>
        <div className="flex flex-wrap gap-4">
          {trendingVideos.map((video, index) => (
            <LongForm 
              key={`trending-${index}`} 
              {...video} 
            />
          ))}
        </div>
      </section>
      {/* Long Form Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Recommended</h2>
        <div className="flex flex-wrap gap-4">
          {longFormVideos.map((video, index) => (
            <LongForm key={index} {...video} />
          ))}
        </div>
      </section>

      {/* Shorts Section */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Shorts</h2>
        <div className="flex gap-4 overflow-x-auto pb-4">
          {shortsVideos.map((video, index) => (
            <Shorts key={index} {...video} /> 
          ))}
        </div>
      </section>
    </div>
  );
}

export default VideoFeed;