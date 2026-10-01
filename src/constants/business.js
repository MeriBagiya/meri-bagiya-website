export const BUSINESS_NAME = 'Meri Bagiya';
export const BUSINESS_PHONE = '+91-9220404309';
export const BUSINESS_EMAIL = 'contact@meribagiya.com';

export const BUSINESS_ADDRESS = {
  '@type': 'PostalAddress',
  streetAddress: 'Near Ace Aspire, Amrapali Leisure Valley',
  addressLocality: 'Greater Noida',
  addressRegion: 'Uttar Pradesh',
  postalCode: '201318',
  addressCountry: 'IN',
};

export const BUSINESS_GEO = {
  '@type': 'GeoCoordinates',
  latitude: '28.5899943',
  longitude: '77.4281686',
};

export const BUSINESS_ADDRESS_LINE = `${BUSINESS_ADDRESS.streetAddress}, ${BUSINESS_ADDRESS.addressLocality}, ${BUSINESS_ADDRESS.addressRegion} ${BUSINESS_ADDRESS.postalCode}`;
