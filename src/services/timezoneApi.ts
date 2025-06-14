
const WORLDTIME_BASE_URL = 'http://worldtimeapi.org/api';

export interface TimeZoneInfo {
  timezone: string;
  datetime: string;
  utcOffset: string;
  dayOfWeek: number;
  dayOfYear: number;
  weekNumber: number;
  dst: boolean;
  abbreviation: string;
}

export const timezoneApi = {
  async getTimeByTimezone(timezone: string): Promise<TimeZoneInfo | null> {
    try {
      const response = await fetch(`${WORLDTIME_BASE_URL}/timezone/${timezone}`);
      
      if (!response.ok) {
        console.warn('Timezone API error:', response.status);
        return null;
      }
      
      const data = await response.json();
      
      return {
        timezone: data.timezone,
        datetime: data.datetime,
        utcOffset: data.utc_offset,
        dayOfWeek: data.day_of_week,
        dayOfYear: data.day_of_year,
        weekNumber: data.week_number,
        dst: data.dst,
        abbreviation: data.abbreviation
      };
    } catch (error) {
      console.error('Failed to fetch timezone info:', error);
      return null;
    }
  },

  async getTimeByLocation(lat: number, lon: number): Promise<TimeZoneInfo | null> {
    try {
      // Using a fallback approach since lat/lon API might not be available
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      return this.getTimeByTimezone(timezone);
    } catch (error) {
      console.error('Failed to fetch time by location:', error);
      return null;
    }
  },

  getCommonTimezones(): string[] {
    return [
      'America/New_York',
      'America/Los_Angeles',
      'America/Chicago',
      'Europe/London',
      'Europe/Paris',
      'Europe/Berlin',
      'Asia/Tokyo',
      'Asia/Shanghai',
      'Asia/Kolkata',
      'Australia/Sydney',
      'Africa/Cairo',
      'America/Sao_Paulo'
    ];
  },

  formatTime(datetime: string): string {
    return new Date(datetime).toLocaleString();
  }
};
