import clsx from "clsx";
// @ts-ignore
import TOC from "@theme/TOC";
// @ts-ignore
import MDXComponents from "@theme/MDXComponents";
import React from "react";
import { MDXProvider } from '@mdx-js/react';

// @ts-ignore
import styles from "../css/privacySelector.module.css";

export interface PageWithVersion {
  id: string;
  title: string;
  date: string;
  content: React.ReactElement;
  toc: any;
}

interface SelectorData<T> {
  dataCollection: T[];
  onChange?: (data: T) => void;
}

export interface DataCollection<T> {
  dataCollection: T[];
  title: string;
}
  
export interface VersioningState<T> {
  selected: T;
}

export class Selector<T extends PageWithVersion> extends React.Component<SelectorData<T>, VersioningState<T>> {
  constructor(props: SelectorData<T>) {
    super(props);
    this.broadcast = this.broadcast.bind(this);
    this.onSelectionChange = this.onSelectionChange.bind(this);
    this.state = {
      selected: props.dataCollection[0],
    };
  }

  broadcast() {
    if (typeof this.props.onChange === "function") {
      this.props.onChange(this.state.selected);
    }
  }

  onSelectionChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const targetId = event.target.value;
    const findData = this.props.dataCollection.find(data => data.id === targetId);
    this.setState({ selected: findData! }, () => {
      this.broadcast();
    });
  }

  render() {
    const { selected } = this.state;
    return (
      <div style={{ marginBottom: "0.5rem" }}>
        <select className={clsx(styles["privacy-selector"])} onChange={this.onSelectionChange} value={selected.id}>
          {this.props.dataCollection.map((data) => {
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

export default class MDXPageWithVersioning<T extends PageWithVersion> extends React.Component<DataCollection<T>, VersioningState<T>> {
  constructor(props: DataCollection<T>) {
    super(props);
    this.handleSelection = this.handleSelection.bind(this);
    this.state = {
      selected: props.dataCollection[0],
    };
  }

  handleSelection(data: T) {
    this.setState({ selected: data });
  }

  render() {
    const { selected } = this.state;
    const MDXDataContent = selected.content;
    const MDXTocContent = selected.toc;
    const date = selected.date;

    return (
      <main className="container container--fluid margin-vert--lg">
        <div className={clsx("row")} style={{justifyContent: "center"}}>
          <div id="mdx-sel-page" className={clsx("col", "col--8")}>
            <h1>{this.props.title}</h1>
            {/* @ts-ignore */}
            <Selector dataCollection={this.props.dataCollection} onChange={this.handleSelection} />
            <p>
              <strong>Efektif pada</strong>
              {`: ${date}`}
            </p>
            <MDXProvider key="mdx-privacy-provider" components={MDXComponents}>
              {MDXDataContent}
            </MDXProvider>
          </div>
          <div className="col col--2">
            <TOC toc={MDXTocContent} />
          </div>
        </div>
      </main>
    )
  }
}