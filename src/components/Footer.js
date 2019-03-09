import React from 'react';
import _ from 'lodash';

import Contact from './Contact';
import Social from './Social';

export default class Footer extends React.Component {
    render() {
        return (
            <footer id="footer">
                <div className="inner">
                    {_.get(this.props, 'pageContext.site.siteMetadata.contact.enabled') && 
                        <Contact {...this.props} />
                    }
                    {_.get(this.props, 'pageContext.site.siteMetadata.social.enabled') && 
                        <Social {...this.props} />
                    }
                    <ul className="copyright">
                        <li>&copy; {_.get(this.props, 'pageContext.site.siteMetadata.title')}. All rights reserved</li>
                    </ul>
                </div>
            </footer>
        );
    }
}
