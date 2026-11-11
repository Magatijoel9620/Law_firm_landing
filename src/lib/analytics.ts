export type ConversionEventName =
  | "service_finder_used"
  | "service_detail_enquiry_clicked"
  | "consultation_form_started"
  | "consultation_request_submitted"
  | "general_enquiry_submitted"
  | "whatsapp_clicked"
  | "phone_clicked"
  | "email_clicked"
  | "office_directions_clicked";

export type ConversionContext = Record<string, string>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    __kanyiAnalyticsConsent?: boolean;
  }
}

/**
 * Provider-neutral, privacy-minimised conversion tracking.
 * Only allowlisted, non-personal context is passed to analytics providers.
 * No form values, message text, email addresses or phone numbers are accepted.
 */
export function trackConversionEvent(
  eventName: ConversionEventName,
  context: ConversionContext = {},
) {
  if (typeof window === "undefined" || window.__kanyiAnalyticsConsent !== true) return;

  const safeContext = Object.fromEntries(
    Object.entries(context).filter(([key, value]) =>
      ["service", "office", "source"].includes(key) &&
      typeof value === "string" &&
      value.trim().length > 0 &&
      value.length <= 120,
    ),
  );

  window.dispatchEvent(
    new CustomEvent("kanyi:conversion", {
      detail: { eventName, context: safeContext },
    }),
  );

  window.gtag?.("event", eventName, safeContext);
}
