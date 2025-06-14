
const CURRENCY_BASE_URL = 'https://api.exchangerate-api.com/v4/latest';

export interface ExchangeRates {
  base: string;
  rates: Record<string, number>;
  date: string;
}

export interface CurrencyConversion {
  from: string;
  to: string;
  amount: number;
  convertedAmount: number;
  rate: number;
}

export const currencyApi = {
  async getExchangeRates(baseCurrency = 'USD'): Promise<ExchangeRates | null> {
    try {
      const response = await fetch(`${CURRENCY_BASE_URL}/${baseCurrency}`);
      
      if (!response.ok) {
        console.warn('Currency API error:', response.status);
        return null;
      }
      
      const data = await response.json();
      
      return {
        base: data.base,
        rates: data.rates,
        date: data.date
      };
    } catch (error) {
      console.error('Failed to fetch exchange rates:', error);
      return null;
    }
  },

  async convertCurrency(
    amount: number,
    fromCurrency: string,
    toCurrency: string
  ): Promise<CurrencyConversion | null> {
    try {
      const rates = await this.getExchangeRates(fromCurrency);
      if (!rates || !rates.rates[toCurrency]) {
        return null;
      }

      const rate = rates.rates[toCurrency];
      const convertedAmount = amount * rate;

      return {
        from: fromCurrency,
        to: toCurrency,
        amount,
        convertedAmount: Math.round(convertedAmount * 100) / 100,
        rate
      };
    } catch (error) {
      console.error('Failed to convert currency:', error);
      return null;
    }
  },

  getPopularCurrencies(): string[] {
    return ['USD', 'EUR', 'GBP', 'JPY', 'AUD', 'CAD', 'CHF', 'CNY', 'INR', 'SGD'];
  }
};
