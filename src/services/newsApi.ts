
// Using RSS2JSON service to fetch travel news from various sources
const RSS2JSON_BASE_URL = 'https://api.rss2json.com/v1/api.json';

export interface NewsArticle {
  title: string;
  description: string;
  link: string;
  publishedAt: string;
  source: string;
  thumbnail?: string;
}

export const newsApi = {
  async getTravelNews(count = 10): Promise<NewsArticle[]> {
    try {
      // Using BBC Travel RSS feed as an example
      const rssUrl = 'http://feeds.bbci.co.uk/news/world/rss.xml';
      const response = await fetch(
        `${RSS2JSON_BASE_URL}?rss_url=${encodeURIComponent(rssUrl)}&api_key=public&count=${count}`
      );
      
      if (!response.ok) {
        console.warn('News API error:', response.status);
        return [];
      }
      
      const data = await response.json();
      
      if (data.status !== 'ok') {
        console.warn('RSS feed error:', data.message);
        return [];
      }
      
      return data.items.map((item: any) => ({
        title: item.title,
        description: item.description?.replace(/<[^>]*>/g, '') || '',
        link: item.link,
        publishedAt: item.pubDate,
        source: data.feed?.title || 'BBC News',
        thumbnail: item.thumbnail || item.enclosure?.link
      }));
    } catch (error) {
      console.error('Failed to fetch travel news:', error);
      return [];
    }
  },

  async getDestinationNews(destination: string, count = 5): Promise<NewsArticle[]> {
    try {
      // This would typically require a paid news API for search functionality
      // For demo purposes, we'll return the general travel news
      const news = await this.getTravelNews(count);
      return news.filter(article => 
        article.title.toLowerCase().includes(destination.toLowerCase()) ||
        article.description.toLowerCase().includes(destination.toLowerCase())
      );
    } catch (error) {
      console.error('Failed to fetch destination news:', error);
      return [];
    }
  }
};
