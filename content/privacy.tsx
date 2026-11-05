// The privacy notice. Plain <p>, <ul>, <strong> and <a> tags are styled by
// `components/legal/LegalDocument.tsx`, so no classes are needed here.
// Update `lastUpdated` whenever you change this.

import { site } from "@/config/site";
import type { LegalDocumentContent } from "@/types/content";

const email = <a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a>;

export const privacy: LegalDocumentContent = {
  eyebrow: "Privacy notice",
  title: "Your information, plainly.",
  description: "How Kawe collects, uses and protects your information.",
  lastUpdated: "5 November 2026",
  intro: (
    <>
      Kawe is a book club app in development. Before launch, we collect a small amount of information through our survey
      so we can build the right thing and tell you when it’s ready. This notice explains what we collect, why, and what you
      can ask us to do with it.
    </>
  ),
  sections: [
    {
      title: "Who we are",
      body: (
        <p>
          Kawe (“we”, “us”) runs {site.domain} and is responsible for the information described here. For anything about
          your data, email {email}.
        </p>
      ),
    },
    {
      title: "What we collect",
      body: (
        <>
          <ul>
            <li>
              <strong>Survey answers.</strong> How you read, what you’d want from a book club app, and similar questions.
            </li>
            <li>
              <strong>Contact details, if you choose to give them.</strong> An email address or a WhatsApp number, asked
              for at the end of the survey.
            </li>
            <li>
              <strong>Emails you send us.</strong> If you write to {site.supportEmail}, we keep that conversation.
            </li>
            <li>
              <strong>Anonymous visit and performance statistics.</strong> Which pages are viewed, roughly where visitors
              come from, what device they use, and how quickly pages load. This uses no cookies and can’t identify you.
            </li>
          </ul>
          <p>This website itself doesn’t set cookies, and we don’t sell or rent your information to anyone.</p>
        </>
      ),
    },
    {
      title: "Why we use it",
      body: (
        <ul>
          <li>
            To send you launch news and early access, using the email or WhatsApp number you gave us. We do this with your{" "}
            <strong>consent</strong>, which you can withdraw at any time.
          </li>
          <li>
            To understand readers and shape the app, using survey answers. We rely on our{" "}
            <strong>legitimate interest</strong> in building a product people want. We look at answers in aggregate, not to
            profile individuals.
          </li>
          <li>To reply when you contact us, and to keep the website running and secure.</li>
        </ul>
      ),
    },
    {
      title: "Who handles it for us",
      body: (
        <>
          <p>We use a few trusted services, which only process your information on our instructions:</p>
          <ul>
            <li>
              <strong>Google Forms</strong> collects and stores survey answers.
            </li>
            <li>
              <strong>Zoho Mail</strong> handles our email.
            </li>
            <li>
              <strong>Vercel</strong> hosts this website and provides the anonymous visit and performance statistics.
            </li>
            <li>
              <strong>WhatsApp</strong> (Meta), only if you gave us a WhatsApp number and we message you there.
            </li>
          </ul>
          <p>
            Some of these providers may store data outside the UK. Where they do, they use legal safeguards approved under UK
            data protection law, such as standard contractual clauses.
          </p>
        </>
      ),
    },
    {
      title: "How long we keep it",
      body: (
        <p>
          We keep survey answers and contact details until shortly after launch, or until you ask us to delete them,
          whichever comes first. If you join Kawe when it launches, the app will have its own privacy policy. We delete
          anything we no longer need.
        </p>
      ),
    },
    {
      title: "Your rights",
      body: (
        <>
          <p>Under UK data protection law (UK GDPR), you can ask us to:</p>
          <ul>
            <li>show you the information we hold about you</li>
            <li>correct it, or delete it</li>
            <li>stop or limit how we use it, or object to us using it</li>
            <li>give you a copy to take elsewhere</li>
            <li>stop sending you messages, at any time</li>
          </ul>
          <p>Email {email} and we’ll reply within one month. There’s no charge.</p>
          <p>
            If you’re unhappy with how we’ve handled your information, please tell us first. You can also complain to the
            Information Commissioner’s Office at <a href="https://ico.org.uk/make-a-complaint/">ico.org.uk/make-a-complaint</a>.
          </p>
        </>
      ),
    },
    {
      title: "Changes to this notice",
      body: (
        <p>
          If we change how we use your information, we’ll update this page and the date at the top. For a significant change,
          we’ll tell you directly if we have your contact details.
        </p>
      ),
    },
  ],
};
