
const RESTCOUNTRIES_BASE_URL = 'https://restcountries.com/v3.1';

export interface CountryInfo {
  name: string;
  capital: string[];
  population: number;
  region: string;
  subregion: string;
  languages: Record<string, string>;
  currencies: Record<string, { name: string; symbol: string }>;
  timezones: string[];
  flag: string;
  flagEmoji: string;
  borders: string[];
  area: number;
}

export const countryApi = {
  async getCountryInfo(countryCode: string): Promise<CountryInfo | null> {
    try {
      const response = await fetch(`${RESTCOUNTRIES_BASE_URL}/alpha/${countryCode}`);
      
      if (!response.ok) {
        console.warn('Country API error:', response.status);
        return null;
      }
      
      const data = await response.json();
      const country = data[0];
      
      return {
        name: country.name.common,
        capital: country.capital || [],
        population: country.population,
        region: country.region,
        subregion: country.subregion,
        languages: country.languages || {},
        currencies: country.currencies || {},
        timezones: country.timezones || [],
        flag: country.flags?.png || country.flags?.svg || '',
        flagEmoji: country.flag || '',
        borders: country.borders || [],
        area: country.area || 0
      };
    } catch (error) {
      console.error('Failed to fetch country info:', error);
      return null;
    }
  },

  async searchCountries(name: string): Promise<CountryInfo[]> {
    try {
      const response = await fetch(`${RESTCOUNTRIES_BASE_URL}/name/${encodeURIComponent(name)}`);
      
      if (!response.ok) {
        console.warn('Country search API error:', response.status);
        return [];
      }
      
      const data = await response.json();
      
      return data.map((country: any) => ({
        name: country.name.common,
        capital: country.capital || [],
        population: country.population,
        region: country.region,
        subregion: country.subregion,
        languages: country.languages || {},
        currencies: country.currencies || {},
        timezones: country.timezones || [],
        flag: country.flags?.png || country.flags?.svg || '',
        flagEmoji: country.flag || '',
        borders: country.borders || [],
        area: country.area || 0
      }));
    } catch (error) {
      console.error('Failed to search countries:', error);
      return [];
    }
  },

  async getAllCountries(): Promise<CountryInfo[]> {
    try {
      const response = await fetch(`${RESTCOUNTRIES_BASE_URL}/all?fields=name,capital,population,region,flag,cca2`);
      
      if (!response.ok) {
        console.warn('Countries API error:', response.status);
        return [];
      }
      
      const data = await response.json();
      
      return data.map((country: any) => ({
        name: country.name.common,
        capital: country.capital || [],
        population: country.population,
        region: country.region,
        subregion: '',
        languages: {},
        currencies: {},
        timezones: [],
        flag: country.flags?.png || country.flags?.svg || '',
        flagEmoji: country.flag || '',
        borders: [],
        area: 0
      }));
    } catch (error) {
      console.error('Failed to fetch all countries:', error);
      return [];
    }
  }
};
