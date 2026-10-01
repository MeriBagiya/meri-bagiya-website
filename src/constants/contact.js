export const WHATSAPP_NUMBER = '919220404309';
export const WHATSAPP_BASE_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
export const DEFAULT_WHATSAPP_MESSAGE = 'Hi! I visited your website and would like to know more about your plants and garden services.';
export const PHONE_TEL = `tel:+${WHATSAPP_NUMBER}`;

export const whatsappUrl = (text = DEFAULT_WHATSAPP_MESSAGE) => `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(text)}`;
