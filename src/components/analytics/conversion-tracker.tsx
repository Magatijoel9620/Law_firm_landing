"use client";

import { useEffect } from "react";
import { trackConversionEvent, type ConversionEventName } from "@/lib/analytics";

const supportedEvents = new Set<ConversionEventName>([
  "service_finder_used",
  "service_detail_enquiry_clicked",
  "consultation_form_started",
  "consultation_request_submitted",
  "whatsapp_clicked",
  "phone_clicked",
  "email_clicked",
  "office_directions_clicked",
]);

export default function ConversionTracker() {
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const element = target.closest<HTMLElement>("[data-conversion-event]");
      if (!element) return;

      const eventName = element.dataset.conversionEvent as ConversionEventName;
      if (!supportedEvents.has(eventName)) return;

      trackConversionEvent(eventName, {
        service: element.dataset.conversionService ?? "",
        office: element.dataset.conversionOffice ?? "",
        source: element.dataset.conversionSource ?? "",
      });
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
