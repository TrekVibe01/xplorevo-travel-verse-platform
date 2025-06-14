
const NOMINATIM_BASE_URL = 'https://nominatim.openstreetmap.org';

export interface LocationData {
  name: string;
  displayName: string;
  lat: number;
  lon: number;
  country: string;
  countryCode: string;
  state?: string;
  city?: string;
}

export interface NearbyPlace {
  name: string;
  type: string;
  distance?: number;
  lat: number;
  lon: number;
}

export const locationApi = {
  async searchLocations(query: string): Promise<LocationData[]> {
    try {
      const response = await fetch(
        `${NOMINATIM_BASE_URL}/search?format=json&q=${encodeURIComponent(query)}&limit=5&addressdetails=1`,
        {
          headers: {
            'User-Agent': 'TravelApp/1.0'
          }
        }
      );
      
      if (!response.ok) {
        console.warn('Location API error:', response.status);
        return [];
      }
      
      const data = await response.json();
      
      return data.map((item: any) => ({
        name: item.name || item.display_name.split(',')[0],
        displayName: item.display_name,
        lat: parseFloat(item.lat),
        lon: parseFloat(item.lon),
        country: item.address?.country || '',
        countryCode: item.address?.country_code || '',
        state: item.address?.state,
        city: item.address?.city || item.address?.town || item.address?.village
      }));
    } catch (error) {
      console.error('Failed to search locations:', error);
      return [];
    }
  },

  async reverseGeocode(lat: number, lon: number): Promise<LocationData | null> {
    try {
      const response = await fetch(
        `${NOMINATIM_BASE_URL}/reverse?format=json&lat=${lat}&lon=${lon}&addressdetails=1`,
        {
          headers: {
            'User-Agent': 'TravelApp/1.0'
          }
        }
      );
      
      if (!response.ok) {
        console.warn('Reverse geocoding API error:', response.status);
        return null;
      }
      
      const data = await response.json();
      
      return {
        name: data.name || data.display_name.split(',')[0],
        displayName: data.display_name,
        lat: parseFloat(data.lat),
        lon: parseFloat(data.lon),
        country: data.address?.country || '',
        countryCode: data.address?.country_code || '',
        state: data.address?.state,
        city: data.address?.city || data.address?.town || data.address?.village
      };
    } catch (error) {
      console.error('Failed to reverse geocode:', error);
      return null;
    }
  },

  getCurrentLocation(): Promise<GeolocationPosition> {
    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        reject(new Error('Geolocation is not supported'));
        return;
      }

      navigator.geolocation.getCurrentPosition(resolve, reject, {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 300000
      });
    });
  }
};
