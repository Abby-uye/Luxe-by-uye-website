const WHATSAPP_PHONE = "2348079562021";

export function whatsappChat(message: string) {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}
