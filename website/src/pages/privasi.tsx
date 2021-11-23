// @ts-ignore
import Layout from "@theme/Layout";
import React from "react";
import { ThemeClassNames } from "@docusaurus/theme-common";

// @ts-ignore
import Page20210505, {toc as toc20210505} from "../privacy/20210505.mdx";
// @ts-ignore
import Page20211123, {toc as toc20211123} from "../privacy/20211123.mdx";

import MDXPageWithVersioning, { PageWithVersion } from "../components/MDXPageVersioning";

const PrivacyPolicyVersion: PageWithVersion[] = [
  {
    id: "20211123",
    title: "Versi 1.1 (2020-11-23)",
    date: "23 November 2021",
    content: <Page20211123 />,
    toc: toc20211123,
  },
  {
    id: "20210505",
    title: "Versi 1.0 (2021-05-05)",
    date: "05 Mei 2021",
    content: <Page20210505 />,
    toc: toc20210505,
  }
]

export default function PrivacyPageV2() {
  return (
    <Layout
      title="Kebijakan Privasi"
      description="Halaman ini akan menjelaskan tentang kebijakan privasi yang anda akan berikan kepada kami"
      permalink="/privasi"
      wrapperClassName={ThemeClassNames.wrapper.mdxPages}
      pageClassName={ThemeClassNames.page.mdxPage}
    >
      <MDXPageWithVersioning dataCollection={PrivacyPolicyVersion} title="Kebijakan Privasi" />
    </Layout>
  )
}
