const WHATSAPP_NUMBER = '917010092090'; // Replace with actual Wandering Kite number

export function generateWhatsAppLink(
    service?: string,
    customMessage?: string
): string {
    const baseMessage = customMessage || getDefaultMessage(service);
    const encodedMessage = encodeURIComponent(baseMessage);
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
}

function getDefaultMessage(service?: string): string {
    const messages: Record<string, string> = {
        photography: "Hi! I'm interested in booking a photography session.",
        rentals: "Hi! I'd like to inquire about camera rentals.",
        studio: "Hi! I want to book the studio space.",
        podcast: "Hi! I'm interested in the podcast recording studio.",
    };

    return messages[service || ''] || "Hi! I'd like to know more about Wandering Kite Studio.";
}
