import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, MessageCircle, Phone } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  packageData: {
    title: string;
    region?: string;
    teaser?: string;
    images: string[];
  } | null;
}

const WHATSAPP_NUMBER = "254721772473";
const PHONE_NUMBER = "+254721772473";

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, packageData }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const hasImages = !!packageData && packageData.images.length > 0;
  const multiple = !!packageData && packageData.images.length > 1;

  useEffect(() => {
    setCurrentIndex(0);
  }, [packageData]);

  const nextImage = useCallback(() => {
    if (!packageData) return;
    setCurrentIndex((prev) =>
      prev === packageData.images.length - 1 ? 0 : prev + 1
    );
  }, [packageData]);

  const prevImage = useCallback(() => {
    if (!packageData) return;
    setCurrentIndex((prev) =>
      prev === 0 ? packageData.images.length - 1 : prev - 1
    );
  }, [packageData]);

  // Keyboard navigation + ESC to close, and lock body scroll while open.
  useEffect(() => {
    if (!isOpen) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    document.addEventListener("keydown", handleKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen, onClose, nextImage, prevImage]);

  if (!isOpen || !packageData || !hasImages) return null;

  const waText = `Hello Magical Continent! I'm interested in a holiday package to ${packageData.title}. Could you share options?`;
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waText)}`;

  const planThisTrip = () => {
    onClose();
    // Defer so the modal unmounts (scroll unlocks) before we scroll to the form.
    setTimeout(() => {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-3"
      role="dialog"
      aria-modal="true"
      aria-label={`${packageData.title} holiday package`}
      onClick={onClose}
    >
      <div
        className="relative flex max-h-[90vh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl bg-cream shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image area */}
        <div className="relative aspect-[16/10] w-full bg-green1/5">
          <Image
            src={packageData.images[currentIndex]}
            alt={`${packageData.title} — image ${currentIndex + 1} of ${packageData.images.length}`}
            fill
            sizes="(max-width: 768px) 100vw, 672px"
            className="object-contain"
          />

          <button
            className="absolute right-3 top-3 rounded-full bg-black/50 p-2 text-white transition hover:bg-black/70"
            onClick={onClose}
            aria-label="Close"
          >
            <X size={22} />
          </button>

          {multiple && (
            <>
              <button
                className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white transition hover:bg-black/70"
                onClick={prevImage}
                aria-label="Previous image"
              >
                <ChevronLeft size={22} />
              </button>
              <button
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white transition hover:bg-black/70"
                onClick={nextImage}
                aria-label="Next image"
              >
                <ChevronRight size={22} />
              </button>
              <span className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-black/50 px-3 py-1 text-xs text-white">
                {currentIndex + 1} / {packageData.images.length}
              </span>
            </>
          )}
        </div>

        {/* Details */}
        <div className="flex flex-col gap-4 overflow-y-auto p-6">
          <div>
            {packageData.region && (
              <p className="text-xs font-semibold uppercase tracking-widest text-gold">
                {packageData.region}
              </p>
            )}
            <h2 className="text-2xl font-bold text-green1">{packageData.title}</h2>
            {packageData.teaser && (
              <p className="mt-1 text-green1/80">{packageData.teaser}</p>
            )}
          </div>

          {/* Thumbnail strip */}
          {multiple && (
            <div className="flex gap-2 overflow-x-auto pb-1">
              {packageData.images.map((img, i) => (
                <button
                  key={img}
                  type="button"
                  onClick={() => setCurrentIndex(i)}
                  aria-label={`View image ${i + 1}`}
                  className={`relative h-14 w-20 shrink-0 overflow-hidden rounded-md ring-2 transition ${
                    i === currentIndex ? "ring-gold" : "ring-transparent opacity-70 hover:opacity-100"
                  }`}
                >
                  <Image src={img} alt="" fill sizes="80px" className="object-cover" />
                </button>
              ))}
            </div>
          )}

          {/* CTAs */}
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-green1 px-5 py-3 font-semibold text-cream transition hover:bg-green-700"
            >
              <MessageCircle className="h-5 w-5" />
              Enquire on WhatsApp
            </a>
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-green1/30 px-5 py-3 font-semibold text-green1 transition hover:bg-white"
            >
              <Phone className="h-5 w-5" />
              Call
            </a>
          </div>
          <button
            type="button"
            onClick={planThisTrip}
            className="text-sm font-semibold text-gold hover:underline"
          >
            Or plan this trip with our enquiry form →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
