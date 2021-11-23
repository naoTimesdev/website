// @ts-ignore
import Layout from "@theme/Layout";
import clsx from "clsx";
// @ts-ignore
import TOC from "@theme/TOC";
import React from "react";
// @ts-ignore
import MDXComponents from "@theme/MDXComponents";
import {ThemeClassNames} from "@docusaurus/theme-common";

import { MDXProvider } from '@mdx-js/react';

// @ts-ignore
import Page20210505, {toc as toc20210505} from "../privacy/20210505.mdx";
// @ts-ignore
import Page20211123, {toc as toc20211123} from "../privacy/20211123.mdx";

// @ts-ignore
import styles from "../css/privacySelector.module.css";

interface PrivacyPolicy {
  id: string;
  title: string;
  date: string;
  content: React.ReactElement;
  toc: any;
}

const PrivacyPolicyVersion: PrivacyPolicy[] = [
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

interface SelectorProps {
  onChange?: (data: PrivacyPolicy) => void;
}

interface SelectorState {
  selected: PrivacyPolicy;
}

class Selector extends React.Component<SelectorProps, SelectorState> {
  constructor(props: SelectorProps) {
    super(props);
    this.broadcast = this.broadcast.bind(this);
    this.onSelectionChange = this.onSelectionChange.bind(this);
    this.state = {
      selected: PrivacyPolicyVersion[0],
    };
  }

  broadcast() {
    if (typeof this.props.onChange === "function") {
      this.props.onChange(this.state.selected);
    }
  }

  onSelectionChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const targetId = event.target.value;
    const findData = PrivacyPolicyVersion.find(data => data.id === targetId);
    this.setState({ selected: findData! }, () => {
      this.broadcast();
    });
  }

  render() {
    const { selected } = this.state;
    return (
      <div style={{ marginBottom: "0.5rem" }}>
        <select className={clsx(styles["privacy-selector"])} onChange={this.onSelectionChange} value={selected.id}>
          {PrivacyPolicyVersion.map((data) => {
            return (
              <option key={data.id} value={data.id}>
                {data.title}
              </option>
            )
          })}
        </select>
      </div>
    )
  }
}

export default class PrivacyPageV2 extends React.Component<{}, SelectorState> {
  constructor(props: any) {
    super(props);
    this.handleSelection = this.handleSelection.bind(this);
    this.state = {
      selected: PrivacyPolicyVersion[0],
    }
  }

  handleSelection(data: PrivacyPolicy) {
    this.setState({ selected: data });
  }

  render() {
    const { selected } = this.state;
    const MDXDataContent = selected.content;
    const MDXTocContent = selected.toc;
    const date = selected.date;

    return (
      <Layout
        title="Kebijakan Privasi"
        description="Halaman ini akan menjelaskan tentang kebijakan privasi yang anda akan berikan kepada kami"
        permalink="/privasi"
        wrapperClassName={ThemeClassNames.wrapper.mdxPages}
        pageClassName={ThemeClassNames.page.mdxPage}
      >
        <main className="container container--fluid margin-vert--lg">
          <div className={clsx("row")} style={{justifyContent: "center"}}>
            <div id="konten-privasi" className={clsx("col", "col--8")}>
              <h1>Kebijakan Privasi</h1>
              <Selector onChange={this.handleSelection} />
              <p>
                <strong>Efektif pada</strong>
                {`: ${date}`}
              </p>
              <MDXProvider key="mdx-privacy-provider" components={MDXComponents}>
                {MDXDataContent}
              </MDXProvider>
            </div>
            <div className="col col--2">
              <TOC
                  toc={MDXTocContent}
              />
            </div>
          </div>
        </main>
      </Layout>
    )
  }
}