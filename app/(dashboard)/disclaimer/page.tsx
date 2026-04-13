export default function DisclaimerPage() {
  return (
    <main className="bg-white">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-wide text-[#0614b8]">
          Legal
        </p>
        <h1 className="mt-4 text-3xl font-semibold text-gray-950">
          Disclaimers
        </h1>

        <div className="mt-10 space-y-10 text-sm leading-7 text-gray-700">
          <section>
            <h2 className="text-base font-semibold text-gray-950">
              No legal, tax, or financial advice
            </h2>
            <p className="mt-3">
              The materials and outputs provided by Dominion Consulting are for
              informational and decision-support purposes only. Nothing produced
              by Dominion constitutes legal advice, tax advice, financial
              advice, investment advice, or compliance guidance. Clients should
              engage qualified legal, tax, compliance, or financial
              professionals for advice specific to their circumstances.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-gray-950">
              Advisory outputs are not recommendations
            </h2>
            <p className="mt-3">
              Transaction reviews, route analyses, and structured materials
              prepared by Dominion are designed to support internal
              decision-making and preparation for specialist review. They do not
              constitute a recommendation to execute any transaction, enter any
              agreement, or take any specific course of action.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-gray-950">
              No guarantee of outcomes
            </h2>
            <p className="mt-3">
              Cross-border transactions are subject to regulatory, operational,
              and market conditions that may change without notice. Dominion
              makes no representation that any transaction structure, route, or
              arrangement reviewed will succeed, be approved by relevant
              authorities, or achieve any particular outcome.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-gray-950">
              Andersen Global affiliation
            </h2>
            <p className="mt-3">
              Dominion Consulting is a collaborating firm of Andersen Global.
              Andersen Global is an international association of legally
              separate, independent member firms. Dominion Consulting operates
              independently and is not a member firm of Andersen Global.
              References to coordination with Andersen Global member firms
              reflect the capacity to facilitate introductions and structured
              collaboration, not a direct service relationship.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-gray-950">
              Confidentiality
            </h2>
            <p className="mt-3">
              Transaction details and scenarios submitted through the member
              workspace are treated as confidential. Dominion does not disclose
              client transaction information to third parties except as required
              by law or as expressly authorized by the client.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-gray-950">
              Limitation of liability
            </h2>
            <p className="mt-3">
              To the fullest extent permitted by applicable law, Dominion
              Consulting shall not be liable for any direct, indirect,
              incidental, or consequential losses arising from reliance on any
              advisory output, transaction review, or material produced in
              connection with an engagement.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
