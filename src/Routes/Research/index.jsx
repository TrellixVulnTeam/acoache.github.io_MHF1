/* eslint-disable no-console */
import React from 'react';
import Footer from '../../components/Footer';
import DocumentMeta from 'react-document-meta';
import './styles.scss';
import description from '../../static/researchDescription';
import Menu from '../../components/Menu';
import Publications from '../../components/Publications';
import Presentations from '../../components/Presentations';

function Research() {
  const mainStyle = 'english';

  const title = 'Anthony Coache - Research';

  return (
    <div>
      <DocumentMeta title={title} />
      <Menu menu={Menu} />
      <div className={mainStyle}>
        <h2>Research</h2>
        <p>{description}</p>
        <hr />
        <Publications publications={Publications} />
        <hr />
        <Presentations presentations={Presentations} />
      </div>
      <Footer/>
    </div>
  );
}

export default Research;
