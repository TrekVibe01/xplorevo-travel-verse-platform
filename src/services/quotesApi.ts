
// Using a free quotes API service
const QUOTES_BASE_URL = 'https://api.quotable.io';

export interface Quote {
  id: string;
  content: string;
  author: string;
  tags: string[];
  length: number;
}

export const quotesApi = {
  async getRandomQuote(): Promise<Quote | null> {
    try {
      const response = await fetch(`${QUOTES_BASE_URL}/random`);
      
      if (!response.ok) {
        console.warn('Quotes API error:', response.status);
        return null;
      }
      
      const data = await response.json();
      
      return {
        id: data._id,
        content: data.content,
        author: data.author,
        tags: data.tags || [],
        length: data.length
      };
    } catch (error) {
      console.error('Failed to fetch random quote:', error);
      return null;
    }
  },

  async getQuotesByTag(tag: string): Promise<Quote[]> {
    try {
      const response = await fetch(`${QUOTES_BASE_URL}/quotes?tags=${encodeURIComponent(tag)}&limit=5`);
      
      if (!response.ok) {
        console.warn('Quotes API error:', response.status);
        return [];
      }
      
      const data = await response.json();
      
      return data.results.map((quote: any) => ({
        id: quote._id,
        content: quote.content,
        author: quote.author,
        tags: quote.tags || [],
        length: quote.length
      }));
    } catch (error) {
      console.error('Failed to fetch quotes by tag:', error);
      return [];
    }
  },

  async getInspirationalQuotes(): Promise<Quote[]> {
    const inspirationalTags = ['motivational', 'inspirational', 'wisdom', 'life'];
    const randomTag = inspirationalTags[Math.floor(Math.random() * inspirationalTags.length)];
    return this.getQuotesByTag(randomTag);
  }
};
