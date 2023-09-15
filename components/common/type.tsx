export interface ClientList {
  status: boolean;
  responseCode: number;
  data: Datum[];
  industry_stats: IndustryStats;
  message: string;
}

export interface Datum {
  client_first_name: string;
  client_last_name: string;
  client_gender: null;
  client_email: string;
  client_industry: ClientIndustry;
  status: boolean;
  total_investment: number;
}

export interface ClientIndustry {
  id: number;
  industry_name: string;
  industry_description: string;
}

export interface IndustryStats {
  Agriculture: Agriculture;
  "Civil Servant": Agriculture;
  Service: Agriculture;
  Business: Agriculture;
}

export interface Agriculture {
  count: number;
  total_investment: number;
}
