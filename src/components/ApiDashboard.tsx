
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Cloud, 
  DollarSign, 
  MapPin, 
  Newspaper, 
  Globe, 
  Quote, 
  Clock,
  CheckCircle,
  XCircle,
  RefreshCw
} from 'lucide-react';
import { apiManager, type ApiStatus } from '@/services/apiManager';
import { weatherApi } from '@/services/weatherApi';
import { currencyApi } from '@/services/currencyApi';
import { quotesApi } from '@/services/quotesApi';

const ApiDashboard = () => {
  const [apiStatuses, setApiStatuses] = useState<ApiStatus[]>([]);
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState<any>(null);
  const [currencyData, setCurrencyData] = useState<any>(null);
  const [quote, setQuote] = useState<any>(null);

  const fetchApiStatuses = async () => {
    setLoading(true);
    try {
      const statuses = await apiManager.checkAllServices();
      setApiStatuses(statuses);
    } catch (error) {
      console.error('Failed to check API statuses:', error);
    } finally {
      setLoading(false);
    }
  };

  const loadSampleData = async () => {
    try {
      const [weather, currency, randomQuote] = await Promise.allSettled([
        weatherApi.getWeatherByCity('New York'),
        currencyApi.getExchangeRates('USD'),
        quotesApi.getRandomQuote()
      ]);

      if (weather.status === 'fulfilled' && weather.value) {
        setWeatherData(weather.value);
      }
      if (currency.status === 'fulfilled' && currency.value) {
        setCurrencyData(currency.value);
      }
      if (randomQuote.status === 'fulfilled' && randomQuote.value) {
        setQuote(randomQuote.value);
      }
    } catch (error) {
      console.error('Failed to load sample data:', error);
    }
  };

  useEffect(() => {
    fetchApiStatuses();
    loadSampleData();
  }, []);

  const getServiceIcon = (serviceName: string) => {
    const iconMap: Record<string, React.ReactNode> = {
      weather: <Cloud className="h-4 w-4" />,
      currency: <DollarSign className="h-4 w-4" />,
      location: <MapPin className="h-4 w-4" />,
      news: <Newspaper className="h-4 w-4" />,
      country: <Globe className="h-4 w-4" />,
      quotes: <Quote className="h-4 w-4" />,
      timezone: <Clock className="h-4 w-4" />
    };
    return iconMap[serviceName] || <Globe className="h-4 w-4" />;
  };

  const getStatusBadge = (status: 'online' | 'offline' | 'unknown') => {
    const config = {
      online: { color: 'bg-green-500', icon: <CheckCircle className="h-3 w-3" />, text: 'Online' },
      offline: { color: 'bg-red-500', icon: <XCircle className="h-3 w-3" />, text: 'Offline' },
      unknown: { color: 'bg-gray-500', icon: <RefreshCw className="h-3 w-3" />, text: 'Unknown' }
    };
    
    const { color, icon, text } = config[status];
    
    return (
      <Badge variant="secondary" className={`${color} text-white`}>
        {icon}
        <span className="ml-1">{text}</span>
      </Badge>
    );
  };

  return (
    <div className="container mx-auto p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">API Dashboard</h1>
        <p className="text-gray-600">Monitor and test all integrated free APIs</p>
      </div>

      <Tabs defaultValue="status" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="status">API Status</TabsTrigger>
          <TabsTrigger value="examples">Live Examples</TabsTrigger>
          <TabsTrigger value="documentation">API Info</TabsTrigger>
        </TabsList>
        
        <TabsContent value="status">
          <div className="mb-4">
            <Button 
              onClick={fetchApiStatuses} 
              disabled={loading}
              className="flex items-center gap-2"
            >
              <RefreshCw className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
              Refresh Status
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {apiStatuses.map((status) => (
              <Card key={status.service}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium capitalize flex items-center gap-2">
                    {getServiceIcon(status.service)}
                    {status.service} API
                  </CardTitle>
                  {getStatusBadge(status.status)}
                </CardHeader>
                <CardContent>
                  <div className="text-xs text-muted-foreground">
                    Last checked: {status.lastChecked.toLocaleTimeString()}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="examples">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {weatherData && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Cloud className="h-5 w-5" />
                    Weather Data
                  </CardTitle>
                  <CardDescription>Current weather for {weatherData.location}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-2xl font-bold">{weatherData.temperature}°C</p>
                    <p className="text-sm text-muted-foreground capitalize">{weatherData.description}</p>
                    <div className="flex justify-between text-sm">
                      <span>Humidity: {weatherData.humidity}%</span>
                      <span>Wind: {weatherData.windSpeed} m/s</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {currencyData && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <DollarSign className="h-5 w-5" />
                    Exchange Rates
                  </CardTitle>
                  <CardDescription>Base currency: {currencyData.base}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {Object.entries(currencyData.rates)
                      .slice(0, 5)
                      .map(([currency, rate]) => (
                        <div key={currency} className="flex justify-between text-sm">
                          <span>{currency}</span>
                          <span>{(rate as number).toFixed(4)}</span>
                        </div>
                      ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {quote && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Quote className="h-5 w-5" />
                    Inspirational Quote
                  </CardTitle>
                  <CardDescription>Random quote of the day</CardDescription>
                </CardHeader>
                <CardContent>
                  <blockquote className="text-sm italic mb-2">"{quote.content}"</blockquote>
                  <p className="text-xs text-muted-foreground">— {quote.author}</p>
                </CardContent>
              </Card>
            )}
          </div>
        </TabsContent>

        <TabsContent value="documentation">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Integrated Free APIs</CardTitle>
                <CardDescription>Complete list of available APIs and their features</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: 'OpenWeatherMap', feature: 'Weather data by city/coordinates', limit: '1000 calls/day' },
                    { name: 'ExchangeRate-API', feature: 'Currency conversion rates', limit: '1500 requests/month' },
                    { name: 'Nominatim/OSM', feature: 'Geocoding and location search', limit: '1 request/second' },
                    { name: 'RSS2JSON', feature: 'Travel news from RSS feeds', limit: '10000 requests/day' },
                    { name: 'REST Countries', feature: 'Country information', limit: 'Unlimited' },
                    { name: 'Quotable', feature: 'Inspirational quotes', limit: 'Unlimited' },
                    { name: 'WorldTimeAPI', feature: 'Timezone information', limit: 'Unlimited' }
                  ].map((api) => (
                    <div key={api.name} className="border-l-4 border-blue-500 pl-4">
                      <h4 className="font-semibold">{api.name}</h4>
                      <p className="text-sm text-gray-600">{api.feature}</p>
                      <p className="text-xs text-green-600">Limit: {api.limit}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Setup Instructions</CardTitle>
                <CardDescription>How to get your own API keys for enhanced limits</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-sm">
                  <div>
                    <h4 className="font-semibold mb-2">OpenWeatherMap (Weather)</h4>
                    <p>1. Sign up at openweathermap.org</p>
                    <p>2. Get your free API key (60 calls/minute)</p>
                    <p>3. Replace 'demo_key' in weatherApi.ts</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Other APIs</h4>
                    <p>Most other APIs don't require keys for basic usage, but you can get enhanced limits by registering:</p>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      <li>RSS2JSON: api.rss2json.com</li>
                      <li>NewsAPI: newsapi.org (for more news sources)</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ApiDashboard;
