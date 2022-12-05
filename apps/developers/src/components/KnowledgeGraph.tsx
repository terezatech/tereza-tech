import * as React from 'react';
import { GraphData } from '@tereza-tech/react-zettel';
import BrowserOnly from '@docusaurus/BrowserOnly';
import Layout from '@theme/Layout';

const KnowledgeGraphComponent = ({ graphData }: { graphData: GraphData }) => {
  return (
    <Layout>
      <BrowserOnly>
        {() => {
          // eslint-disable-next-line @typescript-eslint/no-var-requires
          const { KnowledgeGraph } = require('@tereza-tech/react-zettel');
          return (
            <KnowledgeGraph graphData={graphData} width={1000} height={600} />
          );
        }}
      </BrowserOnly>
    </Layout>
  );
};

export default KnowledgeGraphComponent;