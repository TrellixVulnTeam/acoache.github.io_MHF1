/* eslint-disable no-console */
import React from 'react';
import Footer from '../../components/Footer_fr';
import DocumentMeta from 'react-document-meta';
import './styles.scss';
import description from '../../static/researchDescription_fr';
import Menu from '../../components/Menu_fr';
import Publications from '../../components/Publications_fr';
import Presentations from '../../components/Presentations_fr';

function Research() {
  const mainStyle = 'francais';

  const title = 'Anthony Coache - Recherche';

  return (
    <div>
      <DocumentMeta title={title} />
      <Menu menu={Menu} />
      <div className={mainStyle}>
        <h2>Recherche</h2>
        <p>{description} [<a href="https://scholar.google.ca/citations?user=pHYAxmMAAAAJ&hl=en">Google Scholar</a>] 
        [<a href="https://arxiv.org/search/cs?searchtype=author&query=Coache%2C+A">arXiv</a>] 
        [<a href="https://github.com/acoache">Github</a>]
        [<a href="https://papers.ssrn.com/sol3/cf_dev/AbsByAuth.cfm?per_id=5321412">SSRN</a>]
        </p>
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
