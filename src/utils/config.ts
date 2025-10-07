export interface BankConfig {
  bankName: string;
  bankTitle: string;
  contact: {
    headOffice: string;
    phones: string[];
    email: string;
  };
  smartsuppKey: string;
  userLoginUrl: string;
  userRegistrationUrl: string;
  security: {
    sslEncryption: string;
  };
  regulations: string[];
  socialMedia: {
    facebook: string;
    twitter: string;
    linkedin: string;
    instagram: string;
  };
}

let configCache: BankConfig | null = null;

export async function loadConfig(): Promise<BankConfig> {
  if (configCache) {
    return configCache;
  }

  const response = await fetch('/config.json?t=' + Date.now());
  configCache = await response.json();
  return configCache!;
}

export function clearConfigCache() {
  configCache = null;
}
