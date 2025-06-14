
const WEATHER_API_KEY = 'demo_key'; // Users can replace with their own free API key
const WEATHER_BASE_URL = 'https://api.openweathermap.org/data/2.5';

export interface WeatherData {
  location: string;
  temperature: number;
  description: string;
  humidity: number;
  windSpeed: number;
  icon: string;
}

export const weatherApi = {
  async getWeatherByCity(city: string): Promise<WeatherData | null> {
    try {
      const response = await fetch(
        `${WEATHER_BASE_URL}/weather?q=${encodeURIComponent(city)}&appid=${WEATHER_API_KEY}&units=metric`
      );
      
      if (!response.ok) {
        console.warn('Weather API error:', response.status);
        return null;
      }
      
      const data = await response.json();
      
      return {
        location: data.name,
        temperature: Math.round(data.main.temp),
        description: data.weather[0].description,
        humidity: data.main.humidity,
        windSpeed: data.wind?.speed || 0,
        icon: data.weather[0].icon
      };
    } catch (error) {
      console.error('Failed to fetch weather data:', error);
      return null;
    }
  },

  async getWeatherByCoords(lat: number, lon: number): Promise<WeatherData | null> {
    try {
      const response = await fetch(
        `${WEATHER_BASE_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
      );
      
      if (!response.ok) {
        console.warn('Weather API error:', response.status);
        return null;
      }
      
      const data = await response.json();
      
      return {
        location: data.name,
        temperature: Math.round(data.main.temp),
        description: data.weather[0].description,
        humidity: data.main.humidity,
        windSpeed: data.wind?.speed || 0,
        icon: data.weather[0].icon
      };
    } catch (error) {
      console.error('Failed to fetch weather data:', error);
      return null;
    }
  }
};
