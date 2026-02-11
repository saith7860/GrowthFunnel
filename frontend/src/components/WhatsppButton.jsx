import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "923143247947"; // your WhatsApp number
  const message = encodeURIComponent(
    "Hi, I want to book a free strategy call for my business."
  );

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 p-4 rounded-full shadow-lg hover:scale-105 transition"
    >
      <MessageCircle className="text-white w-6 h-6" />
    </a>
  );
};

export default WhatsAppButton;
