export const WHATSAPP_URL = "https://wa.me/972559520751";
export const PHONE_DISPLAY = "055-9520751";
export const ADDRESS = "רחוב מבצע עובדא, ראשון לציון";
export const HOURS = "א'-ה' 9:45-19:00";

export function waLink(message: string) {
  return `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`;
}
