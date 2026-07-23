import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors';

interface LeadPayload {
  name: string;
  phone: string;
  email: string;
  community: string;
  checklistName: string;
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const body = (await req.json()) as Partial<LeadPayload>;
    const { name, phone, email, community, checklistName } = body;

    if (!name || !phone || !email || !community || !checklistName) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } },
      );
    }

    const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY');
    if (!RESEND_API_KEY) {
      return new Response(
        JSON.stringify({ error: 'Email service not configured' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } },
      );
    }

    const html = `
      <h2>New Checklist Download — GuardX360</h2>
      <p><strong>Checklist:</strong> ${checklistName}</p>
      <hr />
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Community Name:</strong> ${community}</p>
    `;

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'GuardX360 Checklists <onboarding@resend.dev>',
        to: ['info@guardx360.com'],
        reply_to: email,
        subject: `New checklist lead: ${checklistName} — ${name}`,
        html,
      }),
    });

    if (!res.ok) {
      const detail = await res.text();
      console.error('Resend failed', res.status, detail);
      return new Response(
        JSON.stringify({ error: 'Failed to send email', status: res.status, details: detail }),
        { status: res.status, headers: { ...corsHeaders, 'Content-Type': 'application/json' } },
      );
    }

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('send-checklist-lead error', err);
    return new Response(
      JSON.stringify({ error: (err as Error).message }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } },
    );
  }
});
