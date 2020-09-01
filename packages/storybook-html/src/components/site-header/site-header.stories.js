import { useEffect } from '@storybook/client-api';

// import styles
import './site-header.scss';

// import scripts
import siteHeaderNav from '@uq-uidf/site-header/src/js/site-header-navigation.es6';

// import HTML template strings
import siteHeaderHTML from './site-header.html';

import docs from './site-header.docs.mdx';

export default {
  title: 'Components/Site header',
  parameters: {
    docs: {
      page: docs
    },
    layout: "fullscreen"
  }
};

export const siteHeader = () => {
  useEffect(() => {
      var navelement = document.getElementById("jsNav");
      var nav = new siteHeaderNav(navelement, "uq-site-header__navigation");
    });
  return siteHeaderHTML;
};
