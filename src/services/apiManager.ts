
import { weatherApi } from './weatherApi';
import { currencyApi } from './currencyApi';
import { locationApi } from './locationApi';
import { newsApi } from './newsApi';
import { countryApi } from './countryApi';
import { quotesApi } from './quotesApi';
import { timezoneApi } from './timezoneApi';

export interface ApiStatus {
  service: string;
  status: 'online' | 'offline' | 'unknown';
  lastChecked: Date;
}

export class ApiManager {
  private static instance: ApiManager;
  private serviceStatus: Map<string, ApiStatus> = new Map();

  static getInstance(): ApiManager {
    if (!ApiManager.instance) {
      ApiManager.instance = new ApiManager();
    }
    return ApiManager.instance;
  }

  async checkServiceStatus(serviceName: string): Promise<'online' | 'offline'> {
    try {
      let testCall: Promise<any>;
      
      switch (serviceName) {
        case 'weather':
          testCall = weatherApi.getWeatherByCity('London');
          break;
        case 'currency':
          testCall = currencyApi.getExchangeRates();
          break;
        case 'location':
          testCall = locationApi.searchLocations('Paris');
          break;
        case 'news':
          testCall = newsApi.getTravelNews(1);
          break;
        case 'country':
          testCall = countryApi.getCountryInfo('US');
          break;
        case 'quotes':
          testCall = quotesApi.getRandomQuote();
          break;
        case 'timezone':
          testCall = timezoneApi.getTimeByTimezone('UTC');
          break;
        default:
          return 'unknown' as any;
      }

      await Promise.race([
        testCall,
        new Promise((_, reject) => setTimeout(() => reject(new Error('Timeout')), 5000))
      ]);
      
      this.serviceStatus.set(serviceName, {
        service: serviceName,
        status: 'online',
        lastChecked: new Date()
      });
      
      return 'online';
    } catch (error) {
      this.serviceStatus.set(serviceName, {
        service: serviceName,
        status: 'offline',
        lastChecked: new Date()
      });
      
      return 'offline';
    }
  }

  getServiceStatus(serviceName: string): ApiStatus | undefined {
    return this.serviceStatus.get(serviceName);
  }

  getAllServiceStatuses(): ApiStatus[] {
    return Array.from(this.serviceStatus.values());
  }

  async checkAllServices(): Promise<ApiStatus[]> {
    const services = ['weather', 'currency', 'location', 'news', 'country', 'quotes', 'timezone'];
    
    await Promise.allSettled(
      services.map(service => this.checkServiceStatus(service))
    );
    
    return this.getAllServiceStatuses();
  }
}

export const apiManager = ApiManager.getInstance();

// Export all APIs
export {
  weatherApi,
  currencyApi,
  locationApi,
  newsApi,
  countryApi,
  quotesApi,
  timezoneApi
};
