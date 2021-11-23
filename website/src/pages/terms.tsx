// @ts-ignore
import Layout from "@theme/Layout";
import React from "react";
import { ThemeClassNames } from "@docusaurus/theme-common";

// @ts-ignore
import Page20210505, {toc as toc20210505} from "../terms/20210505.mdx";

import MDXPageWithVersioning, { PageWithVersion } from "../components/MDXPageVersioning";

const TermsVersion: PageWithVersion[] = [
  {
    id: "20210505",
    title: "Versi 1.0 (2020-05-05)",
    date: "5 Mei 2020",
    content: <Page20210505 />,
    toc: toc20210505,
  },
]

export default function TermsOfServicesPage() {
  return (
    <Layout
      title="Persyaratan Penggunaan Layanan"
      description="Halaman ini akan menjelaskan tentang persyaratan layanan untuk menggunakan Bot ini."
      permalink="/terms"
      wrapperClassName={ThemeClassNames.wrapper.mdxPages}
      pageClassName={ThemeClassNames.page.mdxPage}
    >
      <MDXPageWithVersioning dataCollection={TermsVersion} title="Persyaratan Penggunaan Layanan" />
    </Layout>
  )
}