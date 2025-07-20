"use client";

import Image from "next/image";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/8801234567890?text=Hello%20Codexaa%20Team"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 p-3 rounded-full shadow-lg transition-transform transform hover:scale-110"
    >
      <Image
        src="/images/whatsapp.svg"
        alt="WhatsApp"
        width={24}
        height={24}
        priority
        className="select-none"
      />
    </a>
  );
};

export default WhatsAppButton;
