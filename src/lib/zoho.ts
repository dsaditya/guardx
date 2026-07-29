// Zoho CRM Web-to-Lead submission via a hidden iframe (no page redirect).

const ZOHO_URL = "https://crm.zoho.in/crm/WebToLeadForm";
const IFRAME_NAME = "guardx360-zoho-target";

const HIDDEN_FIELDS: Record<string, string> = {
  xnQsjsdp: "8ef6b52cb69a53ea6549d0ef68918ed7db61bca04c2bac3204180e42f129ad09",
  zc_gad: "",
  xmIwtLD:
    "30ac06779e67da9b7a9c23828bff0679a2e33dbba3f2f8f112e9b5008b5484827d6bd9edcfa5d04653730c1f69f6241b",
  actionType: "TGVhZHM=",
  returnURL: "null",
};

export interface ZohoLead {
  name: string;
  phone: string;
  email: string;
  community?: string;
  message?: string;
}

function ensureIframe(): HTMLIFrameElement {
  let iframe = document.getElementById(IFRAME_NAME) as HTMLIFrameElement | null;
  if (!iframe) {
    iframe = document.createElement("iframe");
    iframe.id = IFRAME_NAME;
    iframe.name = IFRAME_NAME;
    iframe.style.display = "none";
    iframe.setAttribute("aria-hidden", "true");
    document.body.appendChild(iframe);
  }
  return iframe;
}

export function submitZohoLead(lead: ZohoLead) {
  if (typeof document === "undefined") return;
  ensureIframe();

  const form = document.createElement("form");
  form.action = ZOHO_URL;
  form.method = "POST";
  form.target = IFRAME_NAME;
  form.style.display = "none";
  form.acceptCharset = "UTF-8";

  const values: Record<string, string> = {
    ...HIDDEN_FIELDS,
    "Last Name": lead.name,
    Mobile: lead.phone,
    Email: lead.email,
    "Address - City": lead.community ?? "",
    Description: lead.message ?? "",
  };

  Object.entries(values).forEach(([name, value]) => {
    const input = document.createElement("input");
    input.type = "hidden";
    input.name = name;
    input.value = value;
    form.appendChild(input);
  });

  document.body.appendChild(form);
  form.submit();
  window.setTimeout(() => form.remove(), 2000);
}
